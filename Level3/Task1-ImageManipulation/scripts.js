// Function to open the modal and display the clicked image
function openModal(imgSrc) {
 var modal = document.getElementById("myModal");
 var modalImg = document.getElementById("modalImg");
 modal.style.display = "block";
 modalImg.src = imgSrc;
}

// Function to close the modal
function closeModal() {
 var modal = document.getElementById("myModal");
 modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
 var modal = document.getElementById("myModal");
 if (event.target == modal) {
  modal.style.display = "none";
 }
};
