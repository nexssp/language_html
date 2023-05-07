let languageConfig = Object.assign({}, require("./html.win32.nexss.config"));
languageConfig.compilers = {
  html: {
    install: "",
    command: "",
    stream: "transformFile",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.html.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
