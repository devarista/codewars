const sheeps = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
]

const countSheeps = (arrayOfSheeps) => {
    // Noob Way
    // let total = 0
    // for (let index = 0; index < arrayOfSheeps.length; index++) {
    //     const sheep = arrayOfSheeps[index];
    //     if (sheep == true) {
    //         total++
    //     }
    // }
    // return total

    // Pro Way
    return arrayOfSheeps.filter(Boolean).length

}

console.log(countSheeps(sheeps))