// DEBUG to make sure the JS file is linked to the HTML fileS
console.log('App is running and linked')


PlayerStats = {
    renown: 0, // This is essentially the players score 
    currency: 0,
    heroes: [],
    nextHeroID: 0
}

points = 0
// Array that will hold Enemies
let enemies = []

// Ammount of renown to generate per tick
let renownPerTick = 0
let renownToWin = 1000



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

    takeDamage(damage){
        this.health = this.health - damage
        
    }

    updateHealthUI(input){
        
        let healthUI = document.getElementById(input)
        healthUI.innerText = this.health
    }

    
}

class NPC{
    constructor(name, health, damage){
        this.name = name
        this.health = health
        this.damage = damage
    }

    takeDamage(damage){
        this.health = this.health - damage
    }

    updateHealthUI(input){
        
        let healthUI = document.getElementById(input)
        healthUI.innerText = this.health
    }
}

// On click event that will create the player's first hero and start the game
document.getElementById("gameStartBtn").addEventListener("click", startGame)
document.getElementById("qbtn1").addEventListener("click", doQuestOne)
document.getElementById("qbtn2").addEventListener("click", doQuestTwo)
document.getElementById("qbtn3").addEventListener("click", doQuestThree)



//Start Game function
function startGame(){
    generateHero(100, getValueFromInputField("HNIone"))
    generateRecentEventText("The Adventure Begins") // First event that displays telling the player the game has started
    console.log("Game Has Started")
    
    displayGame()

    // Generate Orks
    generateNPC()
    document.getElementById("ob1").addEventListener("click", fightNPC)
    
   

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
    generateHeroUI(health, name, PlayerStats.nextHeroID) // When a hero is generated, an HTML element will be created to show the hero stats
    PlayerStats.nextHeroID++ // imcrements the nextHeroID variable allowing the next hero that is created to have an ID that is 1 higher than the previous
    console.log(PlayerStats)
    renownPerTick = PlayerStats.heroes[0].renownPerTick

    
}


// Creates a new HTML element that will hold the information on the newly created hero
function generateHeroUI(health, name, hid){
    const newElement = document.createElement("article") // Creates a new container element for the Hero information
    newElement.setAttribute("class", "hero-info") // Sets the hero containers class attribute to "hero-info"
    // Creates the HTML element containing the heroes Name and adds it to the newElement containing the heroes health
    const heroName = document.createElement("p")
    const para2 = document.createTextNode(name)
    heroName.appendChild(para2)
    newElement.append(heroName)
    // Creates the HTML element containing the heroes health and adds it to the newElement containing the heroes health
    const heroHealth = document.createElement("p")
    heroHealth.setAttribute("id", hid)
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
    enemies.push(new NPC("Ork Warrior",100,5))
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
    newOrkBtn.setAttribute("id", "ob" + enemies.length)
    // Creates the health element
    const newOrkHealth = document.createElement("p")
    newOrkHealth.setAttribute("id", "o" + enemies.length)

    const newOrkHealthTxt = document.createTextNode("100")

    
    newOrkName.appendChild(newOrkNameTxt)
    newElement.appendChild(newOrkName)
    newOrkHealth.appendChild(newOrkHealthTxt)
    newElement.appendChild(newOrkHealth)
    newElement.appendChild(newOrkBtn)
    OrkParEl.appendChild(newElement)
}


function displayGame(){
    let game = document.getElementById("game")
    let introScreen = document.getElementById("sScreen")
    game.removeAttribute("hidden")
    introScreen.setAttribute("hidden", "is-hidden")
}

// Updates the text of a HTML element 
function uiElementUpdater(id, value){
    let elementToUpdate = document.getElementById(id)
    elementToUpdate.innerText = value
}




// Game Logic

// Preset Quest Logic
function doQuestOne(){
    giveReward(20, 100)
    if(PlayerStats.renown >= renownToWin){
        console.log("Player Has won")
        alert("Player Wins")
    }
    generateRecentEventText("Quest Complete")

}

function doQuestTwo(){
    giveReward(10, 5)
    if(PlayerStats.renown >= renownToWin){
        console.log("Player Has won")
        alert("Player Wins")
    }
    generateRecentEventText("Quest Complete")


}

function doQuestThree(){
    giveReward(40, 25)
    if(PlayerStats.renown >= renownToWin){
        console.log("Player Has won")
        alert("Player Wins")
    }
    generateRecentEventText("Quest Complete")
}

// Game Reward Logic
function giveReward(rReward, cReward){
    // Awards the player Renowm
    PlayerStats.renown = PlayerStats.renown + rReward
    uiElementUpdater("rnum", PlayerStats.renown)
    
    // Awards the player Currency
    PlayerStats.currency = PlayerStats.currency + cReward
    uiElementUpdater("cnum", PlayerStats.currency)
    console.log(PlayerStats)
}

// Fighting NPC logic
function fightNPC(){
    //Hero takes damage
    PlayerStats.heroes[0].takeDamage(enemies[0].damage)
    PlayerStats.heroes[0].updateHealthUI("0")
    enemies[0].takeDamage(PlayerStats.heroes[0].damage)
    enemies[0].updateHealthUI("o1")
    // Check to see if the player has won
    if(PlayerStats.renown >= renownToWin){
        console.log("Player Has won")
        alert("Player Wins")
    }


    if(isHeroDead(PlayerStats.heroes[0])!== true){
        generateRecentEventText("The Hero has survived the battle with " + PlayerStats.heroes[0].health + " health remaining." )

        if(enemies[0].health <= 0){
            generateRecentEventText("The Hero has killed the Ork")// Message that is displayed if the ork dies
            giveReward(100,100) // Player should recive a larger reward for killing the ork than they would if they just damaged the ork
            // Resets the enemies health to 100 as if they are fighting a new ork
            enemies[0].health = 100
            enemies[0].updateHealthUI("o1")
    
        }else if (enemies[0].health > 0){
            generateRecentEventText("Hero fought the ork and dealt " + PlayerStats.heroes[0].damage + " damage to the ork")// Message that is displayed if the ork does not die
            giveReward(20,0) // Player should recive a smaller reward for damaging the ork than they would from Killing the Ork
    
        }

    }

}

// Checks to see if a hero is dead, and returns the result as a boolean
function isHeroDead(heroinput){
    if (heroinput.health <= 0){
        return true
    }else{
        return false
    }
}