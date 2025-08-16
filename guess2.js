// Number Guessing game 2

let final_text1 = document.getElementById("final_text1");
let final_text2 = document.getElementById("final_text2");
let final_text3 = document.getElementById("final_text3"); // winner display text

const min = 1;
const max = 100;
const answer1 = Math.floor(Math.random() * (max - min + 1)) + min;
const answer2 = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts1 = 0;
let attempts2 = 0;


let running = true;


player1done = false;
player2done = false;


const player1 = localStorage.getItem('player1') || "Player 1";  // this means give me whatever is stored under "player1"
const player2 = localStorage.getItem('player2') || "Player 2";

document.getElementById("label1").textContent = player1;
document.getElementById("label2").textContent = player2;


//  PLAYER 1 

document.getElementById("button1").onclick = function(){
    
    if(!running || player1done == true) return; // stop if game is over or player 1 already guessed

    myinput1 = document.getElementById("input1").value;
    myinput1 = Number(myinput1);
    
    if(myinput1 > 100 || myinput1 < 0){ // checking if the input is within the range
        final_text1.textContent = "Enter a number between 1 - 100";
    }
    else{ //if the input IS WITHIN RANGE then do this:
        if(myinput1 > answer1){
            final_text1.textContent = "Too High! try again";
            attempts1++;
            attempts_display_function1()  // a function i made so that the NO. OF ATTEMPTS can be DISPLAYED
        }
        else if(myinput1 < answer1){
            final_text1.textContent = "Too Low! try again";
            attempts1++;
            attempts_display_function1()
        }
        else{
            final_text1.textContent = `Congrats! the answer was ${answer1} and you guessed it in ${attempts1} attempts!`;
            player1done = true;
            checkIfGameOver();
        } 
    }

 
}

// PLAYER 2

document.getElementById("button2").onclick = function(){
    if(!running || player2done == true) return; // stop if game is over or player 2 already guessed

    myinput2 = document.getElementById("input2").value;
    myinput2 = Number(myinput2);

    if(myinput2 > 100 || myinput2 < 0){ // checking if the input is within the range
        final_text1.textContent = "Enter a number between 1 - 100";
    }
    else{ //if the input IS WITHIN RANGE then do this:
        if(myinput2 > answer2){
            final_text2.textContent = "Too High! try again";   
            attempts2++;
            attempts_display_function2()
        }
        else if(myinput2 < answer2){
            final_text2.textContent = "Too Low! try again";
            attempts2++;
            attempts_display_function2()
        }
        else{
            final_text2.textContent = `Congrats! the answer was ${answer2} and you guessed it in ${attempts2} attempts!`;
            player2done = true;
            checkIfGameOver();    // this is FUNCTION, we can call it anywhere in the program
        }  
    }

 
}

// ATTEMPTS COUNTER
const attempts_count1 = document.getElementById("attempts_count1");
const attempts_count2 = document.getElementById("attempts_count2");

function attempts_display_function1(){
    attempts_count1.textContent = attempts1;
}
function attempts_display_function2(){
    attempts_count2.textContent = attempts2;
}


// FINAL DISPLAY 


function checkIfGameOver(){
    if(player1done && player2done){
        running = false;
        
        if(attempts1 < attempts2){
            final_text3.textContent = `${player1} is the WINNER!`;
        }
        else if(attempts2 < attempts1){
            final_text3.textContent = `${player2} is the WINNER!`;
        }
        else{
            final_text3.textContent = "It's a TIE!";
        }
    }
}
console.log(answer1 , answer2);