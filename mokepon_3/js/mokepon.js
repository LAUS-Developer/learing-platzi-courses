let playerAttack;
let pcAttack;
const playerLifes = 3;
const pcLifes = 3;

const sectionSelectAttack = document.getElementById("select-attack");
const btnPetPlayer = document.getElementById("btn-pet");

const sectionReset = document.getElementById ("restart");

const btnFire = document.getElementById("btn-fire");
const btnWater = document.getElementById("btn-water");
const btnEarth = document.getElementById("btn-earth");

const sectionSelectPet = document.getElementById("select-pet");
const inputHipodoge = document.getElementById("Hipodoge");
const inputCapipepo = document.getElementById("Capipepo");
const inputRatclue = document.getElementById("Ratclue");
const spanPetPlayer = document.getElementById('pet-player');

let randomPc = random(1, 3);
const spanPetPc = document.getElementById("pet-pc");

let randomAttack = random(1,3);

const spanPlayerLifes = document.getElementById("playerLifes");
const spanPcLifes = document.getElementById("pcLifes");

const sectionParagraph = document.getElementById("combat-messages");
const paragraph = document.createElement("p");  
const sectionResult = document.getElementById('result')
const sectionPlayerAttack = document.getElementById ('playerAttack')
const sectionPcAttack = document.getElementById ("pcAttack")

const newPlayerAttack = document.createElement('p')
const newPcAttack = document.createElement('p')

const sectionParagraphResult = document.getElementById("endResultMessage");
const paragraphResult = document.createElement("p");

function gameStart() {
    sectionSelectAttack.style.display="none";
    sectionReset.style.display="none";
    btnPetPlayer.addEventListener("click", selectPetPlayer);
    btnFire.addEventListener("click", attackFire);
    btnWater.addEventListener("click", attackWater);
    btnEarth.addEventListener("click", attackEarth);
};
function selectPetPlayer() { 
    sectionSelectPet.style.display="none";
    sectionSelectAttack.style.display="block";     
    if (inputHipodoge.checked){spanPetPlayer.innerHTML = "Hipodoge"}
    else if (inputCapipepo.checked){spanPetPlayer.innerHTML = "Capipepo"}
    else if (inputRatclue.checked){spanPetPlayer.innerHTML = "Ratclue"}
    else{alert("Escoge algo man")}
    selectPetPc()
};

function selectPetPc() {
    if(randomPc == 1){spanPetPc.innerHTML="Hipodoge"}
    else if(randomPc == 2){spanPetPc.innerHTML="Capipepo"}
    else if(randomPc == 3){spanPetPc.innerHTML="Ratclue"}
};
function attackFire() {
    playerAttack = "fire";
    randomAttackPc()
};
function attackEarth() {
    playerAttack = "earth";
    randomAttackPc()
}
function attackWater() {
    playerAttack = "water";+
    randomAttackPc()
};
function randomAttackPc() {
    if(randomAttack == 1){pcAttack = "fire";}
    else if(randomAttack == 2) {pcAttack = "earth";}
    else {pcAttack = "water";}

    combat()
};
function combat(){
    if (pcAttack == playerAttack){
        createMessage("Tie")
    }else if (playerAttack == "fire" && pcAttack == "earth"){createMessage("You Win!");spanPcLifes.innerHTML = pcLifes;pcLifes--;
    }else if (playerAttack == "water" && pcAttack == "fire"){createMessage("You Win!");spanPcLifes.innerHTML = pcLifes;pcLifes--;
    }else if (playerAttack == "earth" && pcAttack == "water"){createMessage ("You win!");spanPcLifes.innerHTML = pcLifes;pcLifes--;
    }else{createMessage("LOSER");playerLifes--;spanPlayerLifes.innerHTML=playerLifes;}
};

function checklifes() {
    if (pcLifes == 0) {createEndMessage("Player Wins!")} 
    else if (playerLifes == 0){createEndMessage('PC Wins!')}
}

function createMessage(combatResult){
    paragraph.innerHTML ="Your pet attacked with "+playerAttack+". Enemy pet attacked with "+ pcAttack + " " + combatResult;
    sectionParagraph.appendChild(paragraph);
    sectionResult.innerHTML = combatResult
    newPlayerAttack.innerHTML = playerAttack
    newPcAttack.innerHTML = pcAttack

    sectionPlayerAttack.appendChild(newPlayerAttack)
    sectionPcAttack.appendChild(newPcAttack)

    checklifes()
};


function createEndMessage(combatEndResult){


    paragraphResult.setAttribute("id","combatEndResult")
    paragraphResult.innerHTML = combatEndResult;

    sectionParagraphResult.appendChild(paragraphResult);

    btnFire.disabled=true
    btnWater.disabled=true
    btnEarth.disabled=true   
    
    sectionReset.style.display="block"

}
function resetGame () {
    location.reload()
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

window.addEventListener("load", gameStart);