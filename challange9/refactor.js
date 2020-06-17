function spiral(size) {
  let matriks = [];
  let count = 0;

  // generate data multidimensi array
  for (let i = 0; i < size; i++) {
    matriks[i] = [];
    for (let j = 0; j < size; j++) {
      matriks[i][j] = count;
      count++;
    }
  }

  console.log(matriks);

  let x = 0; y = 0;
  let upLimit =  size;
  let downLimit = 0;
  let result = [];

  while(result.length < size * size) {
    for (; x < upLimit; x++) {
      result.push(matriks[y][x]);
    }

    x--;
    y++;
    
    for(; y < upLimit; y++) {
      result.push(matriks[y][x]);
    }

    y--;
    x--;

    for(; x >= downLimit; x--) {
      result.push(matriks[y][x]);
    }

    x++;
    y--;

    for(; y > downLimit; y--) {
      result.push(matriks[y][x]);
    }

    x++;
    y++;
    upLimit--;
    downLimit++;
  }

  console.log(result);
}

spiral(5);
spiral(6);
spiral(7);
