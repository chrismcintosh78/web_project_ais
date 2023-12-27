/**
 * Import dependencies.
 * - {@link Layout} - Import the Layout module.
 * - {@link Client} - Import the Client module.
 */
import { Layout } from './layout/layout.mod.mjs';
import { Client } from './util/client.mod.mjs';

/**
 * Model components (to be added).
 *
 * This section is reserved for defining Model components that manage application data.
 * Currently, it's empty, but you can add data-related code here as needed.
 */
const App = (function(){
    const model = {

    };

    /**
     * View components (to be added).
     *
     * This section is reserved for defining View components that handle user interface logic.
     * Currently, it's empty, but you can add view-related functions here as needed.
     */
    const view = {

    };

    /**
     * Controller components (to be added).
     *
     * This section is reserved for defining Controller components that manage application logic and user interactions.
     * Currently, it includes a function for serializing client data to localStorage.
     */
    const controller = {
      /**
       * Serialize client data to localStorage.
       *
       * @param {Object} objClientModel - The client data model to be serialized.
       * @returns {void}
       */
      serializeClient: function(objClientModel){
        localStorage.setItem("Client", JSON.stringify(objClientModel));
        console.log(localStorage.getItem("Client"));
      }
    };

    /**
     * Initialize the App module.
     * This function serves as the entry point for the App module and initializes the application.
     *
     * @param {Object} objConfig - Configuration object with application settings.
     * @returns {void}
     */
    function init(objConfig){
      // GET VISITOR INFO AND SERILIZE IT TO COOKIE
      Client.init();
      controller.serializeClient(Client.getModel());

      // CALL THE LAYOUT MODULE TO START INCLUDING NEEDED LIBRARIES AND GENERATE BOILER_PLATE
      Layout.init(objConfig);
    };

    /**
     * Return the App module's initialization function.
     * This function is returned for external use to initialize the App module.
     *
     * @returns {Object} - The initialization function.
     */
    return {
      init: init
    };
})();
export {App};