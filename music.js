function Reproductor() {
  this.estado = "detenido";

  this.play = function () {
    if (this.estado === "reproduciendo") {
      console.log("Ya se está reproduciendo música.");
    } else {
      this.estado = "reproduciendo";
      console.log("Reproduciendo música...");
    }
  };

  this.pausar = function () {
    if (this.estado === "reproduciendo") {
      this.estado = "pausado";
      console.log("Música pausada.");
    } else {
      console.log("No hay música reproduciéndose.");
    }
  };

  this.detener = function () {
    this.estado = "detenido";
    console.log("Música detenida.");
  };
}

let r = new Reproductor();
r.play();
r.pausar();
r.play();
r.detener();
r.pausar();