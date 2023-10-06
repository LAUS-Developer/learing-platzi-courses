let playerAttack
let pcAttack

function gameStart() {
    let btnPetPlayer = document.getElementById("btn-pet")

    btnPetPlayer.addEventListener("click", selectPetPlayer)

    /*
        function selectPetPlayer(){        
            alert("Pet Selected")
        };
    */

    let btnFire = document.getElementById("btn-fire")
    btnFire.addEventListener("click", attackFire);
    let btnWater = document.getElementById("btn-water")
    btnWater.addEventListener("click", attackWater);
    let btnEarth = document.getElementById("btn-earth")
    btnEarth.addEventListener("click", attackEarth);

}
function selectPetPlayer() {

    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatclue = document.getElementById("Ratclue")

    let spanPetPlayer = document.getElementById('pet-player')



    if (inputHipodoge.checked) {
        spanPetPlayer.innerHTML = "Hipodoge"

        console.log(spanPetPlayer)
    }
    else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = "Capipepo"
    }
    else if (inputRatclue.checked) {
        spanPetPlayer.innerHTML = "Ratclue"
    } else {
        //alert("Escoge algo man")
    }

    selectPetPc()




}
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
}
function attackFire() {
    playerAttack = "fire";
    randomAttackPc()
}
function attackEarth() {
    playerAttack = "earth";
    randomAttackPc()
}
function attackWater() {
    playerAttack = "water";
    randomAttackPc()
}
function randomAttackPc() {
    let randomAttack = random(1,3);

    if (randomAttack == 1) {
        pcAttack = "fire";
    } else if (randomAttack == 2) {
        pcAttack = "earth";
    } else {
        pcAttack = "water";
    }
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", gameStart);