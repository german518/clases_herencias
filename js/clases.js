//EJEMPLO 1 clase padre
//declaramos la clase padre
class Usuario {
  constructor(nombre, apellido, saldo) {
    (this.nombre = nombre), (this.apellido = apellido), (this.saldo = saldo);
  }

  retiroSaldo(retiro) {
    //--->ponemos metodo
    return (this.saldo -= retiro);
  }

  imprimirSaldo() {
    return `hola ${this.nombre},tu saldo es de : ${this.saldo}`;
  }
}

//creamos nuestro nueva constante con los parametros del constructor
const maria = new Usuario("maria", "lopez", 400);

//creamos una nueva clase a partir del extends de la clase Usuario
class Estudiante extends Usuario {
  constructor(nombre, apellido, saldo, profesion) {
    super(nombre, apellido, saldo);
    this.profesion = profesion;
  }

  //creamos un metodo en esta nueva clase
  aptoSaldo() {
    if (this.saldo < 2000) {
      console.log("no eres apto a un credito");
    } else {
      console.log("eres apto a un credito");
    }
  }
}

//nueva constante de la nueva clase creada a partir del extends Usuario

const user1 = new Estudiante("German", "zapata", 1500, "desarrollo web");

console.log(user1.aptoSaldo());

//EJEMPLO 2 clase padre

//creamos la clase Tiquete
class Tiquete {
  constructor(aerolinea, codigo, pasajero, destino) {
    this.aerolinea = aerolinea;
    this.codigo = codigo;
    this.pasajero = pasajero;
    this.destino = destino;
  }

  //agregamos un metodo
  referencia() {
    return `tu viaje a ${this.destino} es con la aerolinea ${this.aerolinea}`;
  }
  //agregamos otro metodo
  registro(item) {
    return `tu ${this.codigo} es tu Id y ` + item + " tu numero de asiento";
  }
}

//creamos una constante nueva de la clase TIquete
const register = new Tiquete("iberia", 78965, "basico", "mallorca");

console.log(register.referencia());
console.log(register.registro(5633));

//creamos una clase Passbord a partir del extends de la clase TIquete

class Passbord extends Tiquete {
  constructor(aerolinea, codigo, pasajero, destino, hotel, huespedes) {
    super(aerolinea, codigo, pasajero, destino);
    this.hotel = hotel;
    this.huespedes = huespedes; //--->agregamos los nuevos parametros
  }

  cantidad(cant) {
    if (cant > 5) {
      return `alojate en otra habitacion del ${this.hotel}`;
    } else {
      "puedes tomar esa habitacion del " + this.hotel;
    }
  }
}

const pass1 = new Passbord("ryanair", 89632, "VIP", "berlin", "hilton", 4);

console.log(pass1);
console.log(pass1.cantidad(6));

//creamos una nueva clase a partir de la clase Passbord
class Estancia extends Passbord {
  constructor(
    aerolinea,
    codigo,
    pasajero,
    destino,
    hotel,
    huespedes,
    visita,
    souvenir
  ) {
    super(aerolinea, codigo, pasajero, destino, hotel, huespedes);
    this.visita = visita;
    this.souvenir = souvenir;
  }

  recuerdo() {
    return `has llevado ${this.souvenir} como souvenir y has ido a ${this.visita}`;
  }
}

const pass2 = new Estancia(
  "ryanair",
  23569,
  "ejecutivo",
  "venecia",
  "melia",
  5,
  "museo",
  "foto de palacio"
);

console.log(pass2.recuerdo());
console.log(pass2.referencia()); //--->aqui comprobamos que podemos llamar metodos desde la primer clase que hemos creado, y funciona igualmente porque a tomado las propiedades y metodos de la clase padre.
