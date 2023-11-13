import "./style.css";

const handleMainDivs = (function () {
  const contentDiv = document.getElementById("content");

  const headerDiv = document.createElement("div");
  const mainDiv = document.createElement("div");

  headerDiv.setAttribute("id", "header");
  mainDiv.setAttribute("id", "main");

  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(mainDiv);
})();
