var { profile } = require("../../content");

module.exports = [
  {
    element: "div",
    gid: "aboutMeProfileName",
    className: "aboutMeProfileName",
    style: {
      background: profile.cssBg,
    },
    children: [
		{
			element: "div",
			className: "aboutMeProfileTop",
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
			    },
			]
		}
    ],
  },
];
