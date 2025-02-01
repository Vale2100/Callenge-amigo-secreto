// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];


function agregarAmigo() {
    let amigoIngresado=document.getElementById('amigo').value.trim();
    if (amigoIngresado === "") {//Mensaje de error si no se ingresa un nombre
        window.alert("Por favor, inserte un nombre.");
        return;
    }
    //Agregar los nombres a la lista de amigos y limpiar caja 
    amigos.push(amigoIngresado);
    actualizarLista();
    limpiarCaja();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    //Formato de vizualización de la lista de nombres ingresados
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    //Condición para sortear los nombres, tener minimo 2 nombres ingresados
    if (amigos.length < 2) {
        window.alert("Debe ingresar al menos 2 nombres para sortear.");
        return;
    }
    //Sorteo de amigo secreto
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
     // Limpiar lista de amigos después del sorteo
     amigos = []; 
     document.getElementById("listaAmigos").innerHTML = ""; // Borra los nombres de la lista 
    //Mensaje de amigo sorteado
    document.getElementById("resultado").innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}

function limpiarCaja() {
//Borra el nombre una vez ingresado a la lista
    document.getElementById('amigo').value = '';
}