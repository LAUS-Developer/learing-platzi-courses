function gameStart(){
    let btnPetPlayer = document.getElementById("btn-pet")

    btnPetPlayer.addEventListener("click", selectPetPlayer)

/*
    function selectPetPlayer(){        
        alert("Pet Selected")
    };
*/

}

function selectPetPlayer(){

    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatclue = document.getElementById("Ratclue")

    if (inputHipodoge.checked){
        alert("Selected Hipodoge")
    }
    else if (inputCapipepo.checked){
        alert("Selected Capipepo")
    }
    else if (inputRatclue.checked){
        alert("Selected Ratclue")
    } else {
        alert("Escoge algo man")
    }
}


window.addEventListener("load",gameStart);