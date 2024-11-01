let buffer = '0'
let runningTotal = 0;
let previousOperator;
const screen = document.querySelector('.screen')

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
    rerender()
}

function handleNumber(number) {
    if (buffer === '0') {
        buffer = number
    } else {
        buffer += number
    }
}

function handleMath(value) {
    if (buffer === '0') {
        // do nothing
        return;
    }

    const intBuffer = parseInt(buffer)
    if (runningTotal === 0) {
        runningTotal = intBuffer
    } else {
        flushOperation(intBuffer)
    }
    previousOperator = value
    buffer = '0'
    console.log(runningTotal)
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer
    }
    else if (previousOperator === '×') {
        runningTotal *= intBuffer
    }
    else if (previousOperator === '÷') {
        runningTotal /= intBuffer
    }
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0'
            break;
        case '=':
            if (previousOperator === null) {
                // need two numbers to do math
                return;
            }
            flushOperation(parseInt(buffer));

            previousOperator = null
            buffer = " " + runningTotal // adding the empty string will help maintain our buffer as a string. Whatever the first thing is, it's gong to convert everything else behind it into this
            runningTotal = 0
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0'
            } else
                buffer = buffer.substring(0, buffer.length - 1)
            break;
        case '+':
        case '-':
        case '÷':
        case '×':
            handleMath(symbol)
            break;
    }
}

function init() {
    document
        .querySelector('.calc-buttons')
        .addEventListener("click", function (event) {
            buttonClick(event.target.innerText)
        })
}

function rerender() {
    screen.innerText = buffer
}

init()

