let playerAttack;
let pcAttack;
let playerLifes = 3
let pcLifes = 3

function gameStart() {
    let sectionSelectAttack = document.getElementById("select-attack");
    sectionSelectAttack.style.display="none";
    
    let btnPetPlayer = document.getElementById("btn-pet")
    btnPetPlayer.addEventListener("click", selectPetPlayer)

   let sectionReset = document.getElementById ("restart");
    sectionReset.style.display="none"

  

    let btnFire = document.getElementById("btn-fire")
    btnFire.addEventListener("click", attackFire);
    let btnWater = document.getElementById("btn-water")
    btnWater.addEventListener("click", attackWater);
    let btnEarth = document.getElementById("btn-earth")
    btnEarth.addEventListener("click", attackEarth);

};
function selectPetPlayer() { 
    
    let sectionSelectPet = document.getElementById("select-pet")
    sectionSelectPet.style.display="none";

    let sectionSelectAttack = document.getElementById("select-attack")
    sectionSelectAttack.style.display="block";



    
    
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatclue = document.getElementById("Ratclue")

    let spanPetPlayer = document.getElementById('pet-player')

    if (inputHipodoge.checked) {
        spanPetPlayer.innerHTML = "Hipodoge"
    }
    else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = "Capipepo"
    }
    else if (inputRatclue.checked) {
        spanPetPlayer.innerHTML = "Ratclue"
    } else {
        alert("Escoge algo man")
    }
    selectPetPc()

};

function selectPetPc() {
    let randomPc = random(1, 3)
    let spanPetPc = document.getElementById("pet-pc")

    if (randomPc == 1) {
        //Hipodoge
        spanPetPc.innerHTML = "Hipodoge"
    } else if (randomPc == 2) {
        //Capipepo
        spanPetPc.innerHTML = "Capipepo"
    } else if (randomPc == 3) {
        //Raticlue
        spanPetPc.innerHTML = "Ratclue"
    }
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
    let randomAttack = random(1,3);

    if (randomAttack == 1) {
        pcAttack = "fire";
    } else if (randomAttack == 2) {
        pcAttack = "earth";
    } else {
        pcAttack = "water";
    }

    combat()
   
};
function combat(){
    let spanPlayerLifes = document.getElementById("playerLifes")
    let spanPcLifes     = document.getElementById("pcLifes")



    if (pcAttack == playerAttack){
        createMessage("Tie")
    }else if (playerAttack == "fire" && pcAttack == "earth"){
        createMessage("You Win!")
        //triunfos = triunfos + 1

        spanPcLifes.innerHTML = pcLifes
        pcLifes--;
    }else if (playerAttack == "water" && pcAttack == "fire"){
        createMessage("You Win!")
        //triunfos = triunfos + 1
         spanPcLifes.innerHTML = pcLifes
         pcLifes--;
    }else if (playerAttack == "earth" && pcAttack == "water"){
        createMessage ("You win!")
        //triunfos = triunfos + 1
         spanPcLifes.innerHTML = pcLifes
         pcLifes--;
    }else{
        createMessage("LOSER")
        //partidas = perdidas + 1

        playerLifes--;
        spanPlayerLifes.innerHTML=playerLifes;
    }
};

function checklifes() {
    if (pcLifes == 0) {
        createEndMessage("Player Wins!")
    } else if (playerLifes == 0) {
        createEndMessage('PC Wins!')
    }
}

function createMessage(combatResult){

    let sectionParagraph = document.getElementById("combat-messages");
    let paragraph = document.createElement("p");    
    paragraph.innerHTML ="Your pet attacked with "+playerAttack+". Enemy pet attacked with "+ pcAttack + " " + combatResult;
    sectionParagraph.appendChild(paragraph);



    let sectionResult = document.getElementById('result')
    let sectionPlayerAttack = document.getElementById ('playerAttack')
    let sectionPcAttack = document.getElementById ("pcAttack")

    let newPlayerAttack = document.createElement('p')
    let newPcAttack = document.createElement('p')

    sectionResult.innerHTML = combatResult
    newPlayerAttack.innerHTML = playerAttack
    newPcAttack.innerHTML = pcAttack

    sectionPlayerAttack.appendChild(newPlayerAttack)
    sectionPcAttack.appendChild(newPcAttack)


    checklifes()
};


function createEndMessage(combatEndResult){
    let sectionParagraph = document.getElementById("endResultMessage");

    let paragraph = document.createElement("p");
    paragraph.setAttribute("id","combatEndResult")
    paragraph.innerHTML = combatEndResult;

    sectionParagraph.appendChild(paragraph);


    let btnFire = document.getElementById("btn-fire")
    btnFire.disabled=true
    let btnWater = document.getElementById("btn-water")
    btnWater.disabled=true
    let btnEarth = document.getElementById("btn-earth")
    btnEarth.disabled=true
    
    let sectionReset = document.getElementById ("restart");
    sectionReset.style.display="block"

}
function resetGame () {
    location.reload()
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

window.addEventListener("load", gameStart);