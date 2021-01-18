const displayFizzBuzz = () => {
    let numbers = []

    for (let index = 1; index <= 20; index++) {
        if (index % 3 == 0) {
            numbers.push('Fizz')
        }
        if (index % 5 == 0) {
            numbers.push('Buzz')
        }

        if (index % 3 != 0 && index % 5 != 0) {
            numbers.push(index)
        }

    }
    console.log(numbers)
}

displayFizzBuzz()