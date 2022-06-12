const dispenseButton = document.getElementById("dispense-button")
const saveButton = document.getElementById("save-button")
const testButton = document.getElementById("test-button")
const quoteArea = document.querySelector(".quote-area")
let noteId, noteContent = ""
const favList = document.getElementById("fav-list")
let favSet = new Set()

function displayFavList() {
    for (const [key, value] of Object.entries(sessionStorage)) {
        // console.log(`${key}: ${value}`)
        // favSet.add(`${key} - ${value}`)
        const favEntry = document.createElement("p")
        favEntry.innerHTML = `${`${key}: ${value}`}`
        favList.appendChild(favEntry)           
    }
    // console.log("Yeah it's working")
}

dispenseButton.addEventListener("click", async () => {
    let baseUrl = 'https://api.adviceslip.com/advice'
    let response = await fetch(baseUrl)
    let data = await response.json()

    // console.log(data.slip.id)
    // console.log(data.slip.advice)
    
    quoteArea.innerHTML = `<p>Advice slice #${data.slip.id}: ${data.slip.advice}</p>`

    noteId = data.slip.id
    noteContent = data.slip.advice

    // console.log(`${noteId} - ${noteContent}`)
})

saveButton.addEventListener("click", async () => {
    if (noteId !== undefined) {
        console.log(`${noteId} - ${noteContent}`)
        
        sessionStorage.setItem(noteId, noteContent)

        // the for..in method
        // for(const prop in sessionStorage) {
        //     if (prop !== undefined) {
        //         console.log(`${prop} - ${sessionStorage[prop]}`)
        //     }
        // }

        // the Object.entries() method
        // for (const [key, value] of Object.entries(sessionStorage)) {
        //     console.log(`${key}: ${value}`)
        //     const favEntry = document.createElement("p")
        //     favEntry.innerHTML = `${key}: ${value}`
        //     favList.appendChild(favEntry)
        // }

        

        // console.log(sessionStorage)
    }
})

testButton.addEventListener("click", () => { console.log(sessionStorage ? "yes" : "no") })
// sessionStorage.clear()