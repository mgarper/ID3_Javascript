const gallery = document.querySelector(".gallery")
let dogList =  []
let index = 0

function renderDogImages(beginning) {
    let auxList = dogList.slice(beginning)
    auxList.forEach((element) => {
        const htmlData = 
        `
        <div class="card">
            <img src="${element}" alt="">
            <div class="counter">
                <div>🤮</div>
                <div>💘</div>
            </div>
            <div class="counter">
                <button class="voting-buttons js-cute">Cute af</button>
                <button class="voting-buttons js-ugly">Ugly ahh boi</button>
            </div>
        </div>
        `

        if(document.querySelector("#ending").checked) {
            gallery.innerHTML += htmlData
        } else {
            gallery.innerHTML = htmlData + gallery.innerHTML
        }
        index++
    })

    // Listener for the votes
    document.querySelectorAll(".voting-buttons").forEach((element) => {
        element.addEventListener("click", () => {
            let cute = element.classList.contains("js-cute")
            let votes = element.parentElement.parentElement.querySelectorAll(".counter div")
            if (cute) {
                votes[0].remove()
                //votes[1].innerHTML = `💘 ${parseInt(votes[1].innerHTML.split(" ")[1]) + 1}`
            } else {
                votes[1].remove()
                //votes[0].innerHTML = `🤮 ${parseInt(votes[0].innerHTML.split(" ")[1]) + 1}`
            }
            element.parentElement.style.display = "none"
        })
    })

    if (dogList.length === 0) {
        document.querySelector("#filter-div").style.display = "none"
    } else {
        document.querySelector("#filter-div").style.display = "block"
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
            if (element.innerHTML.includes("🤮")) {
                element.style.display = "none"
            } else {
                element.style.display = "inline-block"
            }
        })
    } else {
        cards.forEach((element) => {
            if (element.innerHTML.includes("💘")) {
                element.style.display = "none"
            } else {
                element.style.display = "inline-block"
            }
        })
    }
}

let addDog = async () => {
    dogList.push(await fetchRandomDogImage())
}

renderDogImages(index)

// Listener for the add one dog button
document.querySelector("#addOne").addEventListener("click", async () => {
    await addDog()
    renderDogImages(index)
})

// Listener for the add five dogs button
document.querySelector("#addFive").addEventListener("click", async () => {
    for (let i = 0; i < 5; i++){
        await addDog()
    }
    renderDogImages(index)
})

document.querySelector("#filter").addEventListener("change", filterByVote)



