/**
 * Handlers module for managing various UI interactions and behaviors.
 */
const Handlers = (function() {
  // Model: Stores references to UI elements
  const model = {
    header: $('#header'),          // Reference to the header element
    navbarlinks: $('#navbar .scrollto'),  // Reference to navbar links
    bk2TopButton: $('.back-to-top'),     // Reference to back-to-top button
  };

  // View: Manages UI interactions and behaviors
  const view = {
    /**
     * Activate navbar links based on scroll position.
     */
    navbarlinksActive: () => {
      let position = window.scrollY + 200;
      model.navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
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

    /**
     * Make the header sticky when scrolling.
     *
     * @returns {Function} - A function that handles the sticky behavior.
     */
    stickyHeader: function() {
      let objHeader = model.header; // Reference to the header tag object
      let headerOffset = $('#header').offsetTop;
      let nextElement = $('#header').next();
      const sticky = () => {
        console.log($('#header'));
        if ((headerOffset - window.scrollY) <= 0) {
          $('#header').addClass('fixed-top');
          nextElement.addClass('scrolled-offset');
        } else {
          $('#header').removeClass('fixed-top');
          nextElement.removeClass('scrolled-offset');
        }
      };
      return sticky;
    },

    /**
     * Toggle the mobile navigation menu.
     *
     * @param {Event} e - The click event.
     */
    mblNavToggle: function (e) {
      $('#navbar').classList.toggle('navbar-mobile');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
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
    register: function(obj, event, el, handler) {
      $(obj).on(event, el, handler);
    },

    // Add more controller functions as needed

  };

  /**
   * Initialize the Handlers module.
   */
  function init() {
    // Register event handlers
    controller.register(window, "load", () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });
    controller.register(document, 'click', '.mobile-nav-toggle', view.mblNavToggle);
    controller.register(document,'click', '.navbar .dropdown > a', view.mblActv8Dropdown);

    if ($('#header')) {
      controller.register(window, "load", view.stickyHeader());
      controller.register(document, "scroll", view.stickyHeader());
    }

    if ($('.back-to-top')) {
      controller.register(window, "load", view.toggleBacktotop);
      controller.register(document, "scroll", view.toggleBacktotop);
    }

    controller.register(window, "load", view.navbarlinksActive);
    controller.register(document, "scroll", view.navbarlinksActive);
  }

  // Public API
  return {
    init: init, // Initializes the Handlers module
  };

})();

export { Handlers };