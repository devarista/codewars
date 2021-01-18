const abbrevName = (name) => {
    let x = []
    name.toString().split(" ").forEach((item, index) => {
        return x.push(item.toString().charAt(0).toUpperCase())
    })
    return x.toString().replace(",", ".")
}

console.log(abbrevName("Arza Aldi"))