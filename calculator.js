let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

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
    // choosing between different operators
    switch(symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
        break;
        case '=':
            if(previousOperator === null){
                    // need two number to do math
                    return; 
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
        break; 
    }
}
    // handles the numbers
function handleNumber(numberString) {
    if(buffer === '0'){
        buffer = numberString;
    }else {
        buffer += numberString;
    }  
}

function handleMath() {
    if(buffer === '0'){
        // do nothing return statement
        return;
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

function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runningTotal += intBuffer;
    }else if(previousOperator === '-'){
        runningTotal -= intBuffer;
    }else if(previousOperator === '×'){
        runningTotal *= intBuffer;
    }else{
        runningTotal /= intBuffer;
    }
}

function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function(event) {
            buttonClick(event.target.innerText);
        })
}

init();