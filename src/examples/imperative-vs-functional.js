const juices = {
  maracuja: '$2.50',
  graviola: '$2.00',
  caja: '$1.50',
}

// standard
const getJuicePrice = inputValue => {
  const trimmed = trim(inputValue)
  const lowered = toLowerCase(trimmed)
  const withoutAccents = removeAccents(lowered)
  return juices[withoutAccents] || 'error'
}

// functional
const getJuicePrice = inputValue =>
  Box(inputValue)
    .map(trim)
    .map(toLowerCase)
    .map(removeAccents)
    .chain(juiceName => fromNullable(juices[juiceName]))
    .fold(
      e => 'error',
      price => price
    )

getJuicePrice('   maracujá     ') // "$2.50"
