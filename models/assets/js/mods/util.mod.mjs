console.log("Importing Utility ");
const Utility = (function(){
    const model = {

    };
    const view = {

    };
    const controller = {
        cre8WClass: function(strTag, strId, strClassList){
          return $(`<${strTag}>`, {
            id: strId,
            class: strClassList
          });
        },
    };
    
    return {
        model: model,
        controller: controller,
        view: view
    }
})();
export {Utility}