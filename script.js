// Boot log messages
const bootLogs = [
  "[0.0001] Launching portfolio system...",
  "[0.0042] Authenticating guest session... ✅",
  "[0.0085] Performing security scan... no threats found.",
  "[0.0123] Warming up defensive protocols... all systems green.",
  "[0.0176] Syncing cybersecurity certifications...",
  "[0.0231] Initializing real-world experience modules...",
  "[0.0304] Injecting hands-on Blue & Red Team skills...",
  "[0.0378] Compiling personal projects: Traceware, Limiter, more...",
  "[0.0450] Integrating TryHackMe progress and CTF achievements...",
  "[0.0524] Aligning content for recruiter visibility...",
  "[0.0599] Resume loaded. Contact channels secured.",
  "[0.0673] Interface polished. UX firewall active 😎",
  "[0.0732] Running integrity check... 100% verified.",
  "[0.0811] Encryption status: Strong. Identity: Authentic.",
  "[0.0888] Session environment is secure, smooth, and HR-friendly.",
  "[0.0956] Portfolio boot sequence complete.",
  "[0.1029] Welcome — I’m Jun Laurenz L. Moreno, A Cybersecurity Professional.",
  "[0.1103] Built this with code, secured it with care, and made it easy to explore.",
  "[0.1187] No jargon, no pressure — just skills, projects, and passion.",
  "[0.1254] You're cleared for full access. Take a look around — I'll handle the security. 🔐",
  "[0.1501] Ready to view my portfolio? \n \n \n \n \n Security is not a feature. It’s a mindset. \n- JL "
];

let logIndex = 0;
const bootLogElement = document.getElementById("boot-log");
const continueButton = document.getElementById("continue-button");

// Function to show the loading message
function showLoadingMessage() {
  bootLogElement.textContent = "Thank you for visiting my website; it means a lot! \n \n \n \nLoading... Please wait.";
  setTimeout(() => {
      bootLogElement.textContent = ""; // Clear the loading message
      showLogEntry(); // Start showing the boot logs
  }, 5000); // Show for 5 seconds
}

function showLogEntry() {
  if (logIndex < bootLogs.length) {
      const logMessage = document.createElement("div"); // Create a new div for each log message
      logMessage.textContent = bootLogs[logIndex];

      // Apply styles based on the log index
      if (logIndex === bootLogs.length - 1) {
          logMessage.style.color = "lime"; // Glowing green for the last message
          logMessage.style.textShadow = "0 0 10px lime, 0 0 20px lime"; // Glowing effect
      } else {
          logMessage.style.color = "white"; // White text for other messages
      }

      bootLogElement.appendChild(logMessage); // Append the new log message to the boot log
      logIndex++;
      setTimeout(showLogEntry, 200); // Delay of 0.2 seconds between each entry
  } else {
      setTimeout(() => {
          continueButton.classList.remove("hidden"); // Show the continue button
      }, 500); // Delay after the boot log before showing the continue button
  }
}

// Start showing the loading message when the page loads
window.onload = showLoadingMessage;

// Add event listener for the continue button
continueButton.addEventListener('click', function() {
  // Hide the boot screen and button
  document.getElementById("boot-screen").style.display = "none";
  // Allow scrolling and show the main content
  document.body.style.overflow = "auto"; // Enable scrolling
  document.getElementById("main-content").classList.remove("hidden"); // Show the main content
});

// Custom Cursor Functionality
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Flashlight effect
const flashlight = document.createElement('div');
flashlight.classList.add('flashlight');
document.body.appendChild(flashlight);

// Update cursor and flashlight position based on mouse movement
function update(e) {
  // Get X and Y coordinates from mouse or touch events
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  // Update CSS variables for cursor position
  document.documentElement.style.setProperty('--cursorX', x + 'px');
  document.documentElement.style.setProperty('--cursorY', y + 'px');

  // Update custom cursor position
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
  flashlight.style.left = `${x}px`;
  flashlight.style.top = `${y}px`;
}

// Add event listeners for mouse and touch movement
document.addEventListener('mousemove', update);
document.addEventListener('touchmove', update);

// Prevent default cursor and stick mouse to button
continueButton.addEventListener('mouseenter', () => {
  cursor.style.transition = 'none'; // Disable cursor transition
  cursor.style.left = `${continueButton.getBoundingClientRect().left + continueButton.offsetWidth / 2}px`;
  cursor.style.top = `${continueButton.getBoundingClientRect().top + continueButton.offsetHeight / 2}px`;
  document.body.style.cursor = 'none'; // Hide the default cursor
});

continueButton.addEventListener('mouseleave', () => {
  document.body.style.cursor = ''; // Restore the default cursor when leaving
});
