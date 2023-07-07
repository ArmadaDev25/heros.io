// DEBUG to make sure the JS file is linked to the HTML fileS
console.log('App is running and linked')



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
function generateHeroUI(){
    const newElement = document.createElement("article") // Creates a new container element for the Hero information
    newElement.setAttribute("class", "hero-info") // Sets the hero containers class attribute to "hero-info"
    const heroHealth = document.createElement("p")
    const para = document.createTextNode("100")
    heroHealth.appendChild(para)
    newElement.appendChild(heroHealth)
    const heroUISection = document.getElementById("player-heroes")
    heroUISection.appendChild(newElement)
    
}