function findThreeNumbers(arr, x) {
    const n = arr.length;
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === x) {
                    console.log((i + 1) + " " + (j + 1) + " " + (k + 1));
                    return;
                }
            }
        }
    }

    console.log("IMPOSIBLE");
}


// console.log(findThreeNumbers([6, 8, 9, 10, 2, 3, 4, 5], 5))
findThreeNumbers([6, 8, 9, 10, 2, 3, 4, 5], 5);
findThreeNumbers([6, 8, 9, 10, 2, 3, 4, 5, 1], 6);
findThreeNumbers([1, 2, 3, 4, 5], 9)