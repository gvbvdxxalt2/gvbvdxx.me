module.exports = [
  {
    element: "style",
    textContent: require("./doc-css.css"),
  },
  {
    element: "style",
    //Quick hack to get hidden attribute to work even if there is another display attribute set.
    textContent: "[hidden] {display: none;opacity: 0;pointer-events: none;}",
  },

  //Actual content
  {
    element: "div",
    className: "contentMain",
    gid: "contentMain",
    children: [
		...require("./about-me-left.js"),
		...require("./projects-list.js")
	],
  },
];
