

// Data objects
let transactions = []
let currentTotalSpend = 0

let historicData = {}

let spend_by_category = {
  "Retail Stores": 0,
  "Grocery Stores & Supermarkets": 0,
  "Restaurants & Cafés": 0,
  "Entertainment & Leisure": 0,
  "Health & Wellness": 0,
  "Transportation": 0,
  "Education & Learning": 0,
  "Housing & Utilities": 0,
  "Travel & Tourism": 0,
  "Financial Services": 0,
  "Tech & Subscriptions": 0,
  "Hobbies & Recreation": 0,
  "Donations & Charity": 0,
  "Bizum": 0
}

let percentage_by_category = {
  "Retail Stores": 0,
  "Grocery Stores & Supermarkets": 0,
  "Restaurants & Cafés": 0,
  "Entertainment & Leisure": 0,
  "Health & Wellness": 0,
  "Transportation": 0,
  "Education & Learning": 0,
  "Housing & Utilities": 0,
  "Travel & Tourism": 0,
  "Financial Services": 0,
  "Tech & Subscriptions": 0,
  "Hobbies & Recreation": 0,
  "Donations & Charity": 0,
  "Bizum": 0
}

// RANDOM DATA (ALREADY COMPLETED)

const bank_names = [
  "BBVA", "Santander", "CaixaBank", "Bankinter", "Banco Sabadell",
  "ING España", "EVO Banco", "Abanca", "Kutxabank", "Unicaja Banco",
  "Banco Mediolanum", "Openbank", "Ibercaja", "Laboral Kutxa", 
  "Cajasur", "Caixa Ontinyent", "Caixa Pollença"
];

const spend_category = [
    "Retail Stores",
    "Grocery Stores & Supermarkets",
    "Restaurants & Cafés",
    "Entertainment & Leisure",
    "Health & Wellness",
    "Transportation",
    "Education & Learning",
    "Housing & Utilities",
    "Travel & Tourism",
    "Financial Services",
    "Tech & Subscriptions",
    "Hobbies & Recreation",
    "Donations & Charity",
    "Bizum"
];

