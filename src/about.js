import "./style.css";

const handleDivs = function () {
  const contentDiv = document.getElementById("main");

  const aboutTabDiv = document.createElement("div");
  aboutTabDiv.setAttribute("id", "about-div");
  contentDiv.appendChild(aboutTabDiv);

  const textDiv = document.createElement("div");
  textDiv.setAttribute("id", "about-text-div");

  aboutTabDiv.appendChild(textDiv);
};

const handleText = function () {
  const textDiv = document.getElementById("about-text-div");

  const aboutText = document.createElement("h3");
  aboutText.classList.add("about-text");
  aboutText.textContent = `In a world filled with endless options, we've decided to take a different approach. Here at Web's Cookies, we proudly offer the most straightforward menu you'll ever encounter: cookies. And not just any cookies - we're talking about the kind that would make your browser jealous.
  
    Our philosophy is simple: why complicate things when you can have the timeless delight of a classic cookie? No fancy flavors, no overwhelming choices - just pure, unadulterated cookie goodness.
    
    So, whether you're a coding wizard in need of a quick sugar fix or a casual internet explorer looking for a sweet escape, Web's Cookies is your destination. Join us on this delightful journey where the only decision you'll need to make is how many cookies to savor.
    
    At Web's Cookies, we've mastered the art of simplicity, and our cookies speak for themselves. Because in a world filled with crumbs of complexity, our cookies are the byte-sized bites of joy you've been craving.`;

  textDiv.appendChild(aboutText);
};

const aboutTab = function () {
  handleDivs();
  handleText();
};

export default aboutTab;
