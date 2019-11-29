const compose = (...fns) => arg => fns.reduceRight((prev, fn) => fn(prev), arg)

const pipe = (...fns) => arg => fns.reduce((prev, fn) => fn(prev), arg)

const prepareInput = compose(removeAccents, toLowerCase, trim)

const prepareInput = pipe(trim, toLowerCase, removeAccents)

const getJuicePrice = inputValue =>
  Box(inputValue)
    .map(prepareInput)
    .chain(juiceName => fromNullable(juices[juiceName]))
    .fold(
      e => 'error',
      price => price
    )
