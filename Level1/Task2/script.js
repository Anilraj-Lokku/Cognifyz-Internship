// Function to display greeting message along with current time
function displayGreeting() {
 // Get current date and time
 const now = new Date();
 const hours = now.getHours();
 const minutes = now.getMinutes();
 const timeOfDay = hours < 12 ? "AM" : "PM";

 // Convert hours to 12-hour format
 const displayHours = hours % 12 || 12;

 // Construct greeting message
 let greeting;
 if (hours < 12) {
  greeting = "Good morning!";
 } else if (hours < 18) {
  greeting = "Good afternoon!";
 } else {
  greeting = "Good evening!";
 }

 // Display greeting message along with current time in an alert box
 alert(
  `${greeting}\nCurrent time is ${displayHours}:${
   minutes < 10 ? "0" : ""
  }${minutes} ${timeOfDay}`
 );
}

// Add event listener to the button
document
 .getElementById("greetingButton")
 .addEventListener("click", displayGreeting);
