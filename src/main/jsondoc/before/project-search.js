module.exports = [
	{
		element: "div",
		className: "searchProjectsContainer",
		children: [
			{
				element: "span",
				textContent: "🔍 Search projects:"
			},
			{
				element: "input",
				className: "searchProjectsInput",
				gid: "searchProjectsInput",
				placeholder: "Type something here to search it."
			}
		]
	}
];