'use strict'
//Модальное окно с правилами
const modalWindow=document.querySelector('.modal_rules');

const overlay=document.querySelector('.overlay');
const btnClose=document.querySelector('.close_modal_window');
const btnModal=document.querySelector('.btn_show_rules');

btnModal.addEventListener('click', function()
{
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

const addClass= function()
{
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnClose.addEventListener('click', addClass);

overlay.addEventListener('click', addClass);

document.addEventListener('keydown', function(e){
  if(e.key==='Escape' && (!modalWindow.classList.contains('hidden')))
  {
    addClass();
  }
});
//логика игрушки

//Элементы
const score0Elem = document.getElementById('score_0');
const score1Elem = document.getElementById('score_1');

const currentScoreElem0 = document.getElementById('current_0');
const currentScoreElem1 = document.getElementById('current_1');

const diceElem = document.querySelector('.dice');

const bntRoll = document.querySelector('.btn_roll');
const bntNew = document.querySelector('.btn_new');
const bntHold = document.querySelector('.btn_hold');

const player0Elem = document.querySelector('.player_0');
const player1Elem = document.querySelector('.player_1');

let totalScore,
    currentScore,
    activePlayer,
    gameStatus;
//инициализация
const initGame = function(){
  totalScore=[0, 0]
  currentScore = 0;
  activePlayer = 0;
  gameStatus = true;

  score0Elem.textContent=0;
  score1Elem.textContent=0;

  currentScoreElem0.textContent = 0;
  currentScoreElem1.textContent = 0;
  
  player0Elem.classList.remove('player_winner');
  player1Elem.classList.remove('player_winner');
  player0Elem.classList.remove('player_active');
  player1Elem.classList.remove('player_active');
  player0Elem.classList.add('player_active');
  diceElem.classList.add('hidden');
}

initGame();

const switchActivePlayer=function(){
  currentScore = 0;
  document.getElementById(`current_${activePlayer}`).textContent=0;
  activePlayer = activePlayer === 0 ? 1:0;
  player0Elem.classList.toggle('player_active');//добавление при отсутсвии и удалениее и присутствии
  player1Elem.classList.toggle('player_active');
};
//Rollim

bntRoll.addEventListener('click', function() {
  if(gameStatus)
  {
    const diceNumb=Math.trunc(Math.random()*6)+1;

    diceElem.classList.remove('hidden');
    diceElem.src = `img/dice${diceNumb}.png`

    if(diceNumb != 1)
    {
      currentScore+=diceNumb;

      document.getElementById(`current_${activePlayer}`).textContent=currentScore;
    }
    else{
      switchActivePlayer();
    }
  }
});

bntHold.addEventListener('click', function(){
  if(gameStatus)
  {
    totalScore[activePlayer]+=currentScore;
    document.getElementById(`score_${activePlayer}`).textContent=totalScore[activePlayer];

    if(totalScore[activePlayer]>=100)
    {
      gameStatus =false;
      document.querySelector(`.player_${activePlayer}`).classList.add('player_winner');
      document.querySelector(`.player_${activePlayer}`).classList.remove('player_active');
    }

    switchActivePlayer();
  }
});

bntNew.addEventListener('click', function(){
  initGame();
});