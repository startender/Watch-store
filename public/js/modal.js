const navBar = document.querySelector('.btn-group');
const { registration } = document.forms;
const closeReg = document.querySelector('#closeReg');
console.log(registration);
navBar.addEventListener('click', (e) => {
  if (e.target.innerText === 'Регистрация') {
    registration.classList.toggle('formReg');
  }
});
closeReg.addEventListener('click', (e) => {
  console.log('====>');
  registration.classList.toggle('formReg');
});
registration.addEventListener('submit', (e) => {
  e.preventDefault();
  registration.classList.toggle('formReg');
});


const navBarAvt = document.querySelector('.btn-group');
const { forma } = document.forms;
const closeAvt = document.querySelector('#closeUsers');

navBarAvt.addEventListener('click', (e) => {
  if (e.target.innerText === 'Форма') {
    forma.classList.toggle('formUsers');
  }
});
closeAvt.addEventListener('click', (e) => {
  
  forma.classList.toggle('formUsers');
});
forma.addEventListener('submit', (e) => {
  e.preventDefault();
  forma.classList.toggle('formUsers');
});


const navBarUs = document.querySelector('.btn-group');
const { authorization } = document.forms;
const closeUs = document.querySelector('#closeAvt');

navBarUs.addEventListener('click', (e) => {
  if (e.target.innerText === 'Авторизация') {
    authorization.classList.toggle('formUsers');
  }
});
closeUs.addEventListener('click', (e) => {
  authorization.classList.toggle('formUsers');
});
authorization.addEventListener('submit', (e) => {
  e.preventDefault();
  authorization.classList.toggle('formUsers');
});
