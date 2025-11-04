const KEY = 'memory';

// a) recuperare il contenuto precedentemente salvato (se presente!)
const savedInMemory = localStorage.getItem(KEY);
const prevName = document.getElementById('prev-name');
// b) inserire questo contenuto nella textarea
if (savedInMemory) {
  prevName.innerHTML = `
<label>${savedInMemory}</label>
`;
}

const saveBtn = document.getElementById('save');
const deleteBtn = document.getElementById('delete');

const textField = document.getElementById('text-field');

// save btn
saveBtn.addEventListener('click', () => {
  const textContent = textField.value;
  console.log('salvato ' + textContent);
  localStorage.setItem(KEY, textContent);
  textField.value = '';
  prevName.innerHTML = `
<label>${textContent}</label>
`;
});

// delete btn
deleteBtn.addEventListener('click', () => {
  textField.value = '';
  prevName.innerHTML = '';
  localStorage.removeItem(KEY);
});
