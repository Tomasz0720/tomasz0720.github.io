(function($) {
    "use strict";

    $(document).ready(function() {
      // masonoary
      initIsotope();

      // lightbox
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fitImagesInViewport': true
      });
      
      /* swiper */
      var testimonialSwiper = new Swiper(".testimonial-swiper", {
        spaceBetween: 20,
        pagination: {
            el: ".testimonial-swiper-pagination",
            clickable: true,
          },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          }
        },
      });
    }); 

    // init Isotope
    var initIsotope = function() {
      $('.grid').each(function(){
        var $buttonGroup = $( '.button-group' );
        var $checked = $buttonGroup.find('.is-checked');
        var filterValue = $checked.attr('data-filter');
    
        var $grid = $('.grid').isotope({
          itemSelector: '.portfolio-item',
          filter: filterValue
        });
    
        // bind filter button click
        $('.button-group').on( 'click', 'a', function(e) {
          e.preventDefault();
          filterValue = $( this ).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
    
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
          $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
          });
        });
      });
    };
})(jQuery);

// Make SVGs with data-link clickable
document.querySelectorAll('svg').forEach(svg => {
  const useElement = svg.querySelector('use');
  
  // Check if the <use> element has a valid xlink:href
  if (useElement) {
    const symbolId = useElement.getAttribute('xlink:href').replace('#', '');
    const symbol = document.querySelector(`symbol[id="${symbolId}"]`);
    
    // Check if the <symbol> has a data-link attribute
    if (symbol && symbol.hasAttribute('data-link')) {
      const link = symbol.getAttribute('data-link');
      
      // Add a click event listener to the <svg>
      svg.style.cursor = 'pointer'; // Change cursor to pointer
      svg.addEventListener('click', () => {
        window.open(link, '_blank'); // Open the link in a new tab
      });
    }
<<<<<<< HEAD
  }
});

// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM loaded and theme toggle handler initialized");
  
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIconLight = document.getElementById('theme-icon-light');
  const themeIconDark = document.getElementById('theme-icon-dark');

  if (!themeToggleBtn) {
    console.error("Theme toggle button not found!");
    return;
  }

  console.log("Theme toggle button found:", themeToggleBtn);
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
    if (themeIconLight && themeIconDark) {
      themeIconLight.classList.add('d-none');
      themeIconDark.classList.remove('d-none');
    }
    console.log("Applied dark theme from saved preference");
  }
  
  // Force SVG colors to update based on theme
  updateSvgColors();
  
  // Toggle theme on button click
  themeToggleBtn.addEventListener('click', function () {
    console.log("Theme toggle button clicked");
    document.body.classList.toggle('dark-mode');
    
    // Toggle icons
    if (themeIconLight && themeIconDark) {
      themeIconLight.classList.toggle('d-none');
      themeIconDark.classList.toggle('d-none');
      console.log("Theme icons toggled");
    }
    
    // Save preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      console.log("Saved dark theme preference");
    } else {
      localStorage.setItem('theme', 'light');
      console.log("Saved light theme preference");
    }
    
    // Force SVG colors to update
    updateSvgColors();
  });
});

// Add the missing updateSvgColors function
function updateSvgColors() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  console.log("Updating SVG colors for", isDarkMode ? "dark" : "light", "mode");
  
  // Force update all SVGs
  document.querySelectorAll('.text-primary svg, .student, .code, .menu').forEach(svg => {
    if (isDarkMode) {
      svg.style.fill = '#e0e0e0';
    } else {
      svg.style.fill = '#111111';
    }
  });
}
=======
  }    
});

// Alternative functionality for SVG icon clicks using data-link attributes
document.addEventListener('DOMContentLoaded', function() {
  // Find all SVG symbols with data-link attributes
  const symbols = document.querySelectorAll('symbol[data-link]');
  
  // Create a mapping of symbol IDs to their data-link values
  const linkMap = {};
  symbols.forEach(symbol => {
    const id = symbol.getAttribute('id');
    const link = symbol.getAttribute('data-link');
    if (id && link) {
      linkMap[id] = link;
    }
  });
  
  // Find all <use> elements within SVGs
  document.querySelectorAll('svg use').forEach(use => {
    const href = use.getAttribute('xlink:href');
    if (href) {
      const id = href.replace('#', '');
      
      // If we have a link for this ID, make the parent SVG clickable
      if (linkMap[id] && !use.closest('a')) {
        const svg = use.closest('svg');
        if (svg) {
          svg.style.cursor = 'pointer';
          svg.addEventListener('click', function() {
            window.open(linkMap[id], '_blank');
          });
        }
      }
    }
  });
});
>>>>>>> c566980373a0c0837fd146d184ac5612b7a3f57d
