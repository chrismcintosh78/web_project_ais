/**
 * Handlers module for managing various UI interactions and behaviors.
 */
const UIManager = (function() {
  // Model: Stores references to UI elements
  const model = {
    header: $('#header'),          // Reference to the header element
    navbarlinks: $('#navbar .scrollto'),  // Reference to navbar links
    bk2TopButton: $('.back-to-top'),     // Reference to back-to-top button
  };

  // View: Manages UI interactions and behaviors
  const view = {
    toggleDropDown: function(e){
      if ($('#navbar').hasClass('navbar-mobile')) {
        if(e){
          e.preventDefault();
        }   
        $(this).next().toggleClass('dropdown-active')
      }
    },
    toggleBacktotop: () => {
      if (window.scrollY > 100) {
        model.bk2TopButton.addClass('active')
      } else {
        model.bk2TopButton.removeClass('active')
      }
    },
    /**
     * Activate navbar links based on scroll position.
     */
    navbarlinksActive: () => {
      let position = window.scrollY + 200;
      console.log(model);
      let objNavLinks = model.navbarlinks;
      Array.prototype.forEach.call(objNavLinks,navbarlink => {
        if (!navbarlink.hash) return;
        let section = $(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    },

    /**
     * Scroll to a specified element with a smooth animation.
     *
     * @param {Element} el - The target element to scroll to.
     */
    scrollto: (el) => {
      let header = $('#header');
      let offset = header.outerHeight();
      if (!header.hasClass('header-scrolled')) {
        offset -= 16;
      }

      let elementPos = $(el).offset().top;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth',
      });
    },
    postLoad: function(){
      //view.mblNavToggle();
      view.mblActv8Dropdown();
      view.toggleBacktotop()
      view.navbarlinksActive();
      view.stickyHeader();
      if (window.location.hash) {
        if ($(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
      controller.register(document, "scroll", view.stickyHeader());
      controller.register(document, "scroll", view.toggleBacktotop);
      controller.register(document ,"click",view.toggleDropDown());
      controller.register(document, "scroll", view.navbarlinksActive);
      controller.register(document, 'click', '.mobile-nav-toggle', view.mblNavToggle);
      controller.register(document,'click', '.navbar .dropdown > a', view.mblActv8Dropdown);
    },
    /**
     *
     * Make the header sticky when scrolling.
     *
     * @returns {Function} - A function that handles the sticky behavior.
     */
    stickyHeader: function() {
      // Reference to the header tag object
      let objHeader = model.header;
      console.log(objHeader);
    
      // Reference to the header element using jQuery
      let $header = $('#header');
      
      // Get the initial offset of the header
      let headerOffset = $header.offset().top;
      
      // Reference to the next element
      let $nextElement = $header.next();
      
      const sticky = () => {
        // Current scroll position
        let scrollY = window.scrollY;
        
        if (scrollY >= headerOffset) {
          // Add CSS classes to make the header sticky and apply offset to the next element
          $header.addClass('fixed-top');
          $nextElement.addClass('scrolled-offset');
        } else {
          // Remove the CSS classes if not scrolled enough
          $header.removeClass('fixed-top');
          $nextElement.removeClass('scrolled-offset');
        }
      };
    
      return sticky;
    },
    mblActv8Dropdown: function(e) {
      if ($('#navbar').hasClass('navbar-mobile')) {
        if(e){
          e.preventDefault();
        }   
        $(this).next().toggleClass('dropdown-active');
      }
    },
    /**
     * Toggle the mobile navigation menu.
     *
     * @param {Event} e - The click event.
     */
    mblNavToggle: function () {

      $('#navbar').toggleClass('navbar-mobile');
      $(this).toggleClass('bi-list');
      $(this).toggleClass('bi-x');
      //alert(this);
      console.log(this);
    },

    // Add more view functions as needed

  };

  // Controller: Manages event registration and initialization
  const controller = {
    /**
     * Register an event handler on an object.
     *
     * @param {Element|Window|Document} obj - The object to register the event on.
     * @param {string} event - The event name.
     * @param {string} el - The selector for the target element.
     * @param {Function} handler - The event handler function.
     */
    register: function(obj, event, el=null, handler) {
      if(el){
       $(obj).on(event, el, handler);
      }else{
        $(obj).on(event, handler);
      }
    },

    // Add more controller functions as needed

  };

  /**
   * Initialize the Handlers module.
   */
  function init() {

  }

  // Public API
  return {
    init: init,
    load: view.postLoad // Initializes the Handlers module
  };

})();

export { UIManager };