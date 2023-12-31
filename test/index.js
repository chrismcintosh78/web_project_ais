
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
        return {
            on: controller.on,
            off: controller.off,
            emit: controller.emit,
            once: controller.once
        };
    }

    return {
        init: init
    };
})();
  // Assuming Emitter is imported or available in the sco
// Initialize the Emitter
const emitter = Emitter.init();

// Setting up a listener for a 'testEvent'
emitter.on('testEvent', (message) => {
  console.log('Test Event Fired:', message);
});

// Setting up a one-time listener for 'onceEvent'
emitter.once('onceEvent', (message) => {
  console.log('Once Event Fired:', message);
});

// Emitting 'testEvent'
emitter.emit('testEvent', 'Hello World!');

// Emitting 'onceEvent'
emitter.emit('onceEvent', 'This will only appear once.');

// Emitting 'onceEvent' again to test one-time functionality
emitter.emit('onceEvent', 'This should not trigger the listener again.');

