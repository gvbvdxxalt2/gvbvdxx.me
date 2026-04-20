function openInNewTab(href) {
  var a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.click();
}
function openLink(href) {
  var a = document.createElement("a");
  a.href = href;
  a.click();
}
var AElement = {
  openInNewTab,
  openLink,
};
module.exports = AElement;
