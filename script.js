let total = 0;
let bumper = "0";
let operator;

const screen = document.querySelector('.screen');

function Calculate(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = bumper;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            bumper = '0';    
            total = 0;
            break;
        case '=':
            if(operator === null){
                return
            }
            flushOperation(parseInt(bumper));
            operator = null;
            bumper = total;
            total = 0;  
            break;
        case '←':
            if(bumper.length === 1){
                bumper = '0';
            }else{
                bumper = bumper.substring(0, bumper.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(bumper === '0'){
        return;
    }

    const intBumper = parseInt(bumper);

    if(total === 0){
        total = intBumper;
    }else{
        flushOperation(intBumper);
    }
    operator = symbol;
    bumper = '0';
}

function flushOperation(intBumper){
    if(operator === '+'){
        total += intBumper;
    }else if(operator === '−'){
        total -= intBumper;
    }else if(operator === '×'){
        total *= intBumper;
    }else if(operator === '÷'){
        total /= intBumper;
    }
}

function handleNumber(numberString){
    if(bumper === '0'){
        bumper = numberString;
    }else{
        bumper += numberString;
    }
}

function init(){
    document.querySelector('.calcbut').addEventListener('click', function(event){
        Calculate(event.target.innerText);
    })
}

init();