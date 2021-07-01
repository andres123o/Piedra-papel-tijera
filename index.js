let piedra = "piedra";
let tijera = "tijera";
let papel = "papel";
let validar1 = document.getElementById("enviar1");

validar1.addEventListener("click", function (){
    let numero = Math.random();
    let posicion = numero.toFixed(1);
    console.log(posicion);
    let validar =  document.getElementById("jugador1").value;
    if (posicion >= 0 && posicion <= 0.3) {
        if (validar == "tijeras" ) {
            alert("Perdiste")
        } else if (validar == "piedra") {
            alert("Escalera");
        } else if (validar == "papel") {
            alert("Ganaste");
        } else {
            alert("Que hace!")
        }
    } else if (posicion > 0.3 && posicion <= 0.5) {
        if (validar == "tijeras" ) {
            alert("Ganaste")
        } else if (validar == "piedra") {
            alert("Perdiste");
        } else if (validar == "papel") {
            alert("Escalera");
        } else {
            alert("Que hace!")
        }
    } else if (posicion > 0.5 && posicion <= 0.99) {
        if (validar == "tijeras" ) {
            alert("Escalera")
        } else if (validar == "piedra") {
            alert("Perdiste");
        } else if (validar == "papel") {
            alert("Ganaste");
        } else {
            alert("Que hace!")
        }
    } else {
        alert("Intentalo de nuevo")
    }
})

