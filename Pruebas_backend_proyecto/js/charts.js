// CHART FUNCTIONS
function getLatestYearMonth() {
    // Convert object keys (years) to numbers and find the max
    const years = Object.keys(historicData).map(Number);
    const latestYear = Math.max(...years);
  
    // From that year, get all month keys (excluding 'yearAmount')
    const monthKeys = Object.keys(historicData[latestYear])
      .filter((key) => key !== "yearAmount") // exclude yearAmount
      .map(Number);                          // convert to number
  
    // Find the largest month in that year
    const latestMonth = Math.max(...monthKeys);
  
    return { latestYear, latestMonth };
}
  
// CHART CREATION
const timeSeries = document.querySelector("#timeSeriesChart");
  
let usedColors = []
let yearColor = {}
  
const labels = [];
const data = [];
const backgroundColors = [];
  
Object.keys(historicData).forEach((year) => {
    let color  
    if (!yearColor[year]) {
      function getDistinctBluePurple(existingColors) {
        let hue, randomColor;
        let minDifference = 20; // Minimum hue difference to ensure noticeable variation
        let attempts = 0;
        
        do {
            hue = Math.floor(Math.random() * 80) + 200; // Hue between 200 (blue) and 280 (purple)
            let saturation = Math.floor(Math.random() * 40) + 60; // 60% - 100% saturation
            let lightness = Math.floor(Math.random() * 30) + 40; // 40% - 70% lightness
            randomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  
            attempts++;
            if (attempts > 10) break; // Avoid infinite loops in rare cases
        } while (existingColors.some(color => Math.abs(hue - parseInt(color.match(/\d+/)[0])) < minDifference));
  
        return randomColor;
    }
    let randomColor = getDistinctBluePurple(usedColors);
      while (usedColors.includes(randomColor)) {
        randomColor = getRandomBluePurple()
      }
      usedColors.push(randomColor)
      yearColor[year] = randomColor
    }
    color = yearColor[year]
    Object.keys(historicData[year]).forEach((month) => {
        if (String(month) === "yearAmount") return
        labels.push(`${year}-${String(month).padStart(2, "0")}`);
        data.push(historicData[year][month].monthAmount);
        backgroundColors.push(color);
    });
});
  
