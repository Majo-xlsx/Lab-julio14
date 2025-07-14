function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false;

  this.prestar = function () {
    if (!this.prestado) {
      this.prestado = true;
      console.log("Prestado");
    } else {
      console.log("Ya está prestado");
    }
  };
}

let libro = new Libro("The Communist Manifesto", "Karl Marx");

libro.prestar();
libro.prestar();