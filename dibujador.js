function dibujador (enemigo) {

let div = document.getElementById("divPrincipal")
let nuevoenemigo = document.createElement("div")
let imagen 

if (enemigo.constructor === Zombie) {
    imagen = "img/zombie.png"
} else {
    imagen = "img/perro.png"
}

nuevoenemigo.innerHTML = `
<img src="${imagen}">
<p>${enemigo.nombre}</p>
`

div.appendChild(nuevoenemigo)

}