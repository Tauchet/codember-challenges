const data = "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101";

const max = 122;

const solution = (str) => {
  
  let result = "";
  
  for (let i = 0; i < str.length;) {
    let length = 3;
    let n = parseInt(str.substring(i, Math.min(i + length, str.length)));
    if (n > max) {
      length = 2;
      n = parseInt(str.substring(i, Math.min(i + length, str.length)));
    }
    result += String.fromCharCode(n);
    i += length;
  }
  
  return result;
}

console.log("submit", data.split(" ").map(x => solution(x)).join(" "));