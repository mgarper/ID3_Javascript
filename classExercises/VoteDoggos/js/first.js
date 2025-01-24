let dogList =  []
let gallery = document.querySelector(".gallery")


function renderDogImages() {
    gallery.innerHTML = ''
    dogList.forEach((element) => {
        const htmlData = 
        `
        <div class="card">
            <img src="${element}" alt="">
            <div class="counter">
                <div>🤮</div>
                <div>💘</div>
              </div>
            <div class="counter">
                <button class="voting-buttons">Cute af</button>
                <button class="voting-buttons">Ugly ahh boi</button>
            </div>
        </div>
        `
        gallery.innerHTML += htmlData
    })
}

let addDog = async () => {
    dogList.push(await fetchRandomDogImage())
}

renderDogImages()

// Listener for the add one dog button
document.querySelector("#addOne").addEventListener("click", async () => {
    await addDog()
    renderDogImages()
})

// Listener for the add five dogs button
document.querySelector("#addFive").addEventListener("click", async () => {
    for (let i = 0; i < 5; i++){
        await addDog()
    }
    renderDogImages()
})