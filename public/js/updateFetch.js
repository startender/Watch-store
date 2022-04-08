console.log('ya tyt redactor');
const editBtn = document.forms.editWatch;

// console.log(editBtn);
editBtn.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target));
  // console.log(formData);
  const result = await fetch(`/watch/:${formData.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (result.ok) {
    window.location = '/watch';
    // redirect для фронта
  }
});
