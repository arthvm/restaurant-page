import "./style.css";

const handleDivs = function () {
  const contentDiv = document.getElementById("main");

  const menuTabDiv = document.createElement("div");
  menuTabDiv.setAttribute("id", "menu-div");
  contentDiv.appendChild(menuTabDiv);

  const textDiv = document.createElement("div");
  textDiv.setAttribute("id", "menu-text-div");

  const btnDiv = document.createElement("div");
  btnDiv.setAttribute("id", "menu-btn-div");

  menuTabDiv.appendChild(textDiv);
  menuTabDiv.appendChild(btnDiv);
};

const handleText = function () {
  const textDiv = document.getElementById("menu-text-div");

  const menuText = document.createElement("h3");
  menuText.classList.add("menu-text");
  menuText.textContent =
    "Unlock the simplicity of our menu: One cookie to rule them all! No browser history, just cookie mastery at its finest - because here, decisions are as straightforward as our flavor choices: cookies, cookies, and more cookies!";

  textDiv.appendChild(menuText);
};

const handleBtn = function () {
  const btnDiv = document.getElementById("menu-btn-div");

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-btn");
  menuBtn.textContent = "Accept All!";

  btnDiv.appendChild(menuBtn);
};

const menuTab = function () {
  handleDivs();
  handleText();
  handleBtn();
};

export default menuTab;
