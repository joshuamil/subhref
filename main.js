let count = () => {
  let c = 0;
  chrome.storage.local.get('noise_count', (items) => {
    if (items.noise_count) {
      c = parseInt(items.noise_count, 10);
    }
    document.querySelector('.count').innerHTML = c;
    if (c && c > 0) {
      document.querySelector('.notice').classList.add('enabled');
    }
  });
}

count();
