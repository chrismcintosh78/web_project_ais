import { UIManager } from '../uimanager.mod.mjs';
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
            "vendor/bootstrap.min.css",
            "vendor/css/boxicons.min.css",
            "vendor/bootstrap-icons.css",
            "style.css"
        ],
        jsFiles: ["vendor/bootstrap.bundle.js"]
    };

    const view = {
        /**
         * Renders the title element in the HTML head.
         */
        renderContent: function (strTitle) {
            const objTitle = document.createElement("title");
            objTitle.innerText = strTitle;
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
        loadCssFiles: function (strCssPath) {
            model.cssFiles.forEach((filename) => {
                const linkTag = document.createElement("link");
                linkTag.rel = "stylesheet";
                linkTag.type = "text/css";
                linkTag.href = strCssPath + filename; // Adjust the path
                document.head.appendChild(linkTag);
            });
        },

        /**
         * Loads JavaScript files by appending script elements to the body.
         */
        loadJsFiles: function (strJsPath) {
            model.jsFiles.forEach((filename) => {
                const scriptTag = document.createElement("script");
                scriptTag.src = strJsPath + filename; // Adjust the path
                document.body.appendChild(scriptTag);
            });
        }
    };

    /**
     * Initializes the Layout module, loads CSS and JavaScript files,
     * and calls view and controller functions as needed.
     */
    function init(objConfig) {
        // Load CSS and JavaScript files
        //pass the CSS and JS library paths to their functions
        controller.loadCssFiles(objConfig.paths.cssDirPath);
        controller.loadJsFiles(objConfig.paths.jsDirPath);

        // Call view and controller functions as needed
        view.renderContent(objConfig.title);
        UIManager.init();
        controller.attachEventHandlers();
    }

    // Public API
    return {
        init: init,
    };
})();

export { Layout };