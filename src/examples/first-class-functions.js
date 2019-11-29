// A function can be assigned to a variable

const foo = (x, y) => x + y

const add = foo
add(1, 2) // 3

// A function can be an argument of another function

const fibonacci = [0, 1, 1, 2, 3, 5, 8]

fibonacci.map(checkPrice) // [ true, true, true, true, false, false, false ]

fibonacci.filter(checkPrice) // [ 0, 1, 1, 2 ]

fibonacci.reduce(add) // 20

// A function can be returned from another function

const checkPrice = max => price => price <= max

const checkPriceBelowOrEqualTwo = checkPrice(2)

checkPriceBelowOrEqualTwo(5) // false
