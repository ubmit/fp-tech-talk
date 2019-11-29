const juice = {
  fruit: 'maracujá',
  ordered: {
    friday: 12,
  },
}

const updatedJuice = {
  ...juice,
  ordered: {
    friday: {
      withSugar: 10,
      withoutSugar: 2,
    },
  },
}

console.log(juice)
// { fruit: 'maracujá', ordered: { friday: 12 } }

console.log(updatedJuice)
// { fruit: 'maracujá',  ordered: { friday: { withSugar: 10, withoutSugar: 2 } } }

const juices = ['maracujá', 'manga', 'cajá']

const newJuices = [...juices, 'goiaba']

console.log(newJuices) // [ 'maracujá', 'manga', 'cajá', 'goiaba' ]
