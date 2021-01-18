const countPositivesSumNegatives = input => {
    if (input.includes(/\0/g) || input.includes("")) {
        return []
    }
    const positive = input.filter(item => item >= 0)
    const negative = input.filter(item => item < 0)

    const sum = positive.length
    const unsum = negative.reduce((total, num) => {
        return total + num
    }, 0)
    return [sum, unsum]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, -1, -2, -3]))