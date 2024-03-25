const aiChatbotsInfo = [
  {
    title: "What are AI Chatbots?",
    description:
      "Chatbots let you communicate directly with powerful AI models.",
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

// Adjust these variables based on the actual size of your image
const imageHeight = 768; // The height of the full image
const imageWidth = 768; // The width of the full image
const totalCards = aiChatbotsInfo.length;
function generateChatbotCards() {
  const container = document.querySelector("#S2-Features .row");
  if (!container) {
    console.error("The container for #S2-Features .row was not found.");
    return;
  }

  const imageWidth = 1024; // Width of the full image
  const imageHeight = 1024; // Height of the full image
  let accumulatedOffset = 0; // Tracks the cumulative height offset for the background image

  // Calculate the total content height for all cards to distribute the background image correctly
  const totalContentHeight = aiChatbotsInfo.reduce((totalHeight, card) => {
    // Estimate each card's content height (arbitrary unit for each bullet point plus base height)
    const cardContentHeight = card.bulletPoints
      ? card.bulletPoints.length * 50 + 200
      : 200;
    return totalHeight + cardContentHeight;
  }, 0);

  // Create cards and assign background image portions to each
  aiChatbotsInfo.forEach((info, index) => {
    // Estimate the card's content height
    const cardContentHeight = info.bulletPoints
      ? info.bulletPoints.length * 50 + 200
      : 200;

    // Calculate the height ratio for the current card against the total content height
    const cardHeightRatio = cardContentHeight / totalContentHeight;

    const card = document.createElement("div");
    card.className = `col-12 card my-3`;
    card.style.backgroundImage = "url('img/s2_ai_chatbot_opa_1.png')"; // Update this path if needed
    card.style.backgroundRepeat = "no-repeat";
    // Position background image proportionally
    card.style.backgroundPosition = `center ${
      (-accumulatedOffset / totalContentHeight) * imageHeight
    }px`;
    card.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;
    // Set card height proportional to its content height ratio
    card.style.height = `${cardHeightRatio * imageHeight}px`;

    card.innerHTML = `
      <div class="card-body d-flex flex-column justify-content-center" style="height:100%;">
        <h5 class="card-title text-center">${info.title}</h5>
        ${
          info.description
            ? `<p class="card-description text-center m-0">${info.description}</p>`
            : ""
        }
        ${
          info.bulletPoints
            ? info.bulletPoints
                .map(
                  (bp) => `
                    <div class="card-text text-center">${bp.text}
                      <span class="card-description">${bp.description}</span>
                    </div>
                  `
                )
                .join("")
            : ""
        }
      </div>
    `;

    container.appendChild(card);
    // Increment the accumulated offset for the next card by the proportional height of the current card
    accumulatedOffset += (cardContentHeight / totalContentHeight) * imageHeight;
  });
}

document.addEventListener("DOMContentLoaded", generateChatbotCards);

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
