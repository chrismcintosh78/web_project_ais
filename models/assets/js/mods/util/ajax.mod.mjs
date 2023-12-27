const Ajax = (function() {
  // Model: Handles the AJAX request
  const model = {
      sendRequest: function(objRequest) {
          return new Promise(function(resolve, reject) {
              const xhr = new XMLHttpRequest();

              xhr.addEventListener('load', function() {
                  if (xhr.status >= 200 && xhr.status < 300) {
                      const objHeaders = parseResponseHeaders(xhr.getAllResponseHeaders());
                      const strBody = xhr.responseText;

                      const resObject = {
                          status: xhr.status,
                          statusText: xhr.statusText,
                          headers: objHeaders,
                          getJSON: function() {
                              return new Promise((resolve, reject) => {
                                  try {
                                      resolve(JSON.parse(strBody));
                                  } catch (error) {
                                      reject(error);
                                  }
                              });
                          },
                          getText: function() {
                              return Promise.resolve(strBody);
                          }
                      };
                      resolve(resObject);
                  } else {
                      reject(new Error(xhr.statusText));
                  }
              });

              xhr.addEventListener('error', function() {
                  reject(new Error('Network error'));
              });

              xhr.open(objRequest.method, objRequest.url, true);

              if (objRequest.headers) {
                  Object.keys(objRequest.headers).forEach(function(header) {
                      xhr.setRequestHeader(header, objRequest.headers[header]);
                  });
              }

              xhr.send(objRequest.data ? objRequest.data : null);
          });
      }
  };

  // View: Manages the presentation of AJAX responses/errors
  const view = {
      displayResponse: function(response) {
          // Update the UI to display the response
          console.log(response); // You can customize this to update the UI as needed
      },
      displayError: function(error) {
          // Handle and display errors in the UI
          console.error(error); // You can customize this for UI display
      }
  };

  // Controller: Connects Model and View, handles AJAX requests
  const controller = {
      sendRequest: function(requestData) {
          model.sendRequest(requestData)
              .then(response => {
                  view.displayResponse(response);
              })
              .catch(error => {
                  view.displayError(error);
              });
      }
  };
  function init(objRequest){
        model.sendRequest(objRequest);
  }
  // Public API
  return {
      init: init
  };
})();
export {Ajax}
/*
// Define the request object
const objRequest = {
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    headers: {'Accept': 'application/json'}
};

// Make the AJAX request
AjaxModule.sendRequest(objRequest)
    .then(response => {
        // Handle the response
        console.log('Received response:', response);

        // You can further process the response here, e.g., update the UI
    })
    .catch(error => {
        // Handle and display errors
        console.error('Error:', error);

        // You can also update the UI to show the error message
    });

*/