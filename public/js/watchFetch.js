console.log('ok');
const $findBtnProduct = document.forms.product; // находим в нашей хбс форму
const addCard = document.querySelector('.container');

function createCard(data) {
  return `
  <div class="container m-1 row row-cols-auto">
  <div class="contain m-1 row row-cols-auto" data-id=${data.id}>
<div>${data.title}</div>
<img src="${data.image}" alt="" style="max-width: 350px;" style="max-height: 350px">
<div>Описание:${data.description}</div>
<button><a href="/watch/${data.id}">Redact</a></button>
<button>Delete</button>
</div>
  `;
}
$findBtnProduct.addEventListener('submit', async (event) => {
  // console.log('1');
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target)); // собирает все инпуты с формы
  // console.log(formData);
  const response = await fetch('/watch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    const datafromback = await response.json();
    // console.log(datafromback);
    addCard.insertAdjacentHTML('afterend', createCard(datafromback.newWatch));
  } else {
    console.log('Something went wrong');
  }
});
addCard.addEventListener('click', async (event) => {
  if (event.target.tagName === 'BUTTON' && event.target.innerText === 'Delete') {
    const parent = event.target.closest('[data-id]');
    const { id } = parent.dataset;
    const res = await fetch(`/watch/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      parent.remove();
    } else {
      console.log('error');
    }
  }
});
