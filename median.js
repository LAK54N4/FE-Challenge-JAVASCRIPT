// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];
function result(input) {
    const sort = input.sort();
    const middle = Math.floor(sort.length/2); // 

    if (sort.length % 2 === 0) {
        return (sort[middle - 1] + sort[middle]) /2;
    }
    return sort[middle];
}

console.log(result(input));