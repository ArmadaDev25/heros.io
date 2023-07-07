// DEBUG to make sure the JS file is linked to the HTML fileS
console.log('App is running and linked')

generateHeroUI(100, "brad")

class GameLogic {
    renown = 0
    currency = 0
}

class Hero{
    constructor(name){
        this.name = name
    }
    
}


// Function that will be called in order to create a new hero
function generateHero(){
    generateHeroUI() // When a hero is generated, an HTML element will be created to show the hero stats
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