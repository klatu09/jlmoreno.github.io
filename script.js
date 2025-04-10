

// Boot log messages
const bootLogs = [
  "[0.0001] Launching portfolio system...",
  "[0.0042] Authenticating guest session...",
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
  }, 5000);
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

// Typing effect for subtitle (looping)
const subtitleElement = document.getElementById("subtitle");
const subtitles = ["IT Professional", "IT Support Specialist", "Research Analyst", "Aspiring Cybersecurity Analyst", "Intern"];
let currentIndex = 0;

function typeText(text, i, callback) {
  if (i < text.length) {
    subtitleElement.textContent += text.charAt(i);
    setTimeout(() => typeText(text, i + 1, callback), 75); // Adjust speed of typing (100ms)
  } else {
    setTimeout(() => {
      subtitleElement.textContent = ''; // Clear the current text
      currentIndex = (currentIndex + 1) % subtitles.length; // Loop the index back to 0
      typeText(subtitles[currentIndex], 0, callback); // Start typing next subtitle
    }, 1000); // Wait 1 second before changing text
  }
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

  const hoverables = document.querySelectorAll("button, .tab-button, #continue-button, .status-button, .country-button, .nationality-button, .hire-button, .social-btn");

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

    // 🟩 Typing Effect for Terminal Text
    const terminalText = `Hey there! I’m a Computer Science student at Saint Louis University, Baguio (Class of 2026), and I’m all about diving deep into the world of IT! With 1.5 years of experience as an IT Support Specialist and Research Analyst, I’ve built a strong foundation in security, networks, IT infrastructure, and system administration. But don’t get me wrong—I’m just getting started and can’t wait to level up! I’m on the lookout for an internship in cybersecurity, network administration, system administration, or IT operations where I can bring my passion for security and hands-on experience to the table. When I’m not tackling CTF challenges, I’m gearing up with the CompTIA Security+ cert (yep, just got it!). Let’s just say, I’m excited to bring my skills to a team ready to make some magic happen!`;

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

    // 🟩 Start subtitle typing effect after terminal text typing is complete
    setTimeout(() => {
      typeText(subtitles[currentIndex], 0, () => {});
    }, terminalText.length * 30 + 1000); // Wait until terminal text finishes before starting subtitle typing
  });
};


