import { Handlers } from './handlers.mod.mjs';
import { Header } from './header.mod.js';
import { Footer } from './footer.mod.js';

//DEPENDS ON CONFIG conf
const Layout = (function () {
    const model = {
      cssFiles: [ (CONFIG.paths.venDirPath) + "bootstrap/css/bootstrap.min.css",
                  (CONFIG.paths.venDirPath) + "boxicons/css/boxicons.min.css",
                  (CONFIG.paths.venDirPath) + "bootstrap-icons/bootstrap-icons.css",
                  (CONFIG.paths.cssDirPath) + "style.css",
                  
                  "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"], 
                  // Array to store CSS file names
      jsFiles: [(CONFIG.paths.venDirPath) + "bootstrap/js/bootstrap.bundle.min.js"],  // Array to store JavaScript file names
    };
  
    const view = {
      // Define your view functions here using jQuery
      // Example:
      renderContent: function () {
        const objTitle = document.createElement("title");
        objTitle.innerText = CONFIG.title;
        document.head.appendChild(objTitle);
      },
    };
  
    const controller = {
      // Define your controller functions here using jQuery
      // Example:
      attachEventHandlers: function () {
        // Use jQuery to attach event handlers
        $('#myButton').click(function () {
          alert('Button clicked');
        });
      },
          // Function to load CSS files
    loadCssFiles: function () {
        model.cssFiles.forEach((filename) => {
          const linkTag = document.createElement("link");
          linkTag.rel = "stylesheet";
          linkTag.type = "text/css";
          linkTag.href = `${filename}`; // Adjust the path
          document.head.appendChild(linkTag);
        });
      },
  
      // Function to load JavaScript files
      loadJsFiles: function () {
        model.jsFiles.forEach((filename) => {
          const scriptTag = document.createElement("script");
          scriptTag.src = `${filename}`; // Adjust the path
          document.body.appendChild(scriptTag);
        });
      },
    };
  
    function init() {
      // Initialize the layout module and load CSS and JavaScript files
      controller.loadCssFiles();
      controller.loadJsFiles();
  
      // Call view and controller functions as needed
      view.renderContent();
      Handlers.init();
      controller.attachEventHandlers();
    }
    return {
      init: init,
    };
  })();
  export {Layout}
  