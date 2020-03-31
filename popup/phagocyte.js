const button = document.getElementById('toggle');
const text = document.getElementById('text');

let enabled = true;

button.addEventListener('click', () => {
  browser.storage.sync.set({
    enabled: !enabled
  });
  enabled = !enabled;
  if (enabled) {
    text.innerHTML = 'Disable';
    button.classList.replace('disabled', 'enabled');
  } else {
    text.innerHTML = 'Enable';
    button.classList.replace('enabled', 'disabled');
  }
  browser.refresh();
});
