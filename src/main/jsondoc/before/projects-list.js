module.exports = [
	{
		element: "div",
		className: "projectsSide",
		gid: "projectsContainer",
	    //textContent: "🧑‍💻 Project list is coming soon! 🛠",
		children: [
			
			{
				element: "div",
				className: "projectsSideProjectsAndSearch",
				children: [
					
					...require("./project-search.js"),

					{
						element: "div",
						className: "projectsList",
						gid: "projectsListDiv"
					}
					
				]
			}
			
		]
	}	
];
