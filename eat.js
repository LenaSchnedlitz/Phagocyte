const keywords = [
  'beatmungsgerät',
  'c-virus',
  'corona',
  'cov-19',
  'covid-19',
  'COVID19',
  'flatten the curve',
  'flattenthecurve',
  'infiziert',
  'pic'
  'kontaktverbot',
  'maskenpflicht',
  'outbreak',
  'pandemi',
  'pandémie'
  'quarant',
  'sars-cov-2',
  'schutzmaske',
  'masque'
  'self isolation',
  'selbstisolation',
  'confinement'
  'réanimation'
  'seuche',
  'social distancing',
  'socialdistancing',
  'distanciation sociale'
  'stay home',
  'stayhome',
  'restez chez vous'
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
