// challange 4 rubicamp 

function indexPrime(param1) {
    let counter = 0;
    let number = 2;

    while(counter < param1) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            counter++;
        }
        number++;
    }
    return number - 1;
}

console.log(indexPrime(4)) // output 7
console.log(indexPrime(500)) // output 3571
console.log(indexPrime(37786)) // output 450881