var { profile } = require("../../content");

module.exports = [
  {
    element: "div",
    gid: "aboutMeLeft",
    className: "aboutMeLeft",
    children: [
      ...require("./about-me-name.js"),
      ...require("./about-me-categories.js"),
    ],
  },
];
