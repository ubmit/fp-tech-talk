// impure
let max = 2.0
const checkPriceImpure = n => n <= max

// pure
const checkPrice = price => {
  const max = 2.0
  return price <= max
}
