var result = document.getElementById("result");

let memory = 0;

function appendValue(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function clearLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

document.addEventListener("keydown", function() {
    var key = event.key;

    if(!isNaN(key)) {
        appendValue(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        clearLast();
    } else if (key === 'Escape') {
        clearResult();
    }
});

function memoryAdd() {
    if (result.value) {
        memory += parseFloat(result.value);
    }
}

function memorySubtract() {
    if (result.value) {
        memory -= parseFloat(result.value);
    }
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    result.value = memory;
}