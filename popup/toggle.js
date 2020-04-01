const button = document.getElementById('toggle');
const text = document.getElementById('text');

function toggleButton(disabled) {
  if (!disabled) {
    text.innerHTML = 'Disable';
    button.classList.replace('disabled', 'enabled');
  } else {
    text.innerHTML = 'Enable';
    button.classList.replace('enabled', 'disabled');
  }
}

browser.storage.sync.get('disabled').then((res) => {
  toggleButton(res.disabled);
});

button.addEventListener('click', () => {
  browser.storage.sync.get('disabled').then((res) => {
    browser.storage.sync.set({disabled: !res.disabled});

    toggleButton(!res.disabled);
  });
});
