// Guessing Game : 
// - Users enters a max & then tries to guess a random generated numberrs between 1 to max. 

const max  = prompt("enter the max number"); 

const random = Math.floor(Math.random() * max ) + 1;

let guess = prompt("guess the number"); 

while(true){
    if(guess == "quit"){
        console.log("user quit"); 
        break; 
    }

    if(guess == random){
        console.log("You are right! congrats!! random number was", random); 
        break;
    }else if (guess < random) {
        guess = prompt("your guess was too small. please tru agaim"); 
    }else{
        guess = prompt("your guess too large. please try again"); 
    }
    
    // {
    //     guess = prompt("your guess was wrong. please try again"); 
    // }
    
}
