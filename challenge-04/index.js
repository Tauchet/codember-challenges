const check = (n) => {
    const str = String(n);
    let includesRepeatFive = false
    for (let i = 0; i < str.length - 1; i++) {
        if (!(str[i + 1] >= str[i])) {
            return false;
        }
        if (str[i] == 5 && str[i + 1]== 5) {
            includesRepeatFive = true;
        }
    }
    return includesRepeatFive;
}

let results = [];
for (let n = 11098; n < 98123; n++) {
    if (check(n)) {
        results.push(n)
    }
}
console.log(`submit ${results.length}-${results[55]}`)