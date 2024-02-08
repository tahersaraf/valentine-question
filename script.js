function answerYes() {
  // Redirect to the new page when "Yes" button is clicked
  window.location.href = "gif-page.html";
}

function answerNo() {
  const noButton = document.getElementById("noButton");

  const maxX = window.innerWidth - noButton.clientWidth;
  const maxY = window.innerHeight - noButton.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Set new position
  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";

  // Define an array of different phrases
  const phrases = [
    "Are you sure?",
    "Think again?",
    "Seriously?",
    "Really?",
    "Please say yes 🥺",
    "Sure?",
  ];

  // Get a random phrase from the array
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const newText = phrases[randomIndex];

  // Set new text
  noButton.textContent = newText;

  // // Set a timeout to revert the button to its original position after 10 seconds (adjust as needed)
  // setTimeout(() => {
  //   noButton.style.left = "";
  //   noButton.style.top = "";
  //   noButton.style.position = "";
  // }, 5000);
}