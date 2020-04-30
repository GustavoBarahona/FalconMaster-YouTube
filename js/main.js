const contenedor = document.querySelector('#contenedor');

document.querySelector('#boton-menu').addEventListener('click', () =>{
    contenedor.classList.toggle('active');
});



window.addEventListener('resize', () =>{
    comprobarAncho();
});


//Función para comprobar ancho
const comprobarAncho = () =>{
    if(window.innerWidth <= 768){
        contenedor.classList.remove('active');
    }else{
        contenedor.classList.add('active');
    }
};

comprobarAncho();//Ejecutamos la función