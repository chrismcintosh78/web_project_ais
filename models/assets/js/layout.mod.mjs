import { Handlers } from './handlers.mod.mjs';
import { Header } from './header.mod.js';
import { Footer } from './footer.mod.js';

/**
 * Layout module for managing CSS and JavaScript files and rendering content.
 * @module Layout
 */
const Layout = (function () {
    // Model: Stores CSS and JavaScript file paths
    const model = {
        cssFiles: [
            `${CONFIG.paths.venDirPath}bootstrap/css/bootstrap.min.css`,
            `${CONFIG.paths.venDirPath}boxicons/css/boxicons.min.css`,
            `${CONFIG.paths.venDirPath}bootstrap-icons/bootstrap-icons.css`,
            `${CONFIG.paths.cssDirPath}style.css`,
            'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'
        ],
        jsFiles: [`${CONFIG.paths.venDirPath}bootstrap/js/bootstrap.bundle.min.js`]
    };

    const view = {
        /**
         * Renders the title element in the HTML head.
         */
        renderContent: function () {
            const objTitle = document.createElement("title");
            objTitle.innerText = CONFIG.title;
            document.head.appendChild(objTitle);
        }
    };

    const controller = {
        /**
         * Attaches event handlers to elements using jQuery.
         */
        attachEventHandlers: function () {
            // Example: $('#myButton').click(function () {
            //   alert('Button clicked');
            // });
        },

        /**
         * Loads CSS files by appending link elements to the head.
         */
        loadCssFiles: function () {
            model.cssFiles.forEach((filename) => {
                const linkTag = document.createElement("link");
                linkTag.rel = "stylesheet";
                linkTag.type = "text/css";
                linkTag.href = filename; // Adjust the path
                document.head.appendChild(linkTag);
            });
        },

        /**
         * Loads JavaScript files by appending script elements to the body.
         */
        loadJsFiles: function () {
            model.jsFiles.forEach((filename) => {
                const scriptTag = document.createElement("script");
                scriptTag.src = filename; // Adjust the path
                document.body.appendChild(scriptTag);
            });
        }
    };

    /**
     * Initializes the Layout module, loads CSS and JavaScript files,
     * and calls view and controller functions as needed.
     */
    function init() {
        // Load CSS and JavaScript files
        controller.loadCssFiles();
        controller.loadJsFiles();

        // Call view and controller functions as needed
        view.renderContent();
        Handlers.init();
        controller.attachEventHandlers();
    }

    // Public API
    return {
        init: init,
    };
})();

export { Layout };