/**
 * Footer module for serving footer content to a website.
 */
const Footer = (function() {
  // Model: Stores footer content data
  const model = {
    /**
     * The company name to display in the footer.
     * @type {string}
     */
    companyName: "Your Company",

    /**
     * The copyright year to display in the footer.
     * @type {number}
     */
    copyrightYear: new Date().getFullYear(),

    /**
     * The list of footer links.
     * @type {Array.<{label: string, url: string}>}
     */
    footerLinks: [
      {
        label: "Home",
        url: "/"
      },
      {
        label: "About",
        url: "/about"
      },
      {
        label: "Services",
        url: "/services"
      },
      // Add more footer links as needed
    ],
  };

  // View: Manages the presentation of footer content
  const view = {
    /**
     * Render the footer HTML.
     *
     * @returns {string} - The HTML markup for the footer.
     */
    render: function() {
      const { companyName, copyrightYear, footerLinks } = model;

      // Create the footer HTML structure
      const footerHtml = `
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <p>&copy; ${copyrightYear} ${companyName}</p>
              </div>
              <div class="col-md-6">
                <ul class="footer-links">
                  ${footerLinks.map(link => `<li><a href="${link.url}">${link.label}</a></li>`).join("")}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      `;

      return footerHtml;
    },
  };

  // Controller: Manages footer data and presentation
  const controller = {
    /**
     * Initialize the Footer module.
     */
    init: function() {
      // You can add initialization code here if needed
    },

    /**
     * Get the rendered HTML for the footer.
     *
     * @returns {string} - The HTML markup for the footer.
     */
    getFooterHtml: function() {
      return view.render();
    },
  };

  // Public API
  return {
    init: controller.init,             // Initializes the Footer module
    getFooterHtml: controller.getFooterHtml, // Gets the rendered footer HTML
  };
})();

export { Footer };