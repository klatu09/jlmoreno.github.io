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
  }, 3000);
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
    setTimeout(showLogEntry, 100);
  } else {
    setTimeout(() => {
      continueButton.classList.remove("hidden");
      continueButton.style.display = "inline-block";
    }, 500);
  }
}

// Function to type the ASCII "Welcome" message
function typeWelcomeMessage() {
  const asciiWelcome = `


  ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
  ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
  ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
  ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
  ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
   ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
                                                                
  
                                                               
 
                                                                                  
  `;
  const preElement = document.getElementById('ascii-welcome'); // Target the placeholder element
  if (!preElement) {
    console.error("Element with ID 'ascii-welcome' not found.");
    return;
  }

  let index = 0;

  // Typing effect
  function typeCharacter() {
    if (index < asciiWelcome.length) {
      preElement.textContent += asciiWelcome[index];
      index++;
      setTimeout(typeCharacter, 20); // Adjust typing speed (15ms per character)
    }
  }

  // Clear the content and start typing
  preElement.textContent = ''; // Ensure the ASCII art is cleared before typing
  typeCharacter();
}

document.addEventListener('DOMContentLoaded', () => {
  const preElement = document.getElementById('ascii-welcome');
  if (preElement) {
    typeWelcomeMessage(); // Type the ASCII art immediately on page load
  }
  showTab('welcome'); // Set the default tab to "Welcome"

  // Add event listener for project titles
  const projectTitles = document.querySelectorAll('.project-title');

  projectTitles.forEach(title => {
    title.addEventListener('click', () => {
      const parent = title.parentElement;

      // Toggle the active class
      parent.classList.toggle('active');
    });
  });
});
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  // Hide all tabs
  tabs.forEach(tab => tab.classList.add('hidden'));

  // Remove 'active' class from all buttons
  buttons.forEach(btn => btn.classList.remove('active'));

  // Find the active tab and remove the 'hidden' class to display it
  const activeTab = document.getElementById(tabId);
  if (activeTab) activeTab.classList.remove('hidden');

  // Find the corresponding tab button and add the 'active' class to it
  const activeButton = Array.from(buttons).find(btn =>
    btn.getAttribute('onclick')?.includes(tabId)
  );
  if (activeButton) activeButton.classList.add('active');

  // Handle the "Welcome" tab specifically
  if (tabId === 'welcome') {
    const preElement = document.getElementById('ascii-welcome');
    if (preElement && preElement.textContent.trim() === '') {
      // Only type the ASCII art if it's not already typed
      typeWelcomeMessage();
    }
  }
}

// Typing effect for subtitle (looping)
const subtitleElement = document.getElementById("subtitle");
const subtitles = ["IT Professional", "IT Support Specialist", "Research Analyst", "Aspiring Cybersecurity Analyst", "IT Intern","Computer Science", "Tech Enthusiast", "Problem Solver", "Team Player", "Lifelong Learner","Driven by Curiosity, Passion", "Ready to Learn", "Ready to Contribute", "Ready to Grow"];
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
  showTab('welcome'); // Ensure the default tab is "Welcome"

  // Custom cursor
// Custom cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;

// Directly update the cursor position on mousemove
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Immediately set the cursor's position
  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
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

    // Typing Effect for Terminal Text
    const terminalText = `Hey there—stranger? No… stalker? Hopefully not. Recruiter? Yes, please!

I’m a Computer Science student at Saint Louis University, Baguio (Class of 2026) with 1.5 years of hands-on IT support and research experience. I’ve built a solid base in security, networking, and system administration—and thanks to certs like Google’s Cybersecurity courses, I’ve gained real experience with frameworks, SIEM, and SOAR tools too.

I passed the CompTIA Security+ on my first try, and I’m eyeing Network+, A+, and CySA+ next. Just need the right opportunity (and support!) to get there.

If you're after someone who’s curious, analytical, and just a little obsessed with digital puzzles—let’s talk. I’m ready to dive in and help make cool things happen in the digital world.`;

    const typedTextElement = document.getElementById("typed-text");
    let currentCharIndex = 0;

    function typeCharacter() {
      if (currentCharIndex < terminalText.length) {
        typedTextElement.textContent += terminalText[currentCharIndex];
        currentCharIndex++;
        setTimeout(typeCharacter, 60);
      }
    }

    typeCharacter();

    // Start subtitle typing effect after terminal text typing is complete
    setTimeout(() => {
      typeText(subtitles[currentIndex], 0, () => {});
    }, terminalText.length * 30 + 1000); // Wait until terminal text finishes before starting subtitle typing
  });
};