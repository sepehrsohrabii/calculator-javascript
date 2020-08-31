let x = 0
let y = 0
let dot = false

let operator = null

const onLoad = () => {
    console.log('onLoad')
    handleUpdateScreen(x)
}

const pressNumber = (number) => {
    if (operator){
        if (dot){
            y = Number(`${y}${number}` )
        } else{
            y = y * 10 + number
        }
        handleUpdateScreen(y)
    } else {
        if (dot) {
            x = Number(`${x}${number}`)
        } else {
            x = x * 10 + number
        }
        handleUpdateScreen(x)
    }
}

const pressDot = () => {
    dot = true
    if (operator) {
        y = `${y}.`
    }else{
        x = `${x}.`
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
    result = parseFloat(result.toPrecision(12))

    x = result;
    y = 0;
    handleUpdateScreen(x)
    handleClearOperatorButtons()
    operator = null
}