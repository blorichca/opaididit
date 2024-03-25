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

// Corrected image dimensions according to your requirements
const imageHeight = 890; // Total height of the image you provided
const imageWidth = 1024; // Assuming the full image width as before

// Function to generate chatbot cards with dynamic heights and background positions
function generateChatbotCards() {
  const container = document.querySelector("#S2-Features .row");
  if (!container) {
    console.error("The container for #S2-Features .row was not found.");
    return;
  }

  let accumulatedHeight = 0; // Keep track of the accumulated height for background positioning

  // Calculate the card heights and assign background position
  aiChatbotsInfo.forEach((info, index) => {
    // Calculate card height as specified
    const cardHeight = (info.bulletPoints.length * imageHeight) / 7;

    // Create the card element with dynamic height and background properties
    const card = document.createElement("div");
    card.className = `col-12 card my-3`;
    card.style.height = `${cardHeight}px`; // Set the dynamic height for the card

    // Background properties
    card.style.backgroundImage = `url('img/s2_ai_chatbot_opa_1.png')`; // Placeholder for your image path
    card.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;
    card.style.backgroundRepeat = "no-repeat";
    // Calculate the Y position of the background to correspond with the height of previous cards
    card.style.backgroundPosition = `center ${-accumulatedHeight}px`;

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

    container.appendChild(card); // Append card to container

    // Add the current card's height to the accumulatedHeight for the next card's background position
    accumulatedHeight += cardHeight;
  });
}

// Invoke the card generation function when the document content has loaded
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
