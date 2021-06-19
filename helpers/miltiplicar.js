const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, limite, hasta) => {
  /* 
  return new Promise((resolve, reject) => {
    console.log('=====================');
    console.log(`    Tabla del: ${base}`);
    console.log('=====================');

    let salida = '';
    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt`);
  });
  */

  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if (limite === true) {
      console.log('====================='.green);
      console.log(`    Tabla del: ${base}`);
      console.log('====================='.green);

      console.log(consola);
    }

    fs.writeFileSync(`./out/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo
};
