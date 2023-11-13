import "./style.css";

const handleTitle = function () {
  const pageTitle = document.createElement("div");
  pageTitle.setAttribute("id", "title");
  const firstTitle = document.createElement("p");
  const secondTitle = document.createElement("p");
  firstTitle.classList.add("first-title");
  secondTitle.classList.add("second-title");

  firstTitle.textContent = "Web's";
  secondTitle.textContent = "Cookies";

  pageTitle.appendChild(firstTitle);
  pageTitle.appendChild(secondTitle);

  return pageTitle;
};

const handleMainDivs = (function () {
  const contentDiv = document.getElementById("content");

  const headerDiv = document.createElement("div");
  const mainDiv = document.createElement("div");

  headerDiv.setAttribute("id", "header");
  mainDiv.setAttribute("id", "main");

  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(mainDiv);
})();

const handleHeader = (function () {
  const headerDiv = document.getElementById("header");
  headerDiv.appendChild(handleTitle());
})();
