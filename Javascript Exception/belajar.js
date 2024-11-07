// Materi Callback

// function myFirst(){
//     myDisplayer("Good Bye");
// }

// function mySecond(callback) {
//     myDisplayer("Hello");
//     callback();
// }

// function myDisplayer(message) {
//     console.log(message);
// }

// mySecond(myFirst);

// Materi Set Tim Out
// console.log("Paragraft 1");
// setTimeout(() => {
//     console.log("Paragraft 2");
// }, 4000);
// console.log("Paragraft 3");
// console.log("Paragraft 4");
// console.log("Paragraft 5");
// console.log("Paragraft 6");


// Materi Set Interval
// function setTime(){
//     const header = document.getElementById("header");
//     header.textContent = new Date().toString();
// }

// setInterval(setTime, 1000);
// console.log("Program Finish");

// case 
function validateNumber(value) {
    // Remove any spaces and replace commas with dots for number parsing
    value = value.trim().replace(',', '.');
    return !isNaN(value) && value !== '' ? Number(value) : false;
}

function divide() {
    const numeratorInput = document.getElementById('numerator').value;
    const denominatorInput = document.getElementById('denominator').value;
    const resultDiv = document.getElementById('result');
    const numeratorElem = document.getElementById('numerator');
    const denominatorElem = document.getElementById('denominator');

    // Reset classes
    resultDiv.className = '';
    resultDiv.classList.add('hidden');
    numeratorElem.classList.remove('error', 'shake');
    denominatorElem.classList.remove('error', 'shake');

    try {
        // Check if inputs are empty
        if (!numeratorInput || !denominatorInput) {
            throw new Error('Please enter both numbers 📝');
        }

        // Validate if inputs are numbers
        const numerator = validateNumber(numeratorInput);
        const denominator = validateNumber(denominatorInput);

        if (numerator === false || denominator === false) {
            // Add visual feedback
            if (numerator === false) {
                numeratorElem.classList.add('error', 'shake');
            }
            if (denominator === false) {
                denominatorElem.classList.add('error', 'shake');
            }
            throw new Error('Please enter valid numbers only 🔢');
        }

        // Check for division by zero
        if (denominator === 0) {
            denominatorElem.classList.add('error', 'shake');
            throw new Error('Cannot divide by zero! 🚫');
        }

        // Perform division
        const result = numerator / denominator;

        // Check if result is a finite number
        if (!isFinite(result)) {
            throw new Error('Result is not a valid number ⚠️');
        }

        // Format result to maximum 4 decimal places
        const formattedResult = Number(result.toFixed(4));

        // Display success result
        resultDiv.innerHTML = `
            <span class="emoji">🎉</span>
            Result: ${formattedResult}
            <span class="emoji">✨</span>
        `;
        resultDiv.classList.add('success', 'show-result');
    } catch (error) {
        // Display error message
        resultDiv.innerHTML = `
            <span class="emoji">⚠️</span>
            ${error.message}
        `;
        resultDiv.classList.add('error', 'show-result');
    }

    resultDiv.classList.remove('hidden');

    // Remove shake animation after it completes
    setTimeout(() => {
        numeratorElem.classList.remove('shake');
        denominatorElem.classList.remove('shake');
    }, 300);
}