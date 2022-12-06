const fs = require('fs');
const path = require('path');

let data = JSON.parse(String(fs.readFileSync(path.join(__dirname, 'mecenas.json'))));
data = data.map((x, i) => {return {i, x}});

Array.prototype.findIndexInCircle = function(func, start) {

    for (let i = start; i < this.length; i++) {
        if (func(this[i])) {
            return i;
        }
    }

    for (let i = 0; i < start; i++) {
        if (func(this[i])) {
            return i;
        }
    }

    return -1;

}

let last = 0;
while (data.length > 1) {
    const filter = (x) => x != "X";
    const start = data.findIndexInCircle(filter, last);
    const end = data.findIndexInCircle(filter, start + 1);
    data.splice(end, 1);
    last = start + 1;
}

const { i, x } = data[0];
console.log(`submit ${x}-${i}`)