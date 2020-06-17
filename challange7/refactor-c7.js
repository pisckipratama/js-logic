function multiply(number) {
  let numberString = number.toString();
  
  if (numberString.length == 1) return number;
  
  let total = 1;
  for (let i = 0; i < numberString.length; i++) {
    total *= numberString[i];
  }

  return multiply(total);
}

console.log(multiply(39))
console.log(multiply(999))
console.log(multiply(3))