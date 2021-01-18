const squareSum = (numbers) => {
    let total = 0
    numbers.forEach(num => {
        total += num * num
    });
    return total
}


console.log(squareSum([1, 2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)