
import { Layout } from './layout.mod.mjs';
import { Client } from './client.mod.mjs';
export const App = (function() {
    // Model
    const model = {

    };
  

    const view = {

    };
  

    const controller = {
      serializeClient: function(objClientModel){
        localStorage.setItem("Client", JSON.stringify(objClientModel));
        console.log(localStorage.getItem("Client"));
      }
    };
    function init(objConfig){
      //GET VISITOR INFO  AND SERILIZE IT TO COOKIE
      Client.init();
      controller.serializeClient(Client.getModel());

      //CALL THE LAYOUT MODULE TO START INCLUDING NEEDED
      //LIBRARIES AND GENERATE BOILER_PLATE
      Layout.init(objConfig);
    };
    return {
      init: init
    };
  })();
  