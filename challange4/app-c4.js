// challange 4 rubicamp 

function checkPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function indexPrime(param1) {
    let prime = 2;
    let result = 0;

    while (result < param1) {
        if (checkPrime(prime) === true) {
            result++;
        }
        prime++;
    }
    return prime - 1;
}

console.log(indexPrime(4)) // output 7
// console.log(checkPrime(7))
console.log(indexPrime(500)) // output 3571
// console.log(indexPrime(37786)) // output 450881