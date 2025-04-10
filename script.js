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
  }, 1000);
}

function showLogEntry() {
  if (logIndex < bootLogs.length) {
      const logMessage = document.createElement("div");
      logMessage.textContent = bootLogs[logIndex];

      if (logIndex === bootLogs.length - 1) {
          logMessage.style.color = "lime";
          logMessage.style.textShadow = "0 0 10px lime, 0 0 20px lime";
      } else {
          logMessage.style.color = "white";
      }

      bootLogElement.appendChild(logMessage);
      logIndex++;
      setTimeout(showLogEntry, 200);
  } else {
      setTimeout(() => {
          continueButton.classList.remove("hidden");
          continueButton.style.display = "inline-block";
      }, 500);
  }
}

// Function to show the content of the selected tab
function showTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
      content.classList.remove('active');
      content.classList.add('hidden');
  });

  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => {
      button.classList.remove('active');
  });

  const selectedContent = document.getElementById(tabId);
  selectedContent.classList.remove('hidden');
  selectedContent.classList.add('active');

  const activeButton = document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`);
  activeButton.classList.add('active');
}

// Initialize on page load
window.onload = () => {
  showLoadingMessage();
  showTab('about');

  // Custom cursor
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let isHovering = false;
  let hoverTarget = null;

  function animateCursor() {
    let dx = mouseX - cursorX;
    let dy = mouseY - cursorY;

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

  const hoverables = document.querySelectorAll("button, .tab-button, #continue-button,status-button, .country-button, .nationality-button, .hire-button");

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

  // Continue button click
  continueButton.addEventListener('click', function () {
    document.getElementById("boot-screen").style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("main-content").classList.add("visible");

    // 🟩 Typing Effect
    const terminalText = "I'm Jun Laurenz L. Moreno, a passionate cybersecurity professional with expertise in threat analysis, penetration testing, and digital forensics. I thrive on solving complex security challenges and stay ahead of emerging threats through continuous learning and hands-on experience. Whether through CTF competitions, personal projects, or industry training, I'm always refining my skills to deliver real-world, innovative solutions that protect systems and data. My goal is to combine technical expertise with clear communication to empower organizations in an ever-evolving digital world.";
    const typedTextElement = document.getElementById("typed-text");
    let currentCharIndex = 0;

    function typeCharacter() {
      if (currentCharIndex < terminalText.length) {
        typedTextElement.textContent += terminalText[currentCharIndex];
        currentCharIndex++;
        setTimeout(typeCharacter, 30);
      }
    }

    typeCharacter();
  });
};
