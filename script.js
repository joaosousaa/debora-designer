function darkTheme() {
  document.body.classList.add("dark")
}

function lightTheme() {
  document.body.classList.remove("dark")
}
// Redirecionar butao
function agendar() {
  window.location.href = 'https://api.whatsapp.com/send?phone=+5581%209436-0419&text=Oi+D%C3%A9bora%2C+gostaria+de+agendar+uma+sess%C3%A3o+com+voc%C3%AA%21', '_blank';
}

// Fecha o menu de navegação
document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', () => {
      document.querySelector('.navbar-collapse').classList.remove('show');
  });
});

