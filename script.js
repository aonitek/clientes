tailwind.config = {
      theme: {
        extend: {
          colors: {
            'bruma-verde': '#1B3A2B',
            'bruma-negro': '#0F1110',
            'bruma-dorado': '#C8860A',
            'bruma-crema': '#F5F0E8',
            'bruma-rojo': '#8B2635'
          },
          fontFamily: {
            'display': ['"Playfair Display"', 'serif'],
            'body': ['"Inter"', 'sans-serif']
          }
        }
      }
    }

// ===== MOBILE MENU TOGGLE =====
    // Purpose: Show/hide mobile navigation and icon transformation
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }

    // ===== NAVBAR SCROLL EFFECT =====
    // Purpose: Add background blur and opacity when scrolling down
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('navbar');
      if (window.scrollY > 50) {
        nav.classList.add('bg-bruma-negro/95', 'backdrop-blur-md');
        nav.classList.remove('bg-black/40');
      } else {
        nav.classList.remove('bg-bruma-negro/95', 'backdrop-blur-md');
        nav.classList.add('bg-black/40');
      }
    });

    // ===== FORM SUBMISSION HANDLER =====
    // Purpose: Intercept reservation form to show alert and reset
    function handleReservationSubmit(event) {
      event.preventDefault();
      alert("¡Reserva recibida! Te confirmaremos por email en menos de 24 horas.");
      event.target.reset();
    }