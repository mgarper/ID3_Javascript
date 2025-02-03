const gallery = document.querySelector(".gallery")
let dogList =  []
let index = 0
let automaticDogsCount = 0

function renderDogImages(beginning) {
    let auxList = dogList.slice(beginning)
    auxList.forEach((element) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${element}" alt="">
            <div class="counter">
                <div>🤮 0</div>
                <div>💘 0</div>
            </div>
            <div class="counter">
                <button class="voting-buttons js-cute">Cute af</button>
                <button class="voting-buttons js-ugly">Ugly ahh boi</button>
            </div>
        `

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

let addDog = async () => {
    dogList.push(await fetchRandomDogImage())
    console.log(dogList)
}

renderDogImages(index)

// Interval for adding a dog every 10 seconds
const intervalId = setInterval(async () => {
    await addDog()
    automaticDogsCount++
    renderDogImages(index)
    filterByVote()
}, 10000)

const timeOutId = setTimeout(() => {
    let message = "Click on the buttons below to add some doggos!"
    document.querySelector("#title").outerHTML += `<h3 style="color: red">${message}</h3>`
}, 15000)

// Listener for the add one dog button
document.querySelector("#addOne").addEventListener("click", async () => {
    clearTimeout(timeOutId)
    await addDog()
    renderDogImages(index)
})

// Listener for the add five dogs button
document.querySelector("#addFive").addEventListener("click", async () => {
    clearTimeout(timeOutId)
    for (let i = 0; i < 5; i++){
        await addDog()
    }
    renderDogImages(index)
})

document.querySelector("#filter").addEventListener("change", filterByVote)
