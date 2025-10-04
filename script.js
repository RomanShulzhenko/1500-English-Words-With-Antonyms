let words = [];

fetch('words_full_rus.json')
  .then(response => response.json())
  .then(data => {
    words = data;
    displayWords(words);
  });

const wordList = document.getElementById('word-list');
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  const filtered = words.filter(w => w.word.toLowerCase().includes(term));
  displayWords(filtered);
});

function displayWords(list) {
  wordList.innerHTML = '';
  list.forEach(w => {
    const li = document.createElement('li');
    li.className = 'word-item';
    li.innerHTML = `<strong>${w.word}</strong> Ч <span class="meaning">${w.meaning}</span>`;
    li.addEventListener('click', () => {
      const antonymsHTML = `<div class="antonyms">јнтонимы: ${w.antonyms.join(', ')}</div>`;
      li.innerHTML = `<strong>${w.word}</strong> Ч <span class="meaning">${w.meaning}</span>${antonymsHTML}`;
    });
    wordList.appendChild(li);
  });
}
