const btnYes = document.querySelector(".btnYes");
const btnNo = document.querySelector(".btnNo")

const banner = document.querySelector(".corePixel")
const gatinhoBravo = document.querySelector(".gatinhoBravo")

const title = document.querySelector(".title")
const jasna = document.querySelector(".jasna")

btnYes.addEventListener('click', () => {
  location.href = "presente.html"
})

btnNo.addEventListener('click', () => {
  banner.classList.add('disable')
  gatinhoBravo.classList.remove('disable')
  jasna.classList.add('disable')
  title.textContent = "Really? I don't believe. If you don't love me, leave me away :("
})

function desvia(btn) {
  btn.style.position = 'absolute';
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}