const gallery = document.querySelector(".gallery")
let dogList =  []
let breedList = []
let index = 0
let breedIndex = 0
let automaticDogsCount = 0

async function selectSetUp() { 
    if (breedList.length === 0) {
        document.querySelector("#breeds-filter").style.display = "none"
    }
    let breeds = await listAllBreeds()
    let keys = Object.keys(breeds)
    keys.forEach((element) => {
        let firstName = element.charAt(0).toUpperCase() + element.slice(1)
      if (breeds[element].length === 0) {
        document.querySelector("#breeds").innerHTML += `<option value="${element}">${firstName}</option>`
      } else {
        breeds[element].forEach((subElement) => {
          let secondName = subElement.charAt(0).toUpperCase() + subElement.slice(1)
          document.querySelector("#breeds").innerHTML += `<option value="${element}/${subElement}">${firstName} ${secondName}</option>`
        })
      }
    })
    console.log(breeds)
}

function breedFilterSetUp(breed) {
    document.querySelector("#breeds-filter").style.display = "inline-block"
    if (!breedList.includes(breed)) {
        breedList.push(breed)
        if (breed.includes("/")) {
            let names = breed.split("/")
            let name = names[0].charAt(0).toUpperCase() + names[0].slice(1)
            let surname = names[1].charAt(0).toUpperCase() + names[1].slice(1)
            document.querySelector("#breeds-filter").innerHTML += `<option value="${breed}">${name} ${surname}</option>`
        } else {
            let name = breed.charAt(0).toUpperCase() + breed.slice(1)
            document.querySelector("#breeds-filter").innerHTML += `<option value="${breed}">${name}</option>`
        }
    }
}

function renderDogImages(beginning) {
    let auxList = dogList.slice(beginning)
    auxList.forEach((element) => {
        let card = document.createElement("div");
        const match = element.match(/https:\/\/images\.dog\.ceo\/breeds\/(.*?)\//);
        const result = match ? match[1].replace(/-/g, "/") : null;
        card.classList.add("card");
        card.innerHTML = `
            <img src="${element}" alt="${result}">
            <div class="counter">
                <div>🤮 0</div>
                <div>💘 0</div>
            </div>
            <div class="counter">
                <button class="voting-buttons js-cute">Cute af</button>
                <button class="voting-buttons js-ugly">Ugly ahh boi</button>
            </div>
        `
        breedFilterSetUp(result)

        if(document.querySelector("#ending").checked) {
            gallery.appendChild(card)
        } else {
            gallery.prepend(card)
        }
        index++

        // Listener for the votes
        card.querySelectorAll(".voting-buttons").forEach((element) => {
            element.addEventListener("click", () => {
                let cute = element.classList.contains("js-cute")
                let votes = element.parentElement.parentElement.querySelectorAll(".counter div")
                if (cute) {
                    votes[1].innerHTML = `💘 ${parseInt(votes[1].innerHTML.split(" ")[1]) + 1}`
                } else {
                    votes[0].innerHTML = `🤮 ${parseInt(votes[0].innerHTML.split(" ")[1]) + 1}`
                }
            })
        })
    })

    if (dogList.length === 0) {
        document.querySelector("#filter-div").style.display = "none"
    } else {
        document.querySelector("#filter-div").style.display = "block"
    }

    if( automaticDogsCount === 2) {
        clearInterval(intervalId)
    }
}

function filterByVote() {
    let selector = document.querySelector("#filter").value
    let cards = document.querySelectorAll(".card")
    if (selector === "All") {
        cards.forEach((element) => {
            element.style.display = "inline-block"
        })
    } else if (selector === "Cute") {
        cards.forEach((element) => {
            let sons = element.querySelectorAll(".counter div")
            if (sons[0].innerHTML.split(" ")[1] >= sons[1].innerHTML.split(" ")[1]) {
                element.style.display = "none"
            } else {
                element.style.display = "inline-block"
            }
        })
    } else {
        cards.forEach((element) => {
            let sons = element.querySelectorAll(".counter div")
            if (sons[0].innerHTML.split(" ")[1] <= sons[1].innerHTML.split(" ")[1]) {
                element.style.display = "none"
            } else {
                element.style.display = "inline-block"
            }
        })
    }
}

function filterByBreed() {
    let selector = document.querySelector("#breeds-filter").value
    let cards = document.querySelectorAll(".card")
    cards.forEach((element) => {
        let alt = element.querySelector("img").alt
        if (selector === "All") {
            element.style.display = "inline-block"
        } else if (alt === selector) {
            element.style.display = "inline-block"
        } else {
            element.style.display = "none"
        }
    })
}

let addDog = async () => {
    if(document.querySelector("#breeds").value === "All") { 
        dogList.push(await fetchRandomDogImage())
    } else {
        dogList.push(await fetchRandomDogBreedImage(document.querySelector("#breeds").value))
    }
}

renderDogImages(index)

// Interval for adding a dog every 10 seconds
// const intervalId = setInterval(async () => {
//     await addDog()
//     automaticDogsCount++
//     renderDogImages(index)
//     filterByVote()
// }, 10000)

// const timeOutId = setTimeout(() => {
//     let message = "Click on the buttons below to add some doggos!"
//     document.querySelector("#title").outerHTML += `<h3 style="color: red">${message}</h3>`
// }, 15000)

// Listener for the add one dog button
document.querySelector("#addOne").addEventListener("click", async () => {
    //clearTimeout(timeOutId)
    document.querySelector("#addOne").disabled = true
    document.querySelector("#addFive").disabled = true
    await addDog()
    renderDogImages(index)
    document.querySelector("#addOne").disabled = false
    document.querySelector("#addFive").disabled = false
})

// Listener for the add five dogs button
document.querySelector("#addFive").addEventListener("click", async () => {
    //clearTimeout(timeOutId)
    document.querySelector("#addOne").disabled = true
    document.querySelector("#addFive").disabled = true
    for (let i = 0; i < 5; i++){
        await addDog()
    }
    renderDogImages(index)
    document.querySelector("#addOne").disabled = false
    document.querySelector("#addFive").disabled = false
})

document.querySelector("#filter").addEventListener("change", filterByVote)
document.querySelector("#breeds-filter").addEventListener("change", filterByBreed)

selectSetUp()
