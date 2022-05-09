const togglebtn = document.querySelector(".navar__togglebtn");
const menu = document.querySelector (".navar__menu");
const logo = document.querySelector (".navar__menu--logo");


togglebtn.addEventListener('click', ()  => {
  menu.classList.toggle('active');
  logo.classList.toggle('active');
  });
