let x = 0
let y = 0

let operator = null

const onLoad = () => {
    console.log('onLoad')
    handleUpdateScreen(x)
}

const pressNumber = (number) => {
    if (operator){
        y = y * 10 + number
        handleUpdateScreen(y)
    }else {
        x = x*10 + number
        handleUpdateScreen(x)
    }
}

const handleUpdateScreen = (newNumber) => {
    document.getElementById('screen').innerHTML = newNumber
}

const pressOperator = (newOperator) => {
    operator = newOperator
    document.getElementById(newOperator).classList.add('active')
}

const handleClearOperatorButtons = () => {
    document.querySelectorAll('.operator').forEach((node) => {
        node.classList.remove('active')
    })
}

const handleClear = () => {
    x = 0;
    operator = null
    handleUpdateScreen(x)
    handleClearOperatorButtons();
}

const handleEval = () => {
    let result = 0;
    switch (operator) {
        case 'plus':
            result = x + y
            break;
        case 'minus':
            result = x - y
            break;
        case 'multiple':
            result = x * y
            break;
        case 'divide':
            result = x / y
            break;
    
        default:
            break;
    }

    x = result;
    y = 0;
    handleUpdateScreen(x)
    handleClearOperatorButtons()
    operator = null
}