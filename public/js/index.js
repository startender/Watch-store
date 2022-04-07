const { postForm } = document.forms;
const postWrapper = document.querySelector('.postWrapper');

function newPost(example) {
  return `
  <div data-id="${example.id}" class="col-4">
  <div class="card" style="width: 18rem;">
    <img src="/img/${example.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${example.title}</h5>
      <p class="card-text">${example.body}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      <button type="button">Delete</button>
    </div>
  </div>
  </div>
  `;
}

postForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(postForm);
  const response = await fetch('/expample', {
    method: 'POST', // Отправляем через фетч сетевой запрос методом пост
    body: data,
  });
  if (response.ok) {
    const dataFromBack = await response.json();
    postWrapper.insertAdjacentHTML('afterbegin', newPost(dataFromBack.newPost));
  } else {
    alert('very bad');
  }
});

postWrapper.addEventListener('click', async (e) => {
  if (e.target.innerText === 'Delete') {
    const card = e.target.closest('[data-id]');
    const { id } = card.dataset;
    const response = await fetch(`/example/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      card.remove();
    }
  }
});
