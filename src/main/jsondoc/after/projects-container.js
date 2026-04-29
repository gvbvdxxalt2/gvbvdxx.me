var elements = require("../../../gp2/elements.js");
var projectsListDiv = elements.getGPId("projectsListDiv");
var searchProjectsInput = elements.getGPId("searchProjectsInput");

function debounce(a, time) {
	var t = null;
	return function (...args) {
		clearTimeout(t);
		t = setTimeout(() => {
			a(...args);
		},time);
	};
}

var content = require("../../content");
var allProjects = content.projects;

function getProjectsToRender() {
	return allProjects;
}

function getSearchableText(string) {
	var s = string || "";

	s = s.toLowerCase(); //No case sensitivity.

	//Filter out any charactars that aren't needed for searching.
	var i = 0;
	var allowedChars = "abcdefghijklmnopqrstuvwxyz1234567890";
	var s2 = "";
	while (i < s.length) {
		if (allowedChars.indexOf(s[i]) !== -1) {
			s2 += s[i];
		}
		i += 1;
	}

	return s2;
}

function findProjectsToRender(term) {
	var projects = getProjectsToRender();
	if (term.length == 0) {
		return projects;
	}

	var found = [];
	var termSearchable = getSearchableText(term);
	projects.forEach((project) => {
		var projectSearchable = getSearchableText(project.textLabel + project.tags.join(""));
		if (projectSearchable.indexOf(termSearchable) !== -1) {
			found.push(project);
		}
	});

	return found;
}

function renderProject(project) {
	var content = {
		element: "div",
		className: "project",
		children: [
			{
				element: "img",
				src: project.thumbnail,
			},
			{
				element: "span",
				dangerouslySetInnerHTML: project.label
			}
		]
	};
	/*return {
		element: "div",
		className: "projectContainer",
		children: [content]
	};*/
	return content;
}

function renderProjects(projects) {
	elements.setInnerJSON(projectsListDiv, projects.map(renderProject));
}

function refreshProjects() {
	var term = searchProjectsInput.value.trim();
	var projects = findProjectsToRender(term);
	renderProjects(projects);
}

refreshProjects();
searchProjectsInput.addEventListener("input", debounce(refreshProjects,300));