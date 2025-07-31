/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length;
    const N = n * n;
    const seen = new Set();

    let repeated = -1, missing = -1;

    for (let row of grid) {
        for (let num of row) {
            if (seen.has(num)) {
                repeated = num;
            } else {
                seen.add(num);
            }
        }
    }
 for (let x = 1; x <= N; x++) {
        if (!seen.has(x)) {
            missing = x;
            break;
        }
    }

    return [repeated, missing];
};
