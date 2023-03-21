
// Esta seccion permitira que la zona donde esta las pestañas desaparezca o aparezca al hacer scroll //

let ubicacionPrincipal = window.pageYOffset; //0

// Se llama a la libreria AOS (es la que permitira la animaciónd al hacer scroll) y se le dara el nombre de init para posteriormente ser llamda //

  AOS.init();

  // Animación desvancer al momento de hacer scroll por la pagina //

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Se seleccionara toda la clase de enlances-header para posteriormente darle animacion en la parte responsive //

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

// Animación del boton con la clase hamburguer en la parte responsive //

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})