const fs = require("fs");

let nombre = process.argv[3];
let edad = process.argv[4];
let tipo = process.argv[5];
let color = process.argv[6];
let enfermedad = process.argv[7];

const registrar = () => {
  const cita = fs.readFileSync("citas.json", "utf-8");
  let citaParse = JSON.parse(cita);
  citaParse.push({
    "Nombre del animal": nombre,
    Edad: edad,
    "Tipo de animal": tipo,
    "Color del animal": color,
    Enfermedad: enfermedad,
  });
  fs.writeFileSync("citas.json", JSON.stringify(citaParse));
};

const leer = () => {
  const cita = fs.readFileSync("citas.json", "utf-8");
  console.log(cita);
};

module.exports = { registrar, leer };
