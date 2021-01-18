const basicOperation = (op, val1, val2) => {
    return eval(`${val1}${op}${val2}`)
}

console.log(basicOperation('/', 2, 2))