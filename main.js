let currentInput = "";
let lastInput = "";
let operator = "";
let history = "";

let operation = document.querySelector('.operator');
let input = document.querySelector('.current-input');
let last = document.querySelector('.last-input');
let buttons = document.querySelectorAll('button');
let log = document.querySelector('.history');


function logInput(button) {
    if (button.value === "delete") {
        deleteLast();
    } else if (button.value === "add") {
        if (operator !== "") {
            equal();
            operation.innerHTML = "+";
            operator = "+";
        } else {
            operation.innerHTML = "+";
            operator = "+";
            sum();
        }
    } else if (button.value === "clear") {
        resetAll();
    } else if (button.value === "multiply") {
        if (operator !== "") {
            equal();
            operation.innerHTML = "&#xd7;";
            operator = "&#xd7;";
        } else {
            operation.innerHTML = "&#xd7;";
            operator = "&#xd7;";
            multiply();
        }
    } else if (button.value === "divide") {
        if (operator !== "") {
            equal();
            operation.innerHTML = "&#xf7;";
            operator = "&#xf7;";
        } else {
            operation.innerHTML = "&#xf7;";
            operator = "&#xf7;";
            divide();
        }
    } else if (button.value === "minus") {
        if (operator !== "") {
            equal();
            operation.innerHTML = "-";
            operator = "-";
        } else {
            operation.innerHTML = "-";
            operator = "-";
            subtract();
        }
    } else if (button.value === "equal") {
        equal();
    } else if (button.value === "negative") {
        negative();
    } else if (button.value === "%") {
        if (currentInput === "") {
            return
        } else {
            currentInput += button.value;
            showValues();
            percent();
        }
    } else {
        currentInput += button.value;
        showValues();
    }
};

function percent() {
    if (operator === "+" && lastInput != "") {
        currentInput = ((parseFloat(currentInput) / 100) * parseFloat(lastInput));
    } else if (operator === "-" && lastInput != "") {
        currentInput = ((parseFloat(currentInput) / 100) * parseFloat(lastInput));
    } else if (operator === "&#xd7;") {
        currentInput = parseFloat(currentInput) / 100;
    } else if (operator === "&#xf7;" && lastInput != "") {
        currentInput = parseFloat(currentInput) / 100;
    } else {
        currentInput = parseFloat(currentInput) / 100;
    }
};

function sum() {
    if (currentInput === "") {
        return
    } else if (lastInput === "") {
        lastInput = currentInput;
        currentInput = "";
        showValues();
    } else {
        total = parseFloat(currentInput) + parseFloat(lastInput);
        history = `${lastInput} ${operator} ${currentInput} = ${total}`;
        logHistory();
        lastInput = total;
        currentInput = "";
        showValues();
    }
};

function subtract() {
    if (currentInput === "") {
        return
    } else if (lastInput === "") {
        lastInput = currentInput;
        currentInput = "";
        showValues();
    } else {
        total = parseFloat(lastInput) - parseFloat(currentInput);
        history = `${lastInput} ${operator} ${currentInput} = ${total}`;
        logHistory();
        lastInput = total;
        currentInput = "";
        showValues();
    }
};

function logHistory() {
    log.innerHTML += history + "<br/>";
    log.scrollTop = log.scrollHeight;
};


function equal() {
    if (operator === "+") {
        sum();
    } else if (operator === "&#xd7;") {
        multiply();
    } else if (operator === "-") {
        subtract();
    } else if (operator === "&#xf7;") {
        divide();
    }
    operator = "";
    showValues();
};

function multiply() {
    if (currentInput === "") {
        return
    } else if (lastInput === "") {
        lastInput = currentInput;
        currentInput = "";
        lastInput.toString();
        showValues();
    } else {
        product = parseFloat(currentInput) * parseFloat(lastInput);
        history = `${lastInput} ${operator} ${currentInput} = ${product}`;
        logHistory();
        lastInput = product;
        currentInput = "";
        showValues();
    }
};

function divide() {
    if (currentInput === "") {
        return
    } else if (lastInput === "") {
        lastInput = currentInput;
        currentInput = "";
        lastInput.toString();
        showValues();
    } else {
        product = parseFloat(lastInput) / parseFloat(currentInput);
        history = `${lastInput} ${operator} ${currentInput} = ${product}`;
        logHistory();
        lastInput = product;
        currentInput = "";
        showValues();
    }
};


function negative() {
    if (currentInput === "") {
        return
    } else {
        let negNum = `-${currentInput}`
        currentInput = negNum;
        showValues();
    }
};

function showValues() {
    last.innerHTML = `<h3>${lastInput}</h3>`;
    input.innerHTML = `<h1>${currentInput}</h1>`
    operation.innerHTML = operator;
};

function resetAll() {
    if (lastInput != "") {
        currentInput = "";
        lastInput = "";
        operator = "";
        showValues();
    } else {
        log.innerHTML = "";
        currentInput = "";
        operator = "";
        showValues();
    }
};

function deleteLast() {
    if (currentInput > 0) {
        let newValue = currentInput.slice(0, -1);
        currentInput = newValue;
        showValues();
    } else if (currentInput < 0 || currentInput === "-") {
        let strNum = currentInput.toString();
        let newValue = strNum.slice(0, -1);
        currentInput = newValue;
        showValues();
    } else if (currentInput === "") {
        operator = "";
        showValues();
    }
};



buttons.forEach(button => {
    button.addEventListener("click", () => {
        logInput(button)
    });
});

//dark mode toggle


let toggle = true;


function toggleHover() {
    var el1 = document.getElementById("style1"),
        el2 = document.getElementById("style2");
    if (toggle = toggle) {
        el1.disabled = "disabled";
        el2.disabled = undefined;
    } else {
        el2.disabled = "disabled";
        el1.disabled = undefined;
    }
}

document.getElementsByClassName("switch")[0].addEventListener("click", () => {
    if (toggle) {
        toggleHover();
    } else {
        toggleHover();
    }
    toggle = !toggle;
});