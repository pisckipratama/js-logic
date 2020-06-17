function fibonacci(num) {
  let result = [];

  for (let i = 1; i <= num; i++) {
    if (i === 1 || i === 2) {
      result.push(1);
    } else {
      result.push(result[result.length - 2] + result[result.length - 1]);
    }
  }

  console.log(result.join(" "));
}

fibonacci(10);