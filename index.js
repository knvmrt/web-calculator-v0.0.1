var display = document.getElementById('display');
function clearDisplay() {
    if (display) {
        display.value = '';
    }
}
function deleteLast() {
    if (display) {
        display.value = display.value.slice(0, -1);
    }
}
function appendNumber(number) {
    if (display) {
        display.value += number;
    }
}
function appendOperator(operator) {
    if (display) {
        display.value += operator;
    }
}
function appendDot() {
    if (display && !display.value.includes('.')) {
        display.value += '.';
    }
}
function calculate() {
    if (display && display.value.includes('%')) {
        var displayValue = display.value;
        var parts = displayValue.split('%');
        var base = parseFloat(parts[0]);
        var percentage = parseFloat(parts[1]);
        if (!isNaN(base) && !isNaN(percentage)) {
            display.value = (base * (percentage / 100)).toString();
            return;
        }
    }
    try {
        if (display) {
            display.value = eval(display.value);
        }
    }
    catch (_a) {
        if (display) {
            display.value = 'Error';
        }
    }
}
