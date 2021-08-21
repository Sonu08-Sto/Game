'use strict';

let secratenumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore=0;

const DisplayMessage = function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener
( 'click',function(){
    const number = Number(document.querySelector('.guess').value);
    
    if(number === secratenumber){
        DisplayMessage('Correct Answer');
        document.querySelector('.number').textContent=secratenumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(highscore < score){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
        
    }
    else if(!number){
        document.querySelector('.message').textContent='Not a valid Answer';
    }
    else if(number > secratenumber){
        if(score>0){
        document.querySelector('.message').textContent='Too High';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You Loss the Game';
        }
    }
    else{
        if(score>0){
         document.querySelector('.message').textContent='Too Low';
         score--;
         document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You Loss the Game';
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secratenumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent='start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').textContent='';
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});