import "./style.css";
import cookieImg from "./img/cookie-img.png";

const handleDivs = function () {
  const contentDiv = document.getElementById("main");

  const homeTabDiv = document.createElement("div");
  homeTabDiv.setAttribute("id", "home-div");
  contentDiv.appendChild(homeTabDiv);

  const heroDiv = document.createElement("div");
  heroDiv.setAttribute("id", "home-hero");

  const imageDiv = document.createElement("div");
  imageDiv.setAttribute("id", "hero-img");

  homeTabDiv.appendChild(heroDiv);
  homeTabDiv.appendChild(imageDiv);
};

const handleText = function () {
  const heroDiv = document.getElementById("home-hero");

  const heroText = document.createElement("h3");
  heroText.classList.add("hero-text");
  heroText.textContent =
    "Indulge in our byte-sized delights - where every cookie is a treat without the tracking!";

  heroDiv.appendChild(heroText);
};

const handleImage = function () {
  const imgDiv = document.getElementById("hero-img");

  const heroImg = new Image();
  heroImg.classList.add("cookie-img");
  heroImg.src = cookieImg;

  imgDiv.appendChild(heroImg);
};

const handleBtn = function () {
  const heroDiv = document.getElementById("home-hero");

  const heroBtn = document.createElement("button");
  heroBtn.classList.add("hero-btn");
  heroBtn.textContent = "Order Now!";

  heroDiv.appendChild(heroBtn);
};

const homeTab = function () {
  handleDivs();
  handleText();
  handleBtn();
  handleImage();
};

export default homeTab;
