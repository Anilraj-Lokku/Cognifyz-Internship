const colorButton = document.getElementById("colorButton");
const body = document.body;

colorButton.addEventListener("click", () => {
 const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
 body.style.backgroundColor = randomColor;
});
