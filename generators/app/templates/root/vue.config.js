const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");
const path = require("path");
const PACKAGE = require("./package.json");

var modeConfig = {};

if (process.argv.indexOf("--deploy") > -1) {
  var runMode = "deployment";

  //Custom assets and html path if deployment mode

  //assetsFolder(outputDir) will be deleted before compilation
  modeConfig.outputDir = PACKAGE.deployment.assetsFolder;
  //Set assetsDir to be the same as outputDir
  modeConfig.assetsDir = "./";

  //htmlFolder will NOT be deleted before compilation
  //compiled index.html will replace previous build
  modeConfig.indexPath =
    PACKAGE.deployment.htmlFolderRelativeToAssets + "/index.html";

  console.log(
    "Compilation for deployment mode has started towards " +
      modeConfig.outputDir
  );
}

module.exports = {
  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== "production",
        test: /\.(jpe?g|png|gif|svg)$/i,
        plugins: [
          imageminMozjpeg({
            quality: 70,
            progressive: true
          })
        ]
      })
    ]
  },
  devServer: {
    setup(app) {
      app.post("*", (req, res) => {
        //Redirect POST request as GET request in dev mode
        res.redirect(req.originalUrl);
      });
    }
  },
  chainWebpack: config => {
    if (runMode !== "deployment") {
      //Copy apis folder to output if not deployment mode
      config.plugin("copy").tap(args => {
        args[0].push({
          from: path.resolve(__dirname, "src/assets/apis"),
          to: path.resolve(__dirname, "dist/apis"),
          toType: "dir",
          ignore: [".DS_Store"]
        });
        return args;
      });
    }
  },
  css: {
    loaderOptions: {
      sass: {
        //Automatically import these helper files at the start of every single file component (.vue file)
        //WARNING: Only define placeholder classes, variables, mixins helpers in these files.
        //Do not define .class-selector { ... } into these files unless they are meant to appear in each compiled single file component stylesheet
        additionalData: `@import "@/assets/styles/helpers/_variables.scss";
        @import "@/assets/styles/helpers/_mixins.scss";
        @import "@/assets/styles/helpers/_helpers.scss";
        `
      }
    }
  },
  ...modeConfig
};
