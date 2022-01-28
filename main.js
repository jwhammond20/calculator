let currentInput = "";
let lastInput = "";
let operator = "";


let operation = document.querySelector('.operator');
let input = document.querySelector('.current-input');
let last = document.querySelector('.last-input');
let buttons = document.querySelectorAll('button');


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
            operation.innerHTML = "x";
            operator = "x";
        } else {
            operation.innerHTML = "x";
            operator = "x";
            multiply();
        }
    }
    else if (button.value === "divide") {
        if (operator !== "") {
            equal();
            operation.innerHTML = "/";
            operator = "/";
        } else {
            operation.innerHTML = "/";
            operator = "/";
            divide();
        }
    }else if (button.value === "minus") {
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
            currentInput = parseFloat(currentInput) / 100;
        }
    } else {
        currentInput += button.value;
        showValues();
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
        lastInput = total;
        currentInput = "";
        showValues();
    }
}

function subtract() {
    if (currentInput === "") {
        return
    } else if (lastInput === "") {
        lastInput = currentInput;
        currentInput = "";
        showValues();
    } else {
        total = parseFloat(lastInput) - parseFloat(currentInput);
        lastInput = total;
        currentInput = "";
        showValues();
    }
}

function equal() {
    if (operator === "+") {
        sum();
    } else if (operator === "x") {
        multiply();
    } else if (operator === "-") {
        subtract();
    } else if (operator === "/") {
        divide();
    }
    operator = "";
    showValues();
}

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
        lastInput = product;
        currentInput = "";
        showValues();
    }
}

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
        lastInput = product;
        currentInput = "";
        showValues();
    }
}


function negative() {
    if (currentInput === "") {
        return
    } else {
        let negNum = `-${currentInput}`
        currentInput = negNum;
        showValues();
    }
}

// function percent() 


function showValues() {
    last.innerHTML = `<h3>${lastInput}</h3>`;
    input.innerHTML = `<h1>${currentInput}</h1>`
    operation.innerHTML = operator;
}

function resetAll() {
    currentInput = "";
    lastInput = "";
    operator = "";
    showValues();
}

function deleteLast() {
    if (currentInput > 0) {
        let newValue = currentInput.slice(0, -1);
        currentInput = newValue;
        showValues();
    } else if (currentInput < 0 || currentInput === "-") {
        console.log("works")
        let strNum = currentInput.toString();
        let newValue = strNum.slice(0, -1);
        currentInput = newValue;
        showValues();
    } else if (currentInput === "") {
        console.log("it works");
        operator = "";
        showValues();
    }
}



buttons.forEach(button => {
    button.addEventListener("click", () => {
        logInput(button)
    });
})