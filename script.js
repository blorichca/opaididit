// script.js

// S2 - info overlay

$(document).ready(function () {
  $(".S2-FolderStructure").hover(
    function () {
      // On hover, show the collapse
      var targetId = $(this).find(".S2-CardDetail").attr("id");
      $("#" + targetId).collapse("show");
    },
    function () {
      // On unhover, hide the collapse
      var targetId = $(this).find(".S2-CardDetail").attr("id");
      $("#" + targetId).collapse("hide");
    }
  );
});

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

const botsContainer = document.querySelector("#S3-bots .row");

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
