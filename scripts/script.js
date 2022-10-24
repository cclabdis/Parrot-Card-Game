let qtdCards;
let qtdClicks;
let time = 0;

const allCards = [
  'bobrossparrot.gif',
  'explodyparrot.gif',
  'fiestaparrot.gif',
  'metalparrot.gif',
  'revertitparrot.gif',
  'tripletsparrot.gif',
  'unicornparrot.gif'
];

let deck = [];

function isGameValid (qtdCards){
  return (qtdCards >= 4 && qtdCards <= 14) && qtdCards % 2 == 0;
}

function buildDeck() {
  qtdClicks = 0;
  deck = [];
  
  qtdCards = prompt('Jogo de quantas quartas?');

  if (!isGameValid(qtdCards))
    return buildDeck();

  for (let i = 0; i < (qtdCards / 2); i++) {
    deck.push(allCards[i]);
    deck.push(allCards[i]);
  }

  start();
}

function comparator() { 
	return Math.random() - 0.8; 
}

function start() {
  time = 0;
  
  const cardsElement = document.getElementsByClassName('cards')[0];

  let cardsText = '';

  deck.sort(comparator);
  for (let i = 0; i < deck.length; i++) {
    cardsText += `
      <div class="card card-${deck[i]}" onclick="turnCard(this, '${deck[i]}')">
        <div class="face faceDown">
          <img src="./imgs/back.png">
        </div>
        <div class="face faceUp">
          <img src="./imgs/${deck[i]}">
        </div>
      </div>`;
  }

  cardsElement.innerHTML = cardsText;
}

function removeClikedCard(cardsClicked) {
  setTimeout(() => {
    cardsClicked[1].classList.remove('clicked');
    cardsClicked[0].classList.remove('clicked');
  }, 1000);
}

function turnCard(el, id) {
  qtdClicks++;

  const cardsClicked = document.getElementsByClassName('clicked');
  qtdCardClicked = cardsClicked.length;
  firstCardClicked = cardsClicked[0];

  if (qtdCardClicked == 2)
    return false;

  el.classList.add('clicked');
  if (qtdCardClicked == 1) {
    if (firstCardClicked.classList.contains(`card-${id}`)) {
      cardsClicked[1].classList.add('matched');
      cardsClicked[0].classList.add('matched');
      removeClikedCard(cardsClicked);
      cardsMatched = document.getElementsByClassName('matched');
      if (cardsMatched.length == qtdCards) {
        setTimeout(() => {
          alert(`Ganhou em ${qtdClicks} jogadas!\nA partida demorou ${time} segundos`);
          playAgain();
        }, 1000);
      }
    }
    removeClikedCard(cardsClicked);
  }
}

function playAgain() {
  const playAgain = prompt('Jogar novamente?');
  switch(playAgain) {
    case 'sim':
      buildDeck();
      break;
    case 'não':
      return false;
    default:
      return playAgain();
  }
}

buildDeck();

setInterval(() => {
  time++;
  document.getElementById('time').innerHTML = time;
}, 1000);