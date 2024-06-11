document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsapp-button');
    const scrollThreshold = 200; // Cambia este valor según desees
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > scrollThreshold) {
        whatsappButton.style.transform = 'translateY(-50%)';
      } else {
        whatsappButton.style.transform = 'translateY(0)';
      }
    });
  });
  