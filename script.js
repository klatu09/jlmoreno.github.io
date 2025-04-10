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
  "[0.0673] Interface polished. UX firewall active.",
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
          continueButton.style.display = "inline-block"; // Ensure the button is visible
      }, 500); // Delay after the boot log before showing the continue button
  }
}

// Function to show the content of the selected tab
function showTab(tabId) {
  // Hide all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
      content.classList.remove('active'); // Remove active class to hide content
      content.classList.add('hidden'); // Add hidden class to ensure they are not displayed
  });

  // Remove active class from all tab buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => {
      button.classList.remove('active'); // Remove active class from buttons
  });

  // Show the selected tab content
  const selectedContent = document.getElementById(tabId);
  selectedContent.classList.remove('hidden'); // Remove hidden class to show content
  selectedContent.classList.add('active'); // Ensure active class is added for display

  // Set the clicked button as active
  const activeButton = document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`);
  activeButton.classList.add('active'); // Add active class to the clicked button
}

// Show the About Me tab by default on page load
window.onload = () => {
  showLoadingMessage(); // Start the loading message
  showTab('about'); // Show the About Me tab by default

  // Add the custom cursor to the page
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  // Function to update the cursor position
  function updateCursorPosition(event) {
      cursor.style.left = `${event.pageX}px`;
      cursor.style.top = `${event.pageY}px`;
  }

  // Add event listener to update cursor position
  document.addEventListener('mousemove', updateCursorPosition);

  // Hide the default cursor
  document.body.style.cursor = 'none';

  // Reset the cursor position after the page loads
  updateCursorPosition({ pageX: window.innerWidth / 2, pageY: window.innerHeight / 2 });
};

// Add event listener for the continue button
continueButton.addEventListener('click', function() {
  // Hide the boot screen and button
  document.getElementById("boot-screen").style.display = "none";
  
  // Allow scrolling and show the main content
  document.body.style.overflow = "auto"; // Enable scrolling
  document.getElementById("main-content").classList.add("visible"); // Show the main content with fade-in effect
});

window.onload = () => {
  showLoadingMessage();
  showTab("about");

  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let isHovering = false;
  let hoverTarget = null;

  // Animate cursor position
  function animateCursor() {
    let dx = mouseX - cursorX;
    let dy = mouseY - cursorY;

    // Magnetic attraction on hover
    if (isHovering && hoverTarget) {
      const rect = hoverTarget.getBoundingClientRect();
      const targetX = rect.left + rect.width / 2;
      const targetY = rect.top + rect.height / 2;

      dx = (targetX - cursorX) * 0.15;
      dy = (targetY - cursorY) * 0.15;
    } else {
      dx *= 0.15;
      dy *= 0.15;
    }

    cursorX += dx;
    cursorY += dy;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Apply magnetic hover effect
  const hoverables = document.querySelectorAll("button, .tab-button, #continue-button");

  hoverables.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      isHovering = true;
      hoverTarget = el;
      cursor.classList.add("cursor-hovered");
    });

    el.addEventListener("mouseleave", () => {
      isHovering = false;
      hoverTarget = null;
      cursor.classList.remove("cursor-hovered");
    });
  });

  document.body.style.cursor = "none";
};
