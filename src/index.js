import "./style.css";

const handleTitle = function () {
  const pageTitle = document.createElement("div");
  pageTitle.setAttribute("id", "title");
  const firstTitle = document.createElement("h1");
  const secondTitle = document.createElement("h1");
  firstTitle.classList.add("first-title");
  secondTitle.classList.add("second-title");

  firstTitle.textContent = "Web's";
  secondTitle.textContent = "Cookies";

  pageTitle.appendChild(firstTitle);
  pageTitle.appendChild(secondTitle);

  return pageTitle;
};

const handleTabs = function () {
  const tabsDiv = document.createElement("div");
  tabsDiv.setAttribute("id", "tabs");

  const homeTab = document.createElement("h2");
  homeTab.textContent = "Home";
  homeTab.classList.add("tab");
  homeTab.setAttribute("id", "home-tab");

  const aboutTab = document.createElement("h2");
  aboutTab.textContent = "About Us";
  aboutTab.classList.add("tab");
  aboutTab.setAttribute("id", "about-tab");

  const menuTab = document.createElement("h2");
  menuTab.textContent = "Menu";
  menuTab.classList.add("tab");
  menuTab.setAttribute("id", "menu-tab");

  tabsDiv.appendChild(homeTab);
  tabsDiv.appendChild(aboutTab);
  tabsDiv.appendChild(menuTab);

  return tabsDiv;
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
  headerDiv.appendChild(handleTabs());
})();
