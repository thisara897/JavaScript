let adult = checkAge(21);

console.log(adult);

function checkAge(age){
   return age >= 18? true : false;
}


function checkWinner(win){
   win ? console.log("you win") : console.log("you lose");
}

checkWinner(false);