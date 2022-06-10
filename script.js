const dispenseButton = document.getElementById("dispense-button")
const saveButton = document.getElementById("save-button")
const quoteArea = document.querySelector(".quote-area")
let noteId, noteContent = ""

dispenseButton.addEventListener("click", async () => {
    let baseUrl = 'https://api.adviceslip.com/advice'
    let response = await fetch(baseUrl)
    let data = await response.json()

    // console.log(data.slip.id)
    // console.log(data.slip.advice)
    
    quoteArea.innerHTML = `<p>Advice slice #${data.slip.id}: ${data.slip.advice}</p>`

    noteId = data.slip.id
    noteContent = data.slip.advice

    console.log(`${noteId} - ${noteContent}`)
    } 
)

saveButton.addEventListener("click", async () => {
    let baseUrl = 'https://api.adviceslip.com/advice'
    let response = await fetch(baseUrl)
    let data = await response.json()

    // console.log(data.slip.id)
    // console.log(data.slip.advice)
    
    sessionStorage.setItem(data.slip.id, data.slip.advice)
    localStorage.theKey = "The value"
    } 
)

// sessionStorage.setItem("type", "gypsy")