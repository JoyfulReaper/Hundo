// Get the values from the Page
// Entry point - Controller function
function getValues() {

    // Get values from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // Parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // Call generateNumbers
        let numbers = generateNumbers(startValue, endValue);

        // Call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers")
    }
}

// Generate numbers from startValue to endValue
// Logic function
function generateNumbers(startValue, endValue) {

    let numbers = [];

    // Get all numbers from start to end
    for (let index = startValue; index <= endValue; index++) {
        // Execute in a loop until index = endValue
        numbers.push(index);
    }

    return numbers;
}

// Display the numbers and mark even numbers in bold
// Display/view function
function displayNumbers(numbers) {
    
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let number = numbers[index];
        let className = "even";
        
        if(number % 2 == 0)
        {
            className = "even";
        } else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}