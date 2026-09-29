// Get display
const display = document.getElementById("display");


// ===============================
// Add value to display
// ===============================

function appendValue(value) {
    display.value += value;
}


// ===============================
// Clear display
// ===============================

function clearDisplay() {
    display.value = "";
}


// ===============================
// Delete last character
// ===============================

function deleteLast() {
    display.value = display.value.slice(0, -1);
}


// ===============================
// Calculate result
// ===============================

function calculate() {

    try {

        let expression = display.value;

        // Percentage
        expression = expression.replace(
            /(\d+(?:\.\d+)?)%/g,
            "($1/100)"
        );

        display.value = eval(expression);

    } catch (error) {

        display.value = "Error";

    }
}


// ===============================
// Keyboard Support
// ===============================

document.addEventListener("keydown", function (event) {

    // Numbers
    if (
        event.key >= "0" &&
        event.key <= "9"
    ) {
        appendValue(event.key);
    }

    // Decimal
    else if (event.key === ".") {
        appendValue(".");
    }

    // Operators
    else if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/"
    ) {
        appendValue(event.key);
    }

    // Enter = Calculate
    else if (event.key === "Enter") {
        calculate();
    }

    // Backspace = Delete
    else if (event.key === "Backspace") {
        deleteLast();
    }

    // Escape = Clear
    else if (event.key === "Escape") {
        clearDisplay();
    }

});