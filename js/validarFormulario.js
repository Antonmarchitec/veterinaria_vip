let btnEnviar = document.querySelector(".btnEnviar");

btnEnviar.addEventListener("click", function(){
    let contNombre = document.getElementById("nombre").value;
    let contCorreo = document.getElementById("correo").value;
    let celular = document.getElementById("celular").value;
    if(contNombre === "" || contCorreo === "" || celular === "" ){
        alert("ES HOBLIGATORIO RELLENAR TODOS LOS CAMPOS");
        //return false;
    }
})



