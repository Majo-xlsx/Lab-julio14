function Carrito() {
  this.productos = [];
  this.total = 0;

  this.agregarProducto = function (nombre, precio) {
    this.productos.push({ nombre, precio });
    this.total += precio;
  };

  this.calcularDescuento = function () {
    if (this.total > 100) {
      let descuento = this.total * 0.10;
      console.log("Descuento aplicado: $" + descuento.toFixed(2));
      console.log("Total con descuento: $" + (this.total - descuento).toFixed(2));
    } else if (this.total > 50) {
      let descuento = this.total * 0.05;
      console.log("Descuento aplicado: $" + descuento.toFixed(2));
      console.log("Total con descuento: $" + (this.total - descuento).toFixed(2));
    } else {
      console.log("Total sin descuento: $" + this.total.toFixed(2));
    }
  };
}

let c = new Carrito();
c.agregarProducto("Camisa", 30);
c.agregarProducto("Pantalón", 40);
c.calcularDescuento();