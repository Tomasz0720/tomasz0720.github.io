(function($) {

    "use strict";

    $(document).ready(function() {
      
      // masonoary //

      initIsotope();

      // lightbox

      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fitImagesInViewport': true
      })
      
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

    }); // End of a document ready

  // init Isotope
  var initIsotope = function() {
    
    $('.grid').each(function(){

      // $('.grid').imagesLoaded( function() {
        // images have loaded
        var $buttonGroup = $( '.button-group' );
        var $checked = $buttonGroup.find('.is-checked');
        var filterValue = $checked.attr('data-filter');
  
        var $grid = $('.grid').isotope({
          itemSelector: '.portfolio-item',
          // layoutMode: 'fitRows',
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
      // });

    });
  }




})(jQuery);

// Select all <svg> elements with a <use> tag
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
  }
});