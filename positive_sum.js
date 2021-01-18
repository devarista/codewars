const positive_sum = (arrayOfNumber) => {
    let sum = 0
    for (let index = 0; index < arrayOfNumber.length; index++) {
        const element = arrayOfNumber[index];
        if (element >= 0) {
            sum += element
        }
    }
    return sum
}
console.log(positive_sum([1, 2, 3, 4, 5]), 15);
console.log(positive_sum([1, -2, 3, 4, 5]), 13);
console.log(positive_sum([]), 0);
console.log(positive_sum([-1, -2, -3, -4, -5]), 0);
console.log(positive_sum([-1, 2, 3, 4, -5]), 9);