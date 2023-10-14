let display = document.getElementById('display');
let input = '';
let result = 0;

function appendToDisplay(value) {
    input += value;
    display.value = input;
}

function clearDisplay() {
    input = '';
    result = 0;
    display.value = input;
}

function calculate() {
    try {
        result = eval(input);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}