const sc_business_name = {
    "Retail Stores": [
    "El Corte Inglés", "Carrefour", "Alcampo", "Decathlon", "MediaMarkt", "Bershka", 
    "Pull & Bear", "Stradivarius", "Zara", "Mango", "Desigual", "Springfield", "Cortefiel", 
    "Massimo Dutti", "Lefties", "Primark España", "Fnac", "Tiger", "Parfois", "Misako"
  ],
  "Grocery Stores & Supermarkets": [
    "Mercadona", "Día", "Carrefour Market", "Alcampo", "Eroski", "Lidl", "Aldi", "Supercor", 
    "Consum", "Hipercor", "BM Supermercados", "Ahorramas", "Coviran", "Froiz", "Gadis", 
    "Bonpreu", "Spar España", "HiperDino", "La Sirena", "El Árbol"
  ],
  "Restaurants & Cafés": [
    "Vips", "100 Montaditos", "Telepizza", "Ginos", "Rodilla", "Pans & Company", "Foster’s Hollywood", 
    "El Brillante", "La Sureña", "Cañas y Tapas", "Goiko", "Hamburguesa Nostra", "Lateral", 
    "TGB - The Good Burger", "La Tagliatella", "UDON", "Casa Dani", "Casa Lucio", "Restaurante Botín", "Dunkin'"
  ],
  "Entertainment & Leisure": [
    "Cinesa", "Yelmo Cines", "Kinépolis", "Ocine", "Autocine Madrid RACE", "PortAventura", "Parque Warner", 
    "Siam Park", "Terra Mítica", "Zoo de Madrid", "Loro Parque", "Aquópolis", "Museo del Prado", 
    "Museo Reina Sofía", "Teatro Español", "Gran Teatro del Liceu", "Sala Apolo", "Razzmatazz", 
    "Shôko Madrid", "WiZink Center"
  ],
  "Health & Wellness": [
    "Farmacias 24h", "Farmacias Ecoceutics", "Farmacias Alphega", "Vitaldent", "Sanitas", "Quirónsalud", 
    "Dorsia Clínicas", "Clínicas Baviera", "Oftalvist", "McFIT", "Basic-Fit", "O2 Centro Wellness", 
    "Metropolitan", "Anytime Fitness", "EVOfit", "Vivagym", "Altafit", "Asssa Seguros", "Adeslas", "DKV"
  ],
  "Transportation": [
    "Cabify", "Uber", "BlaBlaCar", "Renfe", "Metro de Madrid", "TMB Barcelona", "Euskotren", 
    "Ouigo", "Iryo", "Avanza", "ALSA", "Socibus", "Repsol", "Cepsa", "Galp", "BP", "Petronor", 
    "Shell España", "Goldcar", "Europcar"
  ],
  "Education & Learning": [
    "Domestika", "Aprendum", "Tutellus", "UNED", "Google Activate", "CEAC", "EF Education First", 
    "Instituto Cervantes", "Universidad Complutense de Madrid", "Universidad de Barcelona", 
    "Universidad Autónoma de Madrid", "Universidad Politécnica de Valencia", "Udemy", "Coursera", 
    "LinkedIn Learning", "Formación Profesional CCC", "MasterD", "Campus Training", "EAE Business School", "Esade"
  ],
  "Housing & Utilities": [
    "IKEA", "Conforama", "Leroy Merlin", "Bauhaus", "Brico Depôt", "Zara Home", "H&M Home", "Maisons du Monde", 
    "Casa Viva", "Vitra", "Endesa", "Iberdrola", "Naturgy", "Repsol Luz", "Acciona Energía", "Movistar", 
    "Orange", "Vodafone", "Yoigo", "Pepephone"
  ],
  "Travel & Tourism": [
    "Iberia", "Air Europa", "Vueling", "Ryanair", "NH Hoteles", "Meliá", "Barceló", "Riu Hotels", 
    "Paradores", "Booking.com", "Trivago", "Edreams", "Viajes El Corte Inglés", "Atrápalo", 
    "Renfe Viajeros", "MSC Cruceros", "Pullmantur", "Binter Canarias", "Volotea", "Iryo"
  ],
  "Financial Services": [
    "BBVA", "Santander", "CaixaBank", "Banco Sabadell", "Bankinter", "EVO Banco", "ING España", "Abanca", 
    "Kutxabank", "Ibercaja", "Unicaja Banco", "Openbank", "Bizum", "PayPal", "Revolut", "N26", "Wise", 
    "Bnext", "Banco Mediolanum", "Cajasur"
  ],
  "Tech & Subscriptions": [
    "Netflix", "HBO Max", "Disney+", "Prime Video", "Filmin", "Movistar Plus+", "Spotify", "Apple Music", 
    "Tidal", "YouTube Premium", "Dropbox", "Google One", "Microsoft 365", "Adobe Creative Cloud", 
    "Canva Pro", "Notion", "GitHub", "Twitch", "Crunchyroll", "DAZN"
  ],
  "Hobbies & Recreation": [
    "Decathlon", "Forum Sport", "Base Deportes", "Adidas", "Nike", "Joma", "New Balance", "Salomon", 
    "The North Face", "El Ganso", "Hobby Consolas", "Juguettos", "LEGO Store", "Game", "Fnac", 
    "MediaMarkt", "Casa del Libro", "El Dragón Lector", "Atlántica Juegos", "Magic Madrid"
  ],
  "Donations & Charity": [
    "Cruz Roja Española", "Médicos Sin Fronteras", "Unicef España", "Save the Children", 
    "Caritas", "World Wildlife Fund", "Fundación Vicente Ferrer", "Banco de Alimentos", 
    "ACNUR", "Greenpeace España", "Aldeas Infantiles SOS", "Manos Unidas", "Fundación ONCE", 
    "Plan International España", "Amnistía Internacional", "Médicos del Mundo", 
    "Fundación Josep Carreras", "Asociación Española Contra el Cáncer", "Open Arms", "Educo"
  ],
  "Bizum": [
    "Alejandro", "Sofía", "Mateo", "Valentina", "Lucas", 
    "Isabella", "Diego", "Camila", "Javier", "Martina", 
    "Carlos", "Elena", "Fernando", "Lucía", "Gabriel", 
    "Mariana", "Ricardo", "Paula", "Sebastián", "Daniela"
  ]
};

const sc_spend_range = {
  "Retail Stores": [5, 70],
  "Grocery Stores & Supermarkets": [10, 70],
  "Restaurants & Cafés": [3, 60],
  "Entertainment & Leisure": [5, 100],
  "Health & Wellness": [10, 200],
  "Transportation": [1, 20],
  "Education & Learning": [15, 25],
  "Housing & Utilities": [50, 120],
  "Travel & Tourism": [20, 340],
  "Financial Services": [1, 200],
  "Tech & Subscriptions": [2, 20],
  "Hobbies & Recreation": [5, 70],
  "Donations & Charity": [1, 15],
  "Bizum": [0.50, 50]
}

const spend_distribution = {
  "Retail Stores": 3,
  "Grocery Stores & Supermarkets": 12,
  "Restaurants & Cafés": 6,
  "Entertainment & Leisure": 3,
  "Health & Wellness": 3,
  "Transportation": 4,
  "Education & Learning": 2,
  "Housing & Utilities": 9,
  "Travel & Tourism": 1,
  "Financial Services": 2,
  "Tech & Subscriptions": 2,
  "Hobbies & Recreation": 2,
  "Donations & Charity": 1,
  "Bizum": 1
};

