// Challange 9 Rubicamp: Spiral

function spiral(param1) {
    // setup matrix
    let matrix = new Array(param1).fill().map(() => new Array(param1).fill(''));
    let counter = 0;
    let startCol = 0;
    let endCol = param1 - 1;
    let startRow = 0;
    let endRow = param1 - 1;

    while (startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;
    }

    // do spiral
    let result = [];
    while (matrix.length > 1) {
        // add data dari atas kiri ke kanan atas 
        result = result.concat(matrix.splice(0, 1)[0]);

        // add data dari kanan atas ke kanan bawah
        for (let data in matrix) {
            result.push(matrix[data].splice(-1)[0]);
        }
        
        // add data dari kanan bawah ke kiri bawah
        result = result.concat(matrix.splice(-1, 1)[0].reverse());
        
        // add data dari kiri bawah ke kanan atas
        for (let i = matrix.length - 1; i >= 0; i--) {
            result.push(matrix[i].splice(0, 1)[0]);
        }
    }

    if (matrix.length > 0) {
        result.push(matrix.pop()[0]);
    }

    console.log(result);
}

spiral(5);
spiral(6);
spiral(7);