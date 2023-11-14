import "./style.css";
import homeTab from "./home.js";

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

  const menuTab = document.createElement("h2");
  menuTab.textContent = "Menu";
  menuTab.classList.add("tab");
  menuTab.setAttribute("id", "menu-tab");

  const aboutTab = document.createElement("h2");
  aboutTab.textContent = "About Us";
  aboutTab.classList.add("tab");
  aboutTab.setAttribute("id", "about-tab");

  tabsDiv.appendChild(homeTab);
  tabsDiv.appendChild(menuTab);
  tabsDiv.appendChild(aboutTab);

  return tabsDiv;
};

const addTabsEventListener = function () {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const currentTab = document.querySelector(".active");
      if (currentTab != e.target) {
        handleTabSelection(e.target);
        handleTabSwitching(e.target);
      }
    });
  });
};

const handleTabSelection = function (tab) {
  const oldTab = document.querySelector(".active");
  if (oldTab != null) {
    oldTab.classList.remove("active");
  }

  tab.classList.add("active");
};

const handleTabSwitching = function (tab) {
  clearMainDiv();

  switch (tab.id) {
    case "home-tab":
      homeTab();
      break;

    case "menu-tab":
      console.log("On Menu Tab");
      break;

    case "about-tab":
      console.log("On About Tab");
      break;
  }
};

const clearMainDiv = function () {
  const mainDiv = document.getElementById("main");

  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.lastChild);
  }
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
  addTabsEventListener();
})();

const startSelection = (function () {
  const homeTab = document.getElementById("home-tab");
  handleTabSelection(homeTab);
  handleTabSwitching(homeTab);
})();
