/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 

// create the variables that would be needed : scores, roundScore, activePlayer, dice;
let scores, roundScore, activePlayer, dice, gamePlaying;
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
init();
function init(){
  // scores = [0,0];
  // roundScore = 0;
  // activePlayer = 0;
  // gamePlaying = true;
  document.querySelector('#score-0').textContent = '0' ;
  document.querySelector('#score-1').textContent = '0' ;
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
};

function nextPlayer(){
  if(activePlayer === 0){
    roundScore = 0;
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('#current-'+ activePlayer).textContent = String(roundScore);
    activePlayer = 1;

  }else if( activePlayer === 1){
    roundScore = 0;
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('#current-'+ activePlayer).textContent = String(roundScore);
    activePlayer = 0;
  }
}

// player rolls the dice
document.querySelector('.btn-roll').addEventListener('click', () => {

  dice = Math.floor((Math.random() * 6) + 1);
  document.querySelector('.dice').src = `img/dice-${dice}.png`;
  document.querySelector('.dice').style.display = 'block';

  if(dice !== 1){
    roundScore += dice;
    document.querySelector('#current-'+ activePlayer).textContent = roundScore;
  }else{
    nextPlayer();
  }

});

// player clicks on the hold button
document.querySelector('.btn-hold').addEventListener('click', () => {

  scores[activePlayer] += roundScore;
  document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

  if(scores[activePlayer] >= 20){
    // console.log('won !');
    // document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('#name-'+activePlayer).classList.add('player-name');
    document.querySelector('#name-'+activePlayer).textContent = 'WINNER !';
    gamePlaying = false;
  }

  nextPlayer();
});

document.querySelector('.btn-new').addEventListener('click', () => {
  init();
  roundScore = 0;
  scores = [0,0]
  activePlayer = 0;

});




console.log(scores);
console.log(roundScore);
console.log(activePlayer);









// THINGS TO ADD TO THE GAME
// 1. IF THE USER CLICKS ON HOLD THEN IT SHOULD GO ALERT THE PLAYER AND NOT GO TO THE NEXT PLAYER INSTEAD THE PLAYER SHOULD HAVE A CHANCE TO PLAY AGAIN.
// 2. THERE SHOULD BE A LEADERBOARD WHERE THE OVERALL BEST PLAYER WOULD BE DISPLAYED IN THE PAGE FOR SCOREBOARD
// 3. USERS CAN LOGIN INTO SESSIONS TO ACCESS THEIR PERSONAL PROFILES AND ACHIEVEMENTS
// 4. A PLAYER LOSES HIS ENTIRE SCORE WHEN HE ROLLS TWO 6 IN A ROW. AFTER THAT, IT'S THE NEXT PLAYER'S TURN. (HINT: ALWAYS SAVE THE PREVIOUS DICE ROLL IN A SEPARATE VARIABLE)
// 5. ADD AN INPUT FIELD TO THE HTML WHERE THE PLAYERS CAN SET THE WINNING SCORE, SO THAT THEY CAN CHANGE THE PREDEFINED SCORE OF 100. (HINT: YOU CAN READ THAT VALUE WITH THE .VALUE PROPERTY IN JAVASCRIPT. THIS IS A GOOD OPPORTUNITY TO USE GOOGLE TO FIGURE THIS OUT  :)
// 6. ADD ANOTHER DICE TO THE GAME, SO THAT THERE ARE TWO DICES NOW. THE PLAYER LOOSES HIS CURRENT SCORE WHEN ONE OF THEM IS A 1.
// 7. MAKE THE GAME RESPONSIVE MOBILE, TABLET AND PC.
