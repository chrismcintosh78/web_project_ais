/**
 * Client module for detecting and storing client-related information.
 */
*/
const Client = (function() {
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
    // Add more feature properties as needed
  };

  // View: Manages the presentation of detected features (no traditional UI)
  // Since there's no traditional UI, this part can be minimal or omitted

  // Controller: Manages feature detection and provides access to the model
  const controller = {
        // Detects browser platform (Linux, Mac, Windows, etc.)
      detectBrowserPlatform: () => {
        let userAgent = navigator.userAgent;
        let platform = null;

        if(/(Win|Win32|Win64|Windows)/i.test(userAgent)){
          platfprm = "Windows";
        }else if(/(Mac|Macintosh|MacIntel|MacPPC)/i.test(userAgent)){
          platfprm = "Mac OsS";

        }else if(/(Linux)/i.test(userAgent)){
          platform = "Linux";
        }
        return platform;
      },
    
      // Detects if the browser is mobile
      detectMobileBrowser: () =>  {
        return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      },
      detectBrowserType: () => {
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
      checkXMLHttpRequestSupport: () => {
        return !!window.XMLHttpRequest;
      },
        detectFeatures: function() {
        model.browserType = detectBrowserType();
        model.browserPlatform = detectBrowserPlatform();
        model.isMobile = detectMobileBrowser();
        model.screenDimensions = detectScreenDimensions();
        model.userMediaSupport = checkUserMediaSupport();
        model.canvasSupport = checkCanvasSupport();
        model.xmlHttpRequestSupport = checkXMLHttpRequestSupport();
        // Add more feature detection here as needed
      },
    getModel: function() {
      return { ...model }; // Return a copy of the model to prevent modification
    }
  };

  // Detects browser type (Chrome, Firefox, Safari, IE, etc.)




  // Detects screen dimensions

        // Check for XML HTTP request support

  view ={
       // Check for user media support
      checkUserMediaSupport: () => {
        return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
      },
    
      // Check for canvas support
      checkCanvasSupport: () => {
        const canvas = document.createElement('canvas');
        return !!(canvas.getContext && canvas.getContext('2d'));
      },
      detectScreenDimensions: ()  => {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
   }
   function init(){
      controller.detectFeatures();
   }
  // Public API
  return {
    init: init,
    getModel: controller.getModel
  };
})();

export {Client}