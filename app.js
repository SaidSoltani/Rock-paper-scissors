let userScore = 0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p= document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div= document.getElementById("s");

function getComputerChoice(){
  const choices= ['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter){
  if (letter === "r") return "Stein";
  if (letter === "p") return "Papier";
  return "Schere";
}

function win(userChoice, comoputerChoic ){
  const smallUserWord = "Ilia".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} schlägt ${convertToWord(comoputerChoic)}${smallCompWord} .Du hast gewonnen!\u{1F61C} `;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice , comoputerChoic){
  const smallUserWord = "Ilia".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} verliert gegen  ${convertToWord(comoputerChoic)}${smallCompWord} . Du hast verloren!\u{1F4A9} `;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice,comoputerChoic){
  const smallUserWord = "Ilia".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} ist gleich ${convertToWord(comoputerChoic)}${smallCompWord} .Unenschieden!😏 `;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}

function game(userChoice){
  const comoputerChoice = getComputerChoice();
  switch (userChoice + comoputerChoice) {
    case "rs":
      case "pr":
      case "sp":
      win(userChoice, comoputerChoice);
        break;
case "rp":
  case "ps":
  case "sr ":
    lose(userChoice, comoputerChoice);
    break;
case "rr":
  case "pp":
    case "ss":
      draw(userChoice, comoputerChoice);
      break;
  }


}
function main (){
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click',() => game("p"));
  scissors_div.addEventListener('click',() =>game("s"));
}
  main();
