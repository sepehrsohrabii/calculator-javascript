let x = 0

const onLoad = () => {
    console.log('onLoad')
    handleUpdateScreen(x)
}

const pressNumber = (number) => {
    x = x*10 + number
    handleUpdateScreen(x)
}

const handleUpdateScreen = (newNumber) => {
    document.getElementById('screen').innerHTML = newNumber
}