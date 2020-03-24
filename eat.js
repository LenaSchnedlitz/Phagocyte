const keywords = [
  'corona',
  'covid-19',
  'flatten the curve',
  'flattenthecurve',
  'outbreak',
  'pandemi',
  'quarant',
  'sars-cov-2',
  'self isolation',
  'selbstisolation',
  'seuche',
  'social distancing',
  'socialdistancing',
  'stay home',
  'stayhome',
  'viren',
  'virus'
];
const regexp = `(${keywords.join('|')})`;

function eat(collection) {
  [...collection].forEach(entry => {
    if (entry.innerHTML.toLowerCase().match(regexp)) {
      entry.style.display = 'none';
    }
  });
}

eat(document.getElementsByTagName('article'));

eat(document.getElementsByClassName('athing'));
eat(document.getElementsByClassName('block__position'));
eat(document.getElementsByClassName('card'));
eat(document.getElementsByClassName('linkBar'));
eat(document.getElementsByClassName('multiTeaser-card'));
eat(document.getElementsByClassName('pB-kurierat'));
eat(document.getElementsByClassName('Post'));
eat(document.getElementsByClassName('Post-item'));
eat(document.getElementsByClassName('readmore__item'));
eat(document.getElementsByClassName('upost'));
eat(document.getElementsByClassName('widget-type-calltoaction'));
