// DEBUG to make sure the JS file is linked to the HTML fileS
console.log('App is running and linked')



PlayerStats = {
    renown: 0, // This is essentially the players score 
    currency: 0,
    heroes: [],
    nextHeroID: 0
}

// Array that will hold Enemies
let enemies = []

// Ammount of renown to generate per tick
let renownPerTick = 0



// Classes for generating Heroes and NPCs 
class Hero{
    constructor(name, health, damage, hid){
        this.name = name
        this.health = health
        this.damage = damage
        this.heroID = hid
    }

    // Heroes will add to the passive generation of renown
    renownToGenerate = 1

    updateHealth(){
        let healthUI = document.getElementById(this.hid)
        healthUI.innerText = this.health
    }
    
}

class NPC{
    constructor(name, health, damage){
        this.name = name
        this.health = health
        this.damage = damage
    }
}

// On click event that will create the player's first hero and start the game
document.getElementById("gameStartBtn").addEventListener("click", startGame)

//Start Game function
function startGame(){
    generateHero(100, getValueFromInputField("HNIone"))
    generateRecentEventText("The Adventure Begins") // First event that displays telling the player the game has started
    console.log("Game Has Started")

    // Generate Orks
    generateNPC()

}

// gets the input from the given field and returns it
function getValueFromInputField(elementID){
    let userInput = document.getElementById(elementID).value
    return userInput
}

// Function that will be called in order to create a new hero
function generateHero(health, name){
    PlayerStats.heroes.push(new Hero(name,health,25,PlayerStats.nextHeroID))
    console.log(PlayerStats.heroes)
    generateHeroUI(health, name) // When a hero is generated, an HTML element will be created to show the hero stats
    PlayerStats.nextHeroID++ // imcrements the nextHeroID variable allowing the next hero that is created to have an ID that is 1 higher than the previous
    console.log(PlayerStats)

    
}


// Creates a new HTML element that will hold the information on the newly created hero
function generateHeroUI(health, name){
    const newElement = document.createElement("article") // Creates a new container element for the Hero information
    newElement.setAttribute("class", "hero-info") // Sets the hero containers class attribute to "hero-info"
    // Creates the HTML element containing the heroes Name and adds it to the newElement containing the heroes health
    const heroName = document.createElement("p")
    const para2 = document.createTextNode(name)
    heroName.appendChild(para2)
    newElement.append(heroName)
    // Creates the HTML element containing the heroes health and adds it to the newElement containing the heroes health
    const heroHealth = document.createElement("p")
    const para1 = document.createTextNode(health)
    heroHealth.appendChild(para1)
    newElement.appendChild(heroHealth)

    // Gets the player-heroes element and makes the new HTML element containing the hero infomration a child of the player-heroes element
    const heroUISection = document.getElementById("player-heroes")
    heroUISection.appendChild(newElement)
    
}

// Function that will generate HTML elements what detail recent game events in the Recent Events panel
function generateRecentEventText(Text){
    const newElement = document.createElement("p")
    const newElText = document.createTextNode(Text)
    newElement.appendChild(newElText)

    const notifSection = document.getElementById("recent-actions")
    notifSection.appendChild(newElement)
}

// Function that will generate NPC
function generateNPC(){
    // Generate the HTML element that contains the Info for the Ork
    const newElement = document.createElement("article")
    newElement.setAttribute("class", "orkEl")
    // Get the HTML element that the Ork Element will be a child of
    const OrkParEl = document.getElementById("orks")
    // Creates the Ork Name HTML element
    const newOrkName = document.createElement("p")
    const newOrkNameTxt = document.createTextNode("Ork Warrior")
    // Creates the button element
    const newOrkBtn = document.createElement("input")
    newOrkBtn.setAttribute("type", "button")
    newOrkBtn.setAttribute("value", "Fight")
    // Creates the health element
    const newOrkHealth = document.createElement("p")
    const newOrkHealthTxt = document.createTextNode("100")

    
    newOrkName.appendChild(newOrkNameTxt)
    newElement.appendChild(newOrkName)
    newOrkHealth.appendChild(newOrkHealthTxt)
    newElement.appendChild(newOrkHealth)
    newElement.appendChild(newOrkBtn)
    OrkParEl.appendChild(newElement)

   
    
    

}

function goOnQuest(){
    // Awards the player Currency
    // Awards the player Renowm
}