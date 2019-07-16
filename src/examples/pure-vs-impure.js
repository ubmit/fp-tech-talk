const mechanicalKeyboardSwitches = [
  ["gateron yellow", "linjar", "greetech black", "gateron clear", "kbt red"], // linears
  ["outemu sky", "cherry mx brown", "halo true", "kailh pro purple"], // tactiles
  ["outemu blue"] // clickies
];

// impure
const minimum = 5;
const checkExperienceImpure = xs =>
  xs.map(switches => switches.length >= minimum);

// pure
const checkExperiencePure = xs => {
  const minimum = 5; // const immutableState = Object.freeze({ minimum: 5 })
  return xs.map(switches => switches.length >= minimum);
};

checkExperienceImpure(mechanicalKeyboardSwitches); // [ true, false, false ]
checkExperiencePure(mechanicalKeyboardSwitches); // [ true, false, false ]

const checkExperienceWhatIsThis = xs => {
  const minimum = 5; // const immutableState = Object.freeze({ minimum: 5 })
  console.log(xs.map(switches => switches.length >= minimum));
};

// impure
const addLinearSwitch = (xs, idx, str) => xs[idx].push(str);
addLinearSwitch(mechanicalKeyboardSwitches, 0, "mx cherry retooled black");
console.log(mechanicalKeyboardSwitches);
/*
[ [ 'gateron yellow',
    'linjar',
    'greetech black',
    'gateron clear',
    'kbt red',
    'mx cherry retooled black' ],
  [ 'outemu sky',
    'cherry mx brown',
    'halo true',
    'kailh pro purple' ],
  [ 'outemu blue' ] ]
*/

// pure
const addLinearSwitchPure = (xs, idx, str) => {
  const linearArr = xs[idx].concat([str]);
  const clone = xs.slice(0);
  clone[idx] = linearArr;
  return clone;
};

const res = addLinearSwitchPure(mechanicalKeyboardSwitches, 0, "gateron ink");
console.log(mechanicalKeyboardSwitches);
/*
[ [ 'gateron yellow',
    'linjar',
    'greetech black',
    'gateron clear',
    'kbt red',
    'mx cherry retooled black' ],
  [ 'outemu sky',
    'cherry mx brown',
    'halo true',
    'kailh pro purple' ],
  [ 'outemu blue' ] ]
*/

console.log(res);
/*
[ [ 'gateron yellow',
    'linjar',
    'greetech black',
    'gateron clear',
    'kbt red',
    'mx cherry retooled black',
    'gateron ink' ],
  [ 'outemu sky',
    'cherry mx brown',
    'halo true',
    'kailh pro purple' ],
  [ 'outemu blue' ] ]
*/
