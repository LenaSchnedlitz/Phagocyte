const button = document.getElementById('toggle');
const text = document.getElementById('text');

function toggle(disabled) {
  if (!disabled) {
    text.innerHTML = 'Disable';
    button.classList.replace('disabled', 'enabled');
    browser.browserAction.setIcon({ path: '../icons/icon-32.png' });
  } else {
    text.innerHTML = 'Enable';
    button.classList.replace('enabled', 'disabled');
    browser.browserAction.setIcon({ path: '../icons/icon-32_disabled.png' });
  }
}

browser.storage.sync.get('disabled').then((res) => {
  toggle(res.disabled);
});

button.addEventListener('click', () => {
  browser.storage.sync.get('disabled').then((res) => {
    browser.storage.sync.set({ disabled: !res.disabled });
    toggle(!res.disabled);
    browser.tabs.reload();
  });
});
