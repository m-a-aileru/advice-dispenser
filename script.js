const dispenseButton = document.getElementById("dispense-button")
const saveButton = document.getElementById("save-button")
const testButton = document.getElementById("test-button")
const quoteArea = document.querySelector(".quote-area")
let noteId, noteContent = ""
const favList = document.getElementById("fav-list")
let favKeySet = new Set()
const removeIcon = document.querySelector(".remove-icon")
const clearListButton = document.querySelector(".clear-list")

function displayFavList() {
    
        for (const [key, value] of Object.entries(sessionStorage)) {
            // For use when testing with Live Server  
            // if (key === "IsThisFirstTime_Log_From_LiveServer") {
            //     sessionStorage.removeItem(key)
            // }

            const favEntry = document.createElement("p")
            
            favEntry.innerHTML = `${`${key}: ${value} <span class="remove-icon" onclick="removeSomething()">&times</span>`}`
            favEntry.classList.add("fav-entry")
            favList.appendChild(favEntry)           
        }
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

saveButton.addEventListener("click", () => {
    if (noteId !== undefined) {
        console.log(`${noteId} - ${noteContent}`)
        
        sessionStorage.setItem(noteId, noteContent)
        favKeySet.add(noteId)
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

// clearListButton.addEventListener("click", () => { sessionStorage.clear() })

function clearFavourites() {
    sessionStorage.clear()
    favList.innerHTML = ''
    console.log("Favourites cleared")
}

testButton.addEventListener("click", () => { console.log(favKeySet) })


function removeSomething(entryKey) {    
    if (favKeySet.has(entryKey)) {
        sessionStorage.removeItem(entryKey) 
        favKeySet.remove(entryKey)
        console.log("Entry removed")
    }
    
}