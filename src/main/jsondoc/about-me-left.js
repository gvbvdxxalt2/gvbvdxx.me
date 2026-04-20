var {profile} = require("../content");

module.exports = [
	{
		element: "div",
		gid: "aboutMeLeft",
		className: "aboutMeLeft",
		children: [
			{
				element: "div",
				gid: "aboutMeProfileName",
				className: "aboutMeProfileName",
				style: {
					background: profile.cssBg,
				},
				children: [
					{
						element: "img",
						className: "profilePicture",
						src: profile.picture,
					},
					{
						element: "span",
						className: "profileName",
						dangerouslySetInnerHTML: profile.name,
					}
				]
			}
		]
	}	
];