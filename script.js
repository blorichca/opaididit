// S2

// If you want to add any interactive JavaScript behavior
$(document).ready(function () {
  // Code to handle the hover event on the info icon
  $(".info-icon").hover(
    function () {
      // Mouse enter function
      $(this).siblings(".original-content").hide();
      $(this).siblings(".overlay-content").show();
    },
    function () {
      // Mouse leave function
      $(this).siblings(".original-content").show();
      $(this).siblings(".overlay-content").hide();
    }
  );
});

const aiChatbotsInfo = [
  {
    title: "What are AI Chatbots?",
    bulletPoints: [
      {
        text: "User-AI interaction platforms",
        description:
          "Chatbots let you communicate directly with powerful AI models.",
      },
    ],
  },
  {
    title: "What makes them so special?",
    bulletPoints: [
      {
        text: "Get You, Really Get You",
        description:
          "They use advanced language processing to understand your intent and natural way of speaking.",
      },
      {
        text: "Information Powerhouses",
        description:
          "AI chatbots are trained on massive datasets, giving them access to a vast range of knowledge.",
      },
      {
        text: "Helpful for Everyone",
        description:
          "Their responses adapt to your knowledge level, whether you're a beginner or an expert.",
      },
      {
        text: "Constantly Learning",
        description:
          "Each interaction helps them improve, making them progressively smarter.",
      },
    ],
  },
  {
    title: "What can they do?",
    bulletPoints: [
      {
        text: "Got Your Legal Back",
        description:
          "Analyze contracts and legal documents, simplifying complex language.",
      },
      {
        text: "Physical & Mental Trainer",
        description:
          "Provide workout guidance, exercise advice, and mental health support.",
      },
      {
        text: "Financial Advisor",
        description:
          "Help you discover financial tools, compare your options, and make sound money choices.",
      },
    ],
  },
];

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
