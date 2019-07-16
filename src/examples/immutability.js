const keyboard = {
  name: "unikorn",
  color: "purple",
  switches: "gateron ink",
  springWeight: 61
};

// imperative way
const getHeavier = keeb => {
  keeb.springWeight++;
};

getHeavier(keyboard);
console.log(keyboard);
/*
{ name: 'unikorn',
  color: 'purple',
  switches: 'gateron ink',
  springWeight: 62 }
*/

// functional way
const getHeavier = keeb => ({
  name: keeb.name,
  color: keeb.color,
  switches: keeb.switches,
  springWeight: keeb.springWeight + 1
});

console.log(keyboard);
/*
{ name: 'unikorn',
  color: 'purple',
  switches: 'gateron ink',
  springWeight: 61 }
*/

const res = getHeavier(keyboard);
console.log(res);
/*
{ name: 'unikorn',
  color: 'purple',
  switches: 'gateron ink',
  springWeight: 62 }
*/

const getHeavier = ({ springWeight, ...rest }) => ({
  springWeight: springWeight + 1,
  ...rest
});
