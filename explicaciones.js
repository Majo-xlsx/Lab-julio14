// let persona = {
//     "primerNombre": "Ana",
//     "apellido" : "Alvarado",
//     "fullname": function (){
//         return persona.primerNombre  + " " + persona.apellido
//     },
//     "edad": 80,
//     "contacto": {
//         "email": {
//             "personal":"ana@alvarado.com",
//             "trabajo" : "ana-trabajo@alvarado",
//         }
//         }
// }
// console.log(persona.primerNombre);
// console.log(persona.contacto.email.personal);

// console.log(persona.fullname);
// console.log(persona.fullname());

// console.log(typeof(persona));
// console.log(typeof(persona.apellido));

// let libro = {
//   titulo: "Hollow Knight",
//   autor: "Cherry",
//   aPublicacion: 2017,

//   mostrarInfo: function () {
//     return (
//       "Título: " + this.titulo +
//       "\nAutor: " + this.autor +
//       "\nAño de publicación: " + this.aPublicacion
//     );
//   }
// };

// console.log(libro.mostrarInfo());

let cuentaBancaria = {
  titular: "Hollow",
  saldo: "1000",
  depositar: function () {
    let monto = parseFloat(prompt("¿Cuánto desea depositar?: "));
    if (monto <= 0 || isNaN(monto)) return;
    this.saldo += monto;
    console.log("Nuevo saldo: " + this.saldo);
  },
  retirar: function () {
   let monto = parseFloat(prompt("¿Cuánto desea depositar?: "));
    if (monto <= 0 || isNaN(monto)) return;
    this.saldo -= monto;
    console.log("Nuevo saldo: " + this.saldo);
  },
  consultarSaldo: function () {
    return (
        "Su saldo es de: " + this.saldo
    )
  }
};
cuentaBancaria.depositar();
cuentaBancaria.retirar();
cuentaBancaria.consultarSaldo();