new Chart(timeSeries, {
      type: "bar", // Change to 'line' if you prefer a line chart
      data: {
          labels: labels,
          datasets: [{
              label: "Monthly Spending",
              data: data,
              backgroundColor: backgroundColors,
              borderColor: backgroundColors,
              borderWidth: 2
          }]
      },
      options: {
          onClick: function(event, elements) {
            if (elements.length > 0) {
              // Get the index of the clicked bar
              const clickedIndex = elements[0].index;
      
              // Get the label for the clicked bar, which is 'YYYY-MM'
              const clickedLabel = this.data.labels[clickedIndex];
      
              // Split the label to get year and month
              const aux = clickedLabel.split('-');
              
              // Fix the month format
              if (aux[1].charAt(0) === "0") {
                aux[1] = aux[1].charAt(1)
              }
  
              // Call function to update the charts with the selected year and month
              updateCharts(aux[0], aux[1]);
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: { display: false },
              title: {
                  display: true,
                  text: "Monthly Spending Over Time",
                  font: { size: 18, weight: "bold" }
              }
          },
          scales: {
              x: { title: { display: true, text: "Month" } },
              y: { title: { display: true, text: "Amount ($)" } }
          }
      }
  });
  
  let currentTime = getLatestYearMonth()
  
  let pieData = historicData[currentTime.latestYear][currentTime.latestMonth]["percentage_by_category"]
  let monthAmount = historicData[currentTime.latestYear][currentTime.latestMonth]["monthAmount"]
  const pie = document.querySelector("#pieChart");
  
  let pieChart = new Chart(pie, {
    type: 'doughnut',
    data: {
        labels: spend_category,
        datasets: [{
            data: Object.values(pieData),
            backgroundColor: Object.values(spend_color),
            borderColor: Object.values(spend_color),
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        aspectRatio: window.innerWidth <= 768 ? 1.2 : 2,
        cutout: '50%',
        layout: {
          padding: {
              bottom: 50,
              left: 50,
              right: 50
          }
        },
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    usePointStyle: true,
                    padding: 15,
                    font: {
                        size: 14
                    },
                    generateLabels: function(chart) {
                      let dataset = chart.data.datasets[0];
                      return chart.data.labels
                          .map((label, i) => {
                              let value = dataset.data[i];
                              let percentage = value.toFixed(1) + '%'; // Format as percentage
                              
                              // Exclude categories with 0.0% value
                              if (value === 0) return null;
  
                              return {
                                  text: `${label}: ${percentage}`, // Appends percentage to category name
                                  fillStyle: dataset.backgroundColor[i],
                                  strokeStyle: dataset.borderColor[i],
                                  lineWidth: 1,
                                  hidden: isNaN(value) || value === 0,
                                  index: i
                              };
                          })
                          .filter(item => item !== null); // Remove null values (categories with 0.0%)
                    }
                }
            },
            title: {
                display: true,
                text: 'Spend Distribution by Category',
                font: {
                    size: 18,
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 60
                },
                color: '#333'
            },
            datalabels: { // Disable percentages inside the chart
                display: false
            },
            centerLabel: {
              text: `Total Spend: ${historicData[currentTime.latestYear][currentTime.latestMonth]["monthAmount"]} €`
            }
        }
    },
    plugins: [ChartDataLabels, {
      id: 'centerLabel',
      afterDraw: function(chart) {
        let ctx = chart.ctx;
        let chartArea = chart.chartArea;
  
        if (!chartArea) return;
  
        let width = chartArea.right - chartArea.left;
        let height = chartArea.bottom - chartArea.top;
  
        ctx.save();
        let fontSize = (height / 20).toFixed(2);
        ctx.font = fontSize + "px sans-serif";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
  
        let text = chart.options.plugins.centerLabel.text; 
        let textX = chartArea.left + width / 2;
        let textY = chartArea.top + height / 2;
  
        ctx.fillText(text, textX, textY);
        ctx.restore();
      }
    }]
  });
  
  
  let barData = historicData[currentTime.latestYear][currentTime.latestMonth]["spend_by_category"]
  const bar = document.querySelector("#barChart");
  
  let barChart = new Chart(bar, {
    type: 'bar',
    data: {
      labels: spend_category.filter((_, i) => Object.values(barData)[i] !== 0), // Filter labels
      datasets: [{
          data: Object.values(barData).filter(value => value !== 0), // Filter out categories with 0 euros
          borderWidth: 1,
          backgroundColor: Object.values(spend_color).filter((_, i) => Object.values(barData)[i] !== 0), // Filter corresponding colors
          borderColor: Object.values(spend_color).filter((_, i) => Object.values(barData)[i] !== 0) // Filter corresponding border colors
      }]
    },
    options: {
        indexAxis: 'y', // Makes it a horizontal bar chart
        maintainAspectRatio: false,
        scales: {
            x: { // Keep 'x' instead of 'y' because the axis is flipped
                beginAtZero: true
            }
        },
        layout: {
          padding: {
              bottom: 50, // Increase bottom padding
              left: 50, // Increase left padding
              right: 50 // Increase right padding
          }
        },
        plugins: {
            legend: {
              display: false
            },
            title: {
              display: true, // Enable the title
              text: 'Spend in euros per category', // Title text
              font: {
                  size: 18,
                  weight: 'bold'
              },
              padding: {
                  top: 10,
                  bottom: 20
              },
              color: '#333' // Title text color
            },
            datalabels: {
                anchor: 'end', // Positions label at the end of the bar
                align: 'end', // Aligns text inside the bar
                color: '#000', // Text color
                font: {
                    weight: 'bold',
                    size: 14
                },
                formatter: (value) => value !== 0 ? value.toLocaleString() + ' €' : ''
            }
        }
    },
    plugins: [ChartDataLabels] // Register the data labels plugin
});
  
function updateCharts(year, month) {
    const selectedData = historicData[year][month];
  
    // PieChart data update
    pieChart.data.datasets[0].data = Object.values(selectedData.percentage_by_category);
    pieChart.options.plugins.centerLabel.text = `Total Spend: ${selectedData["monthAmount"]} €`;
    pieChart.update()
  
    let barDataForSelectedTimestamp = selectedData["spend_by_category"];
  
    // BarChart data update
    let filteredEntries = Object.entries(barDataForSelectedTimestamp).filter(([_, value]) => value !== 0);
    
    let filteredCategories = filteredEntries.map(([category, _]) => category);
    let filteredData = filteredEntries.map(([_, value]) => value);
    let filteredColors = filteredCategories.map(category => spend_color[category] || "#ccc"); // Default color if missing
  
    barChart.data.labels = filteredCategories;
    barChart.data.datasets[0].data = filteredData;
    barChart.data.datasets[0].backgroundColor = filteredColors;
    barChart.data.datasets[0].borderColor = filteredColors;
    barChart.update();
}
  