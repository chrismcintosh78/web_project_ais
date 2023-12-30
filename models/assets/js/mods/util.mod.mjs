const Utility = (function(){
    const model = {

    };
    const veiw = {

    };
    const controller = {
        cre8WClass: function(strTag, strId, strClassList){
          return $(`<${strTag}>`, {
            id: strId,
            class: strClassList
          });
        },
    };
    function init(){
        return () => {
          return this;
        }
    };
    console.log(this);

    return {
        init: init,
    }
})();
export {Utility}