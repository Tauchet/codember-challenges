const fs = require('fs');
const path = require('path');

const DATA = (String(fs.readFileSync(path.join(__dirname, 'users.txt'))) + "\n")
    .split('\n')
    // Windows mode
    .map(x => x.replace('\r', ''));

const KEYS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const validateUser = (user) => {
    const userKeys = Object.keys(user);
    return KEYS.filter(x => !userKeys.includes(x)).length == 0;
}

var lastValidUser = null;
var lastUser = {};
var validUsers = 0;

for (let line of DATA) {

    if (line.length === 0) {
        // Cambio de usuario.
        if (validateUser(lastUser)) {
            validUsers++;
            lastValidUser = lastUser;
        }
        lastUser = {};
        continue;
    }

    const lineArgs = line.split(" ");
    for (let data of lineArgs) {
        const [key, value] = data.split(":", 2);
        lastUser[key] = value;
    }

}

console.log("Cantidad de usuarios validos:", validUsers);
console.log("Último usuario valido:", lastValidUser);