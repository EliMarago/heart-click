//richiesta immagine
fetch("https://dog.ceo/api/breeds/image/random")
  .then((respo) => respo.json())
  .then((data) => {
    const imgUrl = data.message;
    const el = document.getElementById("dogImage");
    el.style.backgroundImage = `url(${imgUrl})`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
  });

const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timeClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timeClicked;

  setTimeout(() => heart.remove(), 1000);
};
