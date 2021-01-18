const digitize = (n) => {
    // const x = n.toString()
    // let y = []
    // for (let index = 0; index < x.length; index++) {
    //     y.unshift(parseInt(x[index]))
    // }

    // return y

    return String(n).split('').map(Number).reverse()
}

console.log(digitize(35231));