const spend_color = {
  "Retail Stores": "#1E90FF", // Dodger Blue
  "Grocery Stores & Supermarkets": "#4169E1", // Royal Blue
  "Restaurants & Cafés": "#4682B4", // Steel Blue
  "Entertainment & Leisure": "#5A5ACD", // Medium Slate Blue
  "Health & Wellness": "#6A5ACD", // Slate Blue
  "Transportation": "#483D8B", // Dark Slate Blue
  "Education & Learning": "#4B0082", // Indigo
  "Housing & Utilities": "#8A2BE2", // Blue Violet
  "Travel & Tourism": "#9370DB", // Medium Purple
  "Financial Services": "#7B68EE", // Medium Slate Blue
  "Tech & Subscriptions": "#663399", // Rebecca Purple
  "Hobbies & Recreation": "#9400D3", // Dark Violet
  "Donations & Charity": "#9932CC", // Dark Orchid
  "Bizum": "#8B008B" // Dark Magenta
};


const sc_icon = {
    "Retail Stores": "fas fa-store",
    "Grocery Stores & Supermarkets": "fas fa-shopping-basket",
    "Restaurants & Cafés": "fas fa-utensils",
    "Entertainment & Leisure": "fas fa-film",
    "Health & Wellness": "fas fa-heartbeat",
    "Transportation": "fas fa-bus",
    "Education & Learning": "fas fa-graduation-cap",
    "Housing & Utilities": "fas fa-home",
    "Travel & Tourism": "fas fa-plane",
    "Financial Services": "fas fa-university",
    "Tech & Subscriptions": "fas fa-laptop",
    "Hobbies & Recreation": "fas fa-gamepad",
    "Donations & Charity": "fas fa-hands-helping",
    "Bizum": "fas fa-hand-holding-usd"
};

// OPERATING METHODS

function getRandomDate(month, year) {
  const daysInMonth = new Date(year, month, 0).getDate(); // Get last day of the month
  const randomDay = Math.floor(Math.random() * daysInMonth) + 1; // Random day between 1 and max
  return new Date(year, month - 1, randomDay); // Month is 0-based in JS
}

function parseDate(dateStr) {
  // Assuming the format is "DD/MM/YYYY" or similar
  const [day, month, year] = dateStr.split('/');  // Adjust according to your format
  return new Date(year, month - 1, day);  // Month is 0-indexed in JavaScript
}

function generateCard(month, year) {
  let s_cat = spend_category[Math.floor(Math.random() * spend_category.length)];
  let s_cat_array = sc_business_name[s_cat];
  let max = sc_spend_range[s_cat][1]
  let min = sc_spend_range[s_cat][0]
  let cardDate = getRandomDate(month, year)
  let card = {
    "id": transactions.length + 1,
    "category": s_cat,
    "amount": Math.floor(Math.random() * (max - min)) + min,
    "business": s_cat_array[Math.floor(Math.random() * s_cat_array.length)],
    "bank": bank_names[Math.floor(Math.random() * bank_names.length)],
    "date": cardDate.toLocaleDateString(),
    "icon": sc_icon[s_cat]
  };

  // Beginning of new section
  if (!historicData[year]) {
    historicData[year] = { yearAmount: 0 };
  }

  if (!historicData[year][month]) {
      historicData[year][month] = {
          monthAmount: 0,
          transactions: [],
      };
  }

  historicData[year][month].monthAmount += card.amount
  historicData[year].yearAmount += card.amount
  historicData[year][month].transactions.push(card);
  //End of new section

  transactions.push(card)
  spend_by_category[s_cat] += card.amount
  currentTotalSpend += card.amount
}

function renderCard(card) {
    document.querySelector(".gallery").innerHTML += `
      <div class="transaction" style="background-color: ${spend_color[card.category]}">
          <h1>${card.amount} €</h1>
          <h3>${card.business}</h3>
          <h3>${card.bank}</h3>
          <h3>${card.date}</h3>
          <h3><span class="${card.icon}"></span></h3>
      </div>
    `
}

// MAIN
let keys = Object.keys(spend_distribution)

for (let i = 0; i < 3; i++) {
  for (let j = 1; j <= 12; j++) {
    // Generate all cards for the current month and year in one go
    Array(10).fill().forEach(() => generateCard(j, 2022 + i));
    historicData[2022 + i][j]["spend_by_category"] = { ...spend_by_category }
    Object.keys(spend_by_category).forEach((element) => {
      percentage_by_category[element] = spend_by_category[element] * 100 / historicData[2022+i][j]["monthAmount"];
    });
    historicData[2022 + i][j]["percentage_by_category"] = { ...percentage_by_category }
    Object.keys(spend_by_category).forEach(key => {
      spend_by_category[key] = 0;
      percentage_by_category[key] = 0
    });
  }
}

transactions.sort((a, b) => parseDate(a.date) - parseDate(b.date));  // Sort by parsed date
transactions.reverse();  // Reverse to get the most recent first
transactions.forEach(card => renderCard(card));

Object.keys(spend_by_category).forEach((element) => {
  percentage_by_category[element] = spend_by_category[element] * 100 / currentTotalSpend;
});


console.log(historicData)

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

