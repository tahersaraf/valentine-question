yesButton.onclick = function answerYes() {
  // Redirect to the new page when "Yes" button is clicked
  window.location.href = "gif-page.html";
};
let activityTimer; 
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  noButton.onclick = function answerNo() {
    const noButton = document.getElementById("noButton");

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
  };
} else {
  noButton.onmouseover = function answerNo() {
    const noButton = document.getElementById("noButton");

    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.transition = 'left 0.5s ease-out, top 0.5s ease-out';
    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
  };

  clearTimeout(activityTimer);
  activityTimer = setTimeout(resetButtonPosition, 5000);

}


function resetButtonPosition() {
  const noButton = document.getElementById('noButton');
  noButton.style.transition = ''; 
  noButton.style.position = '';
  noButton.style.left = '';
  noButton.style.top = '';
}

function handleUserActivity() {
  // Reset the activity timer whenever there's user activity
  clearTimeout(activityTimer);
  activityTimer = setTimeout(resetButtonPosition, 5000);
}

document.addEventListener("DOMContentLoaded", function() {

  resetButtonPosition();

  document.addEventListener('mousemove', handleUserActivity);
  document.addEventListener('keydown', handleUserActivity);
});
