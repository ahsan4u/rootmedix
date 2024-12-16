/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
    // The directory where Remix looks for your routes (default is "app").
    appDirectory: "app",
    
    // The output directory for the build files.
    // Use the default "build" unless you need to customize this.
    serverBuildPath: "build/index.js",
  
    // Enable future features like new route conventions.
    future: {
      v2_routeConvention: true, // Opt into new routing conventions.
    },
  };
  