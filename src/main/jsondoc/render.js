var elements = require("../../gp2/elements.js");

var jsonContent = require("./before/doc-main.js");

elements.appendElementsFromJSON(document.body, jsonContent);

require("./after");