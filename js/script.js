document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
  
        // Update accessibility
        const expanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !expanded);
      });
  
      // Close menu on nav link click
      const links = navLinks.querySelectorAll("a");
      links.forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          hamburger.setAttribute("aria-expanded", "false");
          /* <p>Developed by Vijay shikhre</p> --- */

        });
      });
    }
  
    // Typing effect
    const text = "Securing Tomorrow, Today !";
    const speed = 100;
    let index = 0;
  
    function typeWriter() {
      const typedTextElement = document.getElementById("typed-text");
      if (!typedTextElement) return;
  
      if (index < text.length) {
        typedTextElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
  
    window.addEventListener("load", typeWriter);
  
    // Scroll effect
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
      }
    });
  });
  


  /* <p>Developed by Vijay shikhre</p> --- */
