let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "HTML";
languageConfig.description =
  "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser";
languageConfig.url = "https://www.w3.org/html";
languageConfig.founders = ["Berners-Lee", "Dan Connolly"];
languageConfig.developers = [""];
languageConfig.years = ["1991"];
languageConfig.extensions = [".html", ".htm"];
languageConfig.builders = {};
languageConfig.compilers = {
  html: {
    install: "",
    command: "",
    stream: "transformFile",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.html.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
