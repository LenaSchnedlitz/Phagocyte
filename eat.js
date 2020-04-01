const keywords = [
  'beatmungsgerät',
  'c-virus',
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

const tagList = [
    'article',
    'iframe'
];
const classList = [
  'article',
  'article-preview',
  'athing',
  'block__position',
  'card',
  'cn__listitem',
  'cover-spread__headline__wrapper',
  'fc-item',
  'gel-layout__item',
  'ie-11_Fil(n)',
  'linkBar',
  'multiTeaser-card',
  'pancake-item-1',
  'pancake-item-2',
  'pancake-item-3',
  'pancake-item-4',
  'pb-feature',
  'pB-kurierat',
  'Post',
  'Post-item',
  'readmore__item',
  'upost',
  'vodl-lead-hero',
  'vodl-news-aside__item',
  'vodl-news-river__item',
  'vodl-newsslider__category',
  'vodl-newsslider__list-item',
  'widget-type-calltoaction'
];

function eat(collection) {
  [...collection].forEach(entry => {
    if (entry.outerHTML.toLowerCase().match(regexp)) {
      entry.style.display = 'none';
    }
  });
}

function eatEverything() {
  tagList.forEach(entry => eat(document.getElementsByTagName(entry)));
  classList.forEach(entry => eat(document.getElementsByClassName(entry)));
}

browser.storage.sync.get('disabled').then((res) => {
  if (!res.disabled) {
    eatEverything();
  }
}).catch(() => eatEverything());
