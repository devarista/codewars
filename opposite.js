const opposite = (number) => {
    if (number > 0) {
        return parseFloat(number * parseInt(`-1`))
    }
    return parseFloat(number * parseInt(`-1`))
}

console.log(opposite(-4.243))
console.log(opposite(1))