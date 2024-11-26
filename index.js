const { registrar, leer } = require("./operaciones");

let opcion = process.argv[2];

if (opcion == "registrar") {
  registrar();
}

if (opcion == "leer") {
  leer();
}
