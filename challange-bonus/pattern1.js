function deretAngka(num) {
  let result = '';

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % 2 === 0) {
        result += "*";
      } else {
        result += i;
      }
    }
    if (i < num) {
      result += "\n";
    }
  }

  return result;
}

console.log(deretAngka(9));