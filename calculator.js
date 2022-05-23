let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)){
        //not number
        handleSymbol(value);
    }else {
        // number
        handleNumber(value);
    }
    screen.innerText = buffer;
}
    // handles the symbols
function handleSymbol(symbol) {
    if(symbol === 'C'){
        buffer = '0';
        runningTotal = 0;
    }
}
    // handles the numbers
function handleNumber(numberString) {
    // choosing between different operators
    switch(value) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
        break;
        case '+':
        case '-':
        case '&times':
        case '&divide':
            handleMath(symbol);
        break; 
    }
}
function handleMath() {
    if(buffer === '0'){
        // do nothing return statement
        return
    }
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0){
        // output buffer current values
        runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer)
    }
    previousOperator = symbol;

    buffer = '0';
}

function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function(event) {
            buttonClick(event.target.innerText);
        })
}

init();