// Exercise 8
/*Create a function that recibe two arrays and return a new array that contain the common elements of both   */

const arrayUnion = (arr1, arr2) => {

    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if (!result.includes(arr1[i])) {
                    result.push(arr1[i])
                }
            }
        }
    }
    return result;
}

console.log(arrayUnion([1, 2, 4, 6, 7], [2, 4, 6, 9, 0]));

/*In this exercise is created an arrow function that receives two arrays
first is initialized the result with empty array after
is created the for that initialized the i in 0, while i is
minor that arr1.length , i is sumated i + 1 inside this for , another for is created that initialized the j in 0 , while j is minor that arr2.length , j is sumated j +2 inside
if the different of result.includes in the index of arra1 is pushed the result arr1 [i]
and the finish is return the result
 */