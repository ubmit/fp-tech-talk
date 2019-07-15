const { Box, fromNullable, pipe } = require("./utils");

const juices = {
  maracuja: "$2.50",
  pitanga: "$1.0",
  graviola: "$2.0",
  caja: "$1.5"
};

const trim = str => str.trim();

const toLowerCase = str => str.toLowerCase();

const notAvailableMessage = str => `sorry, but ${str} juice is not available`;

const removeAccents = str =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// imperative way

/*
const getJuicePrice = str => {
  const trimmed = str.trim()
  const lowered = trimmed.toLowerCase()
  const withoutAccents =  lowered.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return juices[withoutAccents] || `sorry, but ${lowered} juice is not available!`
}
*/

/*
const getJuicePrice = str =>
  juices[((str.trim()).toLowerCase()).normalize('NFD').replace(/[\u0300-\u036f]/g, '')] || `sorry, but ${(str.trim()).toLowerCase()} juice is not available`
*/

/*
const getJuicePrice = str =>
  juices[removeAccents(toLowerCase(trim(str)))] || notAvailableMessage(toLowerCase(trim(str)))
*/

/*
const getJuicePrice = str => {
  const trimmedAndLowered = toLowerCase(trim(str))
  return juices[removeAccents(trimmedAndLowered)] || notAvailableMessage(trimmedAndLowered)
}
*/

// functional way
/*
const getJuicePrice = str =>
  Box(str)
    .map(trim)
    .map(toLowerCase)
    .map(removeAccents)
    .chain(s => fromNullable(juices[s]))
    .fold(e => 'error', s => s);
*/

const prepareStr = str =>
  pipe(
    trim,
    toLowerCase
  )(str);

const getJuicePrice = str =>
  Box(str)
    .map(prepareStr)
    .map(removeAccents)
    .chain(s => fromNullable(juices[s]))
    .fold(
      e =>
        pipe(
          prepareStr,
          notAvailableMessage
        )(str),
      s => s
    );

const result = getJuicePrice("    Maracujá  "); // $1.50
// const result = getJuicePrice('    uva '); // sorry, but uva juice is not available
console.log(result);
