const durationInput = document.getElementById('userInput');
const startButton = document.querySelector('.timer button');
const countdownDisplay = document.getElementById('countDown');
const endTimeDisplay = document.getElementById('endTime');
let countdown;

// Add click event listener to start button
startButton.addEventListener('click', function () {
  startTimer(durationInput.value * 60);
});

function startTimer(duration) {
  const endTime = Date.now() + duration * 1000;
  clearInterval(countdown);
  countdown = setInterval(function () {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      countdownDisplay.textContent = "Countdown has ended!";
      endTimeDisplay.textContent = "";
      return;
    }
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    const endDateTime = new Date(endTime);
    const endHour = endDateTime.getHours();
    const endMinute = endDateTime.getMinutes();
    countdownDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    endTimeDisplay.textContent = `Ends at ${endHour}:${endMinute < 10 ? '0' : ''}${endMinute}`;
  }, 1000);
}

