// 'use strict';
// const titl1 = document.querySelector('.message');
// console.log(titl1);// here, (this will print all the line of class element),
// that is , <p class="message">Start guessing...</p> will print on the web page

// here ,(textContent):- will print only the text content of the class element
// print:- Start guessing...(only text Content)
// console.log(titl);

// const titl = document.querySelector('.message').textContent = "🎉 Correct Number!";



let secretNumber = Math.trunc(Math.random()*20 +1);
let heart = ['💎','💎','💎','💎','💎'];
let score = 20;
const p = document.querySelector('.check');
document.querySelector('span.live').textContent = heart;
p.addEventListener('click', ()=>{
    const guessValue = Number(document.querySelector('.guess').value);
    // here, document.querySelector() will return    string type, in order to change it's type as number we use Number function.
    // console.log(guessValue);
    // console.log(typeof guessValue);


    // when there is no input.
    if (!guessValue) {
        document.querySelector('.message').textContent = '🧠😶 No Number!';

    // when player wins the game.
    } else if (guessValue === secretNumber) {
        document.querySelector('.message').textContent = '🤩🎉 You Won!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('span.highscore').textContent = (heart.length)*500*score;

        

        
       
        
    // when player's guess is too high.
    }else if (guessValue > secretNumber) {
        if (score >= 1) {
            document.querySelector('.message').textContent = '📈 Too High!';
            document.querySelector('.score').textContent = score;
            heart.pop();
            
            document.querySelector('span.highscore').textContent = (heart.length)*500*score;
            score--;
        } else {
            document.querySelector('.message').textContent = '😭Game is Over!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('span.highscore').textContent = (heart.length)*500*score;
        }


    // when player's guess is too low.    
    } else if ( guessValue < secretNumber) {
        if (score >= 1) {
            document.querySelector('.message').textContent = '📉 Too Low!';
            document.querySelector('.score').textContent = score;
            heart.pop();
            score--;
            document.querySelector('span.highscore').textContent = 500*score;
        } else {
            document.querySelector('.message').textContent = '😭Game is Over!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('span.highscore').textContent = 500*score;
        }

    }
    

});



// when player play again.

const btnAgain = document.querySelector('.again');

btnAgain.addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20 +1);
    score = 20;
    document.querySelector('span.live').textContent = heart;
    document.querySelector('.message').textContent = 'Start guessing....';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('span.highscore').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


    

});

