const prepareJuice = fruit => `your ${fruit} juice is ready`;
const getJuice = prepareJuice;
getJuice("maracuja"); // "your maracuja juice is ready"

// const getMixedJuice = (f1, f2) =>
//   console.log(`your ${f1} mixed with ${f2} juice is ready`);

const getMixedJuice = f1 => f2 => `your ${f1} mixed with ${f2} juice is ready`;

const getSomethingWithMaracujaJuice = getMixedJuice("maracuja");
getSomethingWithMaracujaJuice("pitanga"); // "your maracuja mixed with pitanga juice is ready"

const firstResult = getJuice("maracuja");
const secondResult = getSomethingWithMaracujaJuice("pitanga");
console.log(firstResult);
console.log(secondResult);
