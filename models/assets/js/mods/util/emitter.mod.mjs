const Emitter = (function() {
    let model = {
        listeners: {},
    };

    let view = {

    };

    let controller = {
        on: (event, listener) => {
            if (!(event in model.listeners)) {
                model.listeners[event] = [];
            }
            model.listeners[event].push(listener);
        },

        off: (event, listener) => {
            if (event in model.listeners) {
                const index = model.listeners[event].indexOf(listener);
                if (index !== -1) {
                    model.listeners[event].splice(index, 1);
                }
            }
        },

        emit: (event, ...args) => {
            if (event in model.listeners) {
                model.listeners[event].forEach(listener => {
                    listener(...args);
                });
            }
        },

        once: (event, listener) => {
            const onceListener = (...args) => {
                listener(...args);
                controller.off(event, onceListener);
            };
            controller.on(event, onceListener);
        }
    };

    function init() {
        // Initialization code
    }

    return {
        init: init,
        on: controller.on,
        off: controller.off,
        emit: controller.emit,
        once: controller.once
    };
})();

export { Emitter };
