const bootLogs = [
  "[0.0001] Booting up secure environment...",
  "[0.0056] Initializing cybersecurity protocols...",
  "[0.0113] Verifying system integrity...",
  "[0.0152] Authenticating system components...",
  "[0.0214] Establishing secure connection...",
  "[0.0301] Launching secure shell environment...",
  "[0.0412] System secure.",
  "[0.0501] Access granted.",
  "[0.0601] Welcome.",
  "[0.0713] Checking hardware components...",
  "[0.0832] Initializing network adapters...",
  "[0.0910] Detecting external devices...",
  "[0.1005] Enabling firewall protection...",
  "[0.1102] Loading system drivers...",
  "[0.1203] Verifying user permissions...",
  "[0.1307] Encrypting user data in transit...",
  "[0.1401] Running integrity check on system files...",
  "[0.1508] System memory check complete...",
  "[0.1620] Authenticating network credentials...",
  "[0.1703] Starting background services...",
  "[0.1824] Syncing time with global NTP servers...",
  "[0.1931] Secure VPN tunnel established...",
  "[0.2050] Launching primary applications...",
  "[0.2135] Enforcing endpoint protection policies...",
  "[0.2201] Finalizing system boot sequence...",
  "[0.2304] Ready to connect to remote servers...",
  "[0.2408] Waiting for user input...",
  "[0.2520] Scanning for potential security vulnerabilities...",
  "[0.2634] Two-factor authentication enabled...",
  "[0.2751] Verifying secure connection integrity...",
  "[0.2863] Ensuring zero-trust network architecture...",
  "[0.2982] Security protocols validated. All clear.",
  "[0.3094] User session encrypted.",
  "[0.3205] Secure access granted. Your data is protected.",
  "[0.3307] All systems operational.",
  "[0.3401] User is safe to connect. Ready to engage."
];


let logIndex = 0;
const bootLogElement = document.getElementById("boot-log");
const continueButton = document.getElementById("continue-button");

function showLogEntry() {
  if (logIndex < bootLogs.length) {
      bootLogElement.textContent += bootLogs[logIndex] + "\n";
      logIndex++;
      setTimeout(showLogEntry, 200); // Delay of 0.5 seconds between each entry
  } else {
      setTimeout(() => {
          continueButton.classList.remove("hidden"); // Show the continue button
      }, 500); // Delay after the boot log before showing the continue button
  }
}

// Start showing the boot log when the page loads
window.onload = showLogEntry;

// Add event listener for the continue button
continueButton.addEventListener('click', function() {
  // Hide the boot screen and button
  document.getElementById("boot-screen").style.display = "none";
  // Allow scrolling and show the main content
  document.body.style.overflow = "auto"; // Enable scrolling
  document.getElementById("main-content").classList.remove("hidden"); // Show the main content
});