function ListaCompras() {
  this.productos = [];

  this.agregar = function (producto) {
    this.productos.push(producto);
  };

  this.mostrar = function () {
    for (let i = 0; i < this.productos.length; i++);
    console.log((i + 1) + ". " + this.productos[i]);
  };
}

let lista = new ListaCompras();
lista.agregar("Manzanas");
lista.agregar("Más manzanas:)");
lista.agregar("Peras");

lista.mostrar();