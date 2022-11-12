const fs = require('fs');
const path = require('path');

const file = String(fs.readFileSync(path.join(__dirname, 'users.txt')));
const keys = ['usr:', 'eme:', 'psw:', 'age:', 'loc:', 'fll:'];
const users = file
  // Separa por líneas
  .split('\n')
  // Modo Windows
  .map(x => x.replace('\r', ''))
  // Juntamos los usuarios
  .reduce((array, element) => {
    
    // Es un nuevo usuario cuando es una linea vacía
    if (element.length === 0) {
      array.push("");
      return array;
    }
    
    // Agrupando los usuarios
    let lastElement = array[array.length - 1];
    lastElement += lastElement.length > 0 ? " " : "";
    lastElement += element;
    array[array.length - 1] = lastElement;
    return array;
    
  }, [""])

  // Filtramos los que tengan todas las llaves requeridas.
  .filter(x => x.length !== 0 && keys.every(k => x.includes(k)))


console.log("Total de usuarios validos =", users.length)
console.log("Último usuario valido =", users[users.length - 1])