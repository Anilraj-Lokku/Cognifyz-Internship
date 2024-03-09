// Function to add two numbers and display the result
function addNumbers() {
 // Get input values
 const num1 = parseFloat(document.getElementById("num1").value);
 const num2 = parseFloat(document.getElementById("num2").value);

 // Perform addition
 const sum = num1 + num2;

 // Display result
 document.getElementById("result").textContent = `Result: ${sum}`;
}

// Add event listener to the add button
document.getElementById("addButton").addEventListener("click", addNumbers);
