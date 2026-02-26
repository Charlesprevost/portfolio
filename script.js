// Scroll fluide si besoin
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

  document.getElementById('open-cv-btn').addEventListener('click', () => {
    window.open('assets/cv.pdf', '_blank');
  });

  var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);

      console.clear();

      window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Ne se joue qu’une fois
    }
  });
}, {
  threshold: 0.2 // déclenche quand 20% est visible
});

// Sélectionne tous les éléments à faire apparaître
document.querySelectorAll('.scroll-reveal').forEach(el => {
  observer.observe(el);
});


function openModal() {
  document.getElementById("popup-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("popup-modal").style.display = "none";
}

// Fermer si on clique en dehors du contenu
window.onclick = function(event) {
  const modal = document.getElementById("popup-modal");
  if (event.target === modal) {
    modal.style.display = "flex";
  }
}




