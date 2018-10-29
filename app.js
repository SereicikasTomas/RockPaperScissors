let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const result = document.querySelector('.result > h2');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');
const smallUser = 'user'.fontsize(3);
const smallComp = 'comp'.fontsize(3);

function computerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random()* choices.length);
    return choices[randomNum];
}

function convert(letter) {
    return letter == 'r'? 'Rock': letter == 'p'? 'Paper' :'Scissors';
}

function win(user, computer) {
    const selec = document.getElementById(user);
    userScore ++;
    userScore_span.innerHTML = userScore;
    result.innerHTML = `${convert(user)}${smallUser} beats ${convert(computer)}${smallComp}. You win!`;
    selec.classList.add('win-glow');
    setTimeout(() => selec.classList.remove('win-glow') , 1000);
}

function lose(user, computer) {
    const selec = document.getElementById(user);
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${convert(computer)}${smallComp} beats ${convert(user)}${smallUser}. You lose!`;
    selec.classList.add('lose-glow');
    setTimeout(() => selec.classList.remove('lose-glow') , 1000);
}

function draw(user) {
    const selec = document.getElementById(user);
    result.innerHTML = 'It`s a draw!';
    selec.classList.add('tie-glow');
    setTimeout(() => selec.classList.remove('tie-glow') , 1000);
}

function game(userChoice){
    const compChoice = computerChoice();
    const dec = userChoice+compChoice;
    dec == 'rs' || dec == 'pr' || dec == 'sp'? win(userChoice, compChoice) :
    dec == 'sr' || dec == 'rp' || dec == 'ps'? lose(userChoice, compChoice) : draw(userChoice);
}

function main() {
    rock.addEventListener('click', () => {
        game('r');
    });

    paper.addEventListener('click', () => {
        game('p');
    });

    scissors.addEventListener('click', () => {
        game('s');
    });
}

main();
