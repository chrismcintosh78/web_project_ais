/**
 * Configuration object for the application.
 *
 * This object contains various configuration settings for the application,
 * including paths to directories for CSS, JavaScript, and vendor assets.
 */
const CONFIG = {
  /**
   * Paths to directories for assets.
   */
  paths: {
    /**
     * Path to the CSS directory.
     * @type {string}
     */
    cssDirPath: "models/assets/css/",

    /**
     * Path to the JavaScript directory.
     * @type {string}
     */
    jsDirPath: "models/assets/js/",

    /**
     * Path to the vendor directory.
     * @type {string}
     */
    venDirPath: "models/assets/vendor/",
  }
};
// Export the CONFIG object
export { CONFIG };
