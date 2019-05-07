
function Enemigo (nombre) {
      this.nombre = nombre 
  }

// Colocamos en el "prototipo" de Enemigo las funciones, para sólo instanciarlas 1 vez.
// Así evitamos que se "construyan" cada vez que se cree un nuevo enemigo.
Enemigo.prototype.caminar = function() {console.log("¡"+ this.nombre + " está caminando!")}
Enemigo.prototype.morder = function(){console.log("¡"+ this.nombre + " MORDIÓ algo!")}



  function Zombie  (nombre) {

    Enemigo.call(this, nombre)

    this.balbucear = function() {console.log("🧟‍♂️ Ajsafhjkahfa....")}

  }

// 1. Creamos un nuevo constructor. 
// 2. Llamamos a la función constructora de Enemigo, con el contexto correcto.
// 3. Reasignamos el prototipo para heredar todos sus métodos.
// 4. Reasignamos cuál es su constructor, para evitar problemas.

  Zombie.prototype = Object.create(Enemigo.prototype)
  Zombie.prototype.constructor = Zombie

  function Perrozombie (nombre) {

    Enemigo.call(this, nombre)

    this.ladrar = function() {console.log("🐕 Guau Guau....")}

  }

  Perrozombie.prototype = Object.create(Enemigo.prototype)
  Perrozombie.prototype.constructor = Perrozombie

  





