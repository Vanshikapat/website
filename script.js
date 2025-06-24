// Toggle navigation menu on mobile
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }
  
  // Show or hide contact information
  function showContact() {
    const contactInfo = document.getElementById("contactInfo");
    contactInfo.classList.toggle("hidden");
  }
  
  // Trigger download of resume
  function downloadCV() {
    window.open("cv.pdf", "_blank");
  }
  
  // Toggle light/dark mode
  document.getElementById("modeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  
    const icon = document.querySelector("#modeToggle i");
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-adjust");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-adjust");
    }
  });
  