
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (e.key == "F12" ||
    (e.ctrlKey && e.shiftKey && e.key == "I") ||
    (e.ctrlKey && e.shiftKey && e.key == "J") ||
    (e.ctrlKey && e.key == "U") ||
    (e.ctrlKey && e.key == "S")) {

    e.preventDefault();
    return false;
  }
};