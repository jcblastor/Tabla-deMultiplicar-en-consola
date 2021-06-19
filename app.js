const {crearArchivo} = require('./helpers/miltiplicar');
const argv = require('./config/yargs');

console.clear();
/* 
//forma manual de capturar los datos de consola
const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
 */
// const base = 5;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => console.log(err));
