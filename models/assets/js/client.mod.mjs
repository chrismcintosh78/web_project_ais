const Client = (function() {
    // Model: Stores the detected browser features
    const model = {
      browserType: null,
      browserPlatform: null,
      isMobile: null,
      screenDimensions: {
        width: null,
        height: null
      },
      userMediaSupport: null,
      canvasSupport: null,
      xmlHttpRequestSupport: null,
      detectBrowserType: function() {
        const userAgent = navigator.userAgent;
        if (userAgent.includes('Chrome')) {
          return 'Chrome';
        } else if (userAgent.includes('Firefox')) {
          return 'Firefox';
        } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
          return 'Safari';
        } else if (userAgent.includes('Trident') || userAgent.includes('MSIE')) {
          return 'Internet Explorer';
        } else {
          return 'Unknown';
        }
      },
    
      // Detects browser platform (Linux, Mac, Windows, etc.)
      detectBrowserPlatform: function () {
        const platform = navigator.platform;
        return platform;
      },
      // Detects if the browser is mobile
      detectMobileBrowser: function() {
        return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      },
    
      // Detects screen dimensions
      detectScreenDimensions: function() {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
    
      // Check for user media support
      checkUserMediaSupport: function() {
        return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
      },
    
      // Check for canvas support
      checkCanvasSupport: function () {
        const canvas = document.createElement('canvas');
        return !!(canvas.getContext && canvas.getContext('2d'));
      },
    
      // Check for XML HTTP request support
      checkXMLHttpRequestSupport: function() {
        return !!window.XMLHttpRequest;
      }
      // Add more feature properties as needed
    };
  
    // View: Manages the presentation of detected features (no traditional UI)
    // Since there's no traditional UI, this part can be minimal or omitted
  
    // Controller: Manages feature detection and provides access to the model
    const Controller = {
      detectFeatures: function() {
        model.browserType = model.detectBrowserType();
        model.browserPlatform = model.detectBrowserPlatform();
        model.isMobile = model.detectMobileBrowser();
        model.screenDimensions = model.detectScreenDimensions();
        model.userMediaSupport = model.checkUserMediaSupport();
        model.canvasSupport = model.checkCanvasSupport();
        model.xmlHttpRequestSupport = model.checkXMLHttpRequestSupport();
        // Add more feature detection here as needed
      },
      getModel: function() {
        return { ...model }; // Return a copy of the model to prevent modification
      }
    };
  
    // Detects browser type (Chrome, Firefox, Safari, IE, etc.)
   
    function init(){
      Controller.detectFeatures();
      Controller.getModel();
    }
    // Public API
    return {
      init: init,
      getModel: Controller.getModel,
    };
  })();
  export {Client}
  // Usage example

  