const cards = [
  {
    name: "Html",
    img: "../images/html.svg",
  },
  {
    name: "Css",
    img: "../images/css.svg",
  },
  {
    name: "Tailwind",
    img: "../images/tailwind.svg",
  },
  {
    name: "JavaScript",
    img: "../images/js.svg",
  },
  {
    name: "Python",
    img: "../images/python.svg",
  },
  {
    name: "React",
    img: "../images/react.svg",
  },
  {
    name: "Angular",
    img: "../images/angular.svg",
  },
  {
    name: "Vue",
    img: "../images/vue.svg",
  },
];

// create grid card image on the back
const parentDiv = document.getElementById("parent-div");

const gameCard = cards.concat(cards);

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

const shuffleArray = shuffle(gameCard);

function createGridCard() {
  for (let i = 0; i < shuffleArray.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardContent = document.createElement("div");

    cardContent.classList.add("card-content");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.dataset.name = gameCard[i].name;

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.style.backgroundImage =`url(${gameCard[i].img})`;

    card.appendChild(cardContent);
    cardContent.appendChild(cardFront);
    cardContent.appendChild(cardBack);
    parentDiv.appendChild(card);
  }
}
createGridCard();

let isTrue = true;
let clickCount = 0;
let firstCard;
let secondCard;

parentDiv.addEventListener("click", (e) => {
  if (e.target.id === "parent-div") {
    return false;
  }
  clickCount++;
  if (clickCount < 3) {
    e.target.parentNode.classList.add("rotate");
    if (isTrue) {
      firstCard = e.target;
      // console.log("first click");
      isTrue = !isTrue;
    } else {
      secondCard = e.target;
      // console.log("second clicked");
      isTrue = !isTrue;
      if (firstCard.dataset.name === secondCard.dataset.name) {
        // console.log("match");
        setTimeout(() => {
          firstCard.parentNode.classList.remove("rotate");
          secondCard.parentNode.classList.remove("rotate");
          firstCard.classList.add("bg-orange-500");
          secondCard.classList.add("bg-orange-500");
          clickCount = 0;
        }, 1000);
      } else {
        setTimeout(() => {
          firstCard.parentNode.classList.remove("rotate");
          secondCard.parentNode.classList.remove("rotate");
          clickCount = 0;
        }, 1000);
      }
    }
  }
});

function playAgain() {
  window.location.reload();
}
