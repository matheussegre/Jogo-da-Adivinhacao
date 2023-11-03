const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

const inputNumber = document.querySelector("#inputNumber");

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

const beginGame = btnTry.addEventListener('click', handleClick);
btnReset.addEventListener('click', handleReset);
document.addEventListener('keydown', (e) => {
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleReset();
    }else if(e.key == 'Enter' && screen2.classList.contains('hide')){
        emptyValidation();
        beginGame;
    }
})

function emptyValidation(){
    if(inputNumber.value == '') return alert('Escreva um número entre 0 e 10 para jogar')
}

function handleClick(event){
    event.preventDefault();

    emptyValidation();

    const number = Number(inputNumber.value);

    if(number < 0 || number > 10) return alert('O número escolhido deve estar entre 0 e 10.')

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()

        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }
    xAttempts++
}

function handleReset(){
    toggleScreen();
    xAttempts = 1;
    randomNumber = Math.round(Math.random() * 10);
    inputNumber.value = '';
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
