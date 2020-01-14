// challange 4 rubicamp 

function indexPrime(param1) {
    let prime = 2;
    let result = 0;

    // function checkPrime(num) {
    //     for (let i = 2; i < num; i++)
    //         if (num % i === 0) return false;
    //     return num > 1;
    // }

    while (result < param1) {
        let isPrime = true;
        for (let i = 2; i < prime; i++)
            if (prime % i === 0) isPrime = false;
        if (isPrime) {
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