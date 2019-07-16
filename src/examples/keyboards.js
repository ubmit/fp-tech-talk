const keyboards = [
  { name: "LZ Iron", size: "80%", type: "staggered", springWeight: 67 },
  { name: "Fanoe", size: "65%", type: "staggered", springWeight: 62 },
  { name: "Tofu", size: "60%", type: "staggered", springWeight: 67 },
  { name: "Contra", size: "40%", type: "ortholinear", springWeight: 65 }
];

const isTKL = keeb => keeb.size === "80%";

const getTKLs = xs => xs.filter(isTKL);

Array.prototype.reject = function(fn) {
  let rej = test => !fn(test);
  return this.filter(rej);
};

const isStaggered = keeb => keeb.type === "staggered";

const getOrthos = xs => xs.reject(isStaggered);

const isAbove = (keeb, weight) => keeb.springWeight > weight;

const getNonOrthosAboveCertainWeight = xs => weight =>
  xs.filter(isStaggered).filter(keeb => isAbove(keeb, weight));

const getNonOrthosHeavierThan = getNonOrthosAboveCertainWeight(keyboards);

getTKLs(keyboards); // [ { name: 'LZ Iron', size: '80%', type: 'staggered', springWeight: 67 } ]
getNonOrthos(keyboards); // [ { name: 'Contra', size: '40%', type: 'ortholinear', springWeight: 65 } ]
getNonOrthosHeavierThan(62);
/*
[ { name: 'LZ Iron',
    size: '80%',
    type: 'staggered',
    springWeight: 67 },
  { name: 'Tofu', size: '60%', type: 'staggered', springWeight: 67 } ]
*/
