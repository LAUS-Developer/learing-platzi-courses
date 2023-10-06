function gameStart() {
    let btnPetPlayer = document.getElementById("btn-pet")

    btnPetPlayer.addEventListener("click", selectPetPlayer)

    /*
        function selectPetPlayer(){        
            alert("Pet Selected")
        };
    */

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
    let randomAttack = random(1, 3)
    let spanPetPc = document.getElementById("pet-pc")

    if (randomAttack == 1) {
        //Hipodoge
        spanPetPc.innerHTML="Hipodoge"
    } else if (randomAttack == 2) {
        //Capipepo
        spanPetPc.innerHTML="Capipepo"
    } else if (randomAttack == 3){
        //Raticlue
        spanPetPc.innerHTML="Ratclue"
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", gameStart);