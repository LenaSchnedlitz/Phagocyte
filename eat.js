const keywords = [
  'beatmungsgerät',
  'corona',
  'cov-19',
  'covid-19',
  'flatten the curve',
  'flattenthecurve',
  'infiziert',
  'kontaktverbot',
  'maskenpflicht',
  'outbreak',
  'pandemi',
  'quarant',
  'sars-cov-2',
  'schutzmaske',
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

function eatEverything() {
  eat(document.getElementsByTagName('article'));

  eat(document.getElementsByClassName('article-preview'));
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
  eat(document.getElementsByClassName('vodl-lead-hero'));
  eat(document.getElementsByClassName('vodl-news-aside__item'));
  eat(document.getElementsByClassName('vodl-news-river__item'));
  eat(document.getElementsByClassName('vodl-newsslider__category'));
  eat(document.getElementsByClassName('vodl-newsslider__list-item'));
  eat(document.getElementsByClassName('widget-type-calltoaction'));
}

browser.storage.sync.get('disabled').then((res) => {
  if (!res.disabled) {
    eatEverything();
  }
}).catch(() => eatEverything());
