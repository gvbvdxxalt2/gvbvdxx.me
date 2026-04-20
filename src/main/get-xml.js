var originalXML = document.getElementById("profileXML");
if (!originalXML) {
	window.alert("No XML was found so the about me profile can't be loaded.");
	throw new Error("No XML was found so the about me profile can't be loaded.");
}

var xml = originalXML.cloneNode(true);

var loadingScreen = document.getElementById("loadingScreen");
if (loadingScreen) {
	loadingScreen.remove();
}

module.exports = xml;