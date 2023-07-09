// DEBUG to make sure the JS file is linked to the HTML fileS
console.log('App is running and linked')



class GameLogic {
    renown = 0 // This is essentially the players score 
    currency = 0
}

class Hero{
    constructor(name, health, damage){
        this.name = name
        this.health = health
        this.damage = damage
    }

    // Heroes will add to the passive generation of renown
    renownToGenerate = 1
    
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
    generateHero(100, "Karma")
    generateRecentEventText("The Adventure Begins") // First event that displays telling the player the game has started
    console.log("Game Has Started")

}

// Function that will be called in order to create a new hero
function generateHero(health, name){
    generateHeroUI(health, name) // When a hero is generated, an HTML element will be created to show the hero stats
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