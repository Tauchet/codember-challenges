const fs = require('fs');
const path = require('path');

let data = JSON.parse(String(fs.readFileSync(path.join(__dirname, 'mecenas.json'))));
data = data.map((x, i) => {return {i, x}});

const findIndexInCircle = (array, func, start = 0) => {
    if (start != 0) {
      let intent = array.slice(start).findIndex(func);
      if (intent >= 0) {
        return intent + start;
      }
    }
    return array.findIndex(func);
}

let last = 0;
while (data.length > 1) {
    const filter = (x) => x != "X";
    const start = findIndexInCircle(data, filter, last);
    const end = findIndexInCircle(data, filter, start + 1);
    data.splice(end, 1);
    last = start + 1;
}

const { i, x } = data[0];
console.log(`submit ${x}-${i}`)