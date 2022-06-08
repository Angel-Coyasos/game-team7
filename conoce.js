let tutorial = document.getElementById("container-none");

let mostrar = "ocultar";


function Tutorial(){
    
    
    if (mostrar == "ocultar"){
        
        mostrar = "mostar";
        console.log(mostrar);
        tutorial.classList.add("container-tutorial");

    } else if(mostrar == "mostar") {

        mostrar = "ocultar";
        console.log(mostrar);
        tutorial.classList.remove("container-tutorial");

    }

}

function AprendePhaser(){

    location.assign("https://desarrolloweb.com/manuales/phaser3");
    
}