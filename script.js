// S2 Intro - Hover

// Initialize tooltips for S2-Features Section
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Placeholder functions for tooltip functionality
  function showTooltip(event) {
    // Implement the show tooltip logic here
    // You might need to fetch the title attribute of the event.target and show it in a custom tooltip element.
  }

  function hideTooltip() {
    // Implement the hide tooltip logic here
    // This would typically hide the tooltip element.
  }

  // Add hover event listeners for S1 list items
  var s1Items = document.querySelectorAll(".s1-list-item");
  s1Items.forEach(function (item) {
    item.addEventListener("mouseenter", showTooltip);
    item.addEventListener("mouseleave", hideTooltip);
  });

  // ... Assuming that the rest of your code handles the 's2-list-item' similarly
});

// The bot card creation code seems fine and would execute after the DOM is fully loaded
// It dynamically creates cards for each bot in the 'bots' array and adds them to the page

// S3 Bots - Dyna,mic creation of bot cards

const bots = [
  {
    name: "Copoilot",
    company: "Microsoft",
    link: "https://copilot.microsoft.com/",
    imgSrc: "img/bot-copilot-icon.png",
    imgAlt: "mico icon",
    freeFeatures: [
      "Image creation 3",
      "Internet Access",
      "Plugins",
      "Chat Styles",
      "Notebook",
    ],
    paidFeatures: ["Custom bots"],
  },
  {
    name: "Gemini",
    company: "google",
    link: "https://gemini.google.com/app",
    imgSrc: "img/bot-gemini-icon.png",
    imgAlt: "google icon",
    freeFeatures: ["Image creation 2", "Internet Access", "Plugins"],
    paidFeatures: ["Advanced"],
  },
  {
    name: "ChatGPT",
    company: "open AI",
    link: "https://chat.openai.com/",
    imgSrc: "img/bot-chatgpt-icon.png",
    imgAlt: "chatGPT icon",
    freeFeatures: ["Personal Contex"],
    paidFeatures: [
      "Image creation 1",
      "Internet Access",
      "Plugins",
      "Custom bots",
    ],
  },
];

const botsContainer = document.querySelector("#bots .row");

bots.forEach((bot) => {
  const botDiv = document.createElement("div");
  botDiv.className = "col-4 border text-center p-1";
  botDiv.innerHTML = `
    <a href="${bot.link}">
      <img src="${bot.imgSrc}" alt="${
    bot.imgAlt
  }" class="img-fluid" style="max-width: 150px;">
    </a>
    <h3 class="mt-2 lh-1 fw-bold">${bot.name}</h3>
    <small>By ${bot.company}</small>
    <br><br>
    <strong>FREE</strong><br>
    ${bot.freeFeatures.join("<br>")}
    <br><br>
    <strong>PAID</strong><br>
    ${bot.paidFeatures.join("<br>")}
  `;
  botsContainer.appendChild(botDiv);
});
