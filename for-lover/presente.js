const presenteImg = document.querySelector(".presente");
const abertaImg = document.querySelector(".aberta");
const gatinhoImg = document.querySelector(".gatinho")
const title = document.querySelector(".title")
const balaos = document.querySelector(".balaos")


function abrir() {
  presenteImg.classList.add('disable');
  abertaImg.classList.remove('disable');
  gatinhoImg.classList.remove('disable')
  title.classList.remove('disable')
  balaos.classList.remove('disable')

  const icons = ['❤️', '🌺', '🎁', '💐', '✨'];
  const container = document.getElementById('icon-container');

  function createIcon() {
      const iconElement = document.createElement('div');
      iconElement.classList.add('icon');
      iconElement.innerText = icons[Math.floor(Math.random() * icons.length)];
      iconElement.style.left = `${Math.random() * 100}vw`;
      container.appendChild(iconElement);

      iconElement.addEventListener('animationend', () => {
          iconElement.remove();
      });
  }

  setInterval(createIcon, 500);

  setTimeout(function() {
    document.getElementById("myAudio").play();
  }, 2000); // Phát nhạc sau 2 giây

  // setTimeout(() => {
  //   yt()
  // }, 7000);
}

function yt() {
  window.open("https://youtu.be/2Vv-BfVoq4g?si=pAsTr8e_zvBOtTWR");
}