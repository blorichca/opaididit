// Data for each bot
const bots = [
  {
    name: "Copilot",
    company: "Microsoft",
    features: [
      "Image creation 3",
      "Internet Access",
      "Plugins",
      "Chat Styles",
      "Notebook",
    ],
    paidFeatures: ["Custom bots"],
    icon: "copilot-icon.svg",
    link: "https://copilot.microsoft.com/",
  },
  {
    name: "Gemini",
    company: "Google",
    features: ["Image creation 2", "Internet Access", "Plugins"],
    paidFeatures: ["Advanced"],
    icon: "google-gemini-icon.svg",
    link: "https://gemini.google.com/app",
  },
  {
    name: "ChatGPT",
    company: "Open AI",
    features: ["Personal Context"],
    paidFeatures: [
      "Image creation 1",
      "Internet Access",
      "Plugins",
      "Custom bots",
    ],
    icon: "chatgpt-icon.svg",
    link: "https://chat.openai.com/",
  },
];

// Function to create bot card HTML
const createBotCard = (bot) => {
  return `
      <div class="col-4 border">
        <div class="p-1" align="center">
          <a href="${bot.link}" target="_blank">
            <img
              src="${bot.icon}"
              alt="${bot.name} icon"
              class="img-fluid"
              style="max-width: 150px; margin-left: auto; margin-right: auto;"
            />
          </a>
          <h3 class="mt-2 lh-1 fw-bold">${bot.name}</h3>
          <small>By ${bot.company}</small> <br /><br />
          <strong>FREE</strong><br />
          ${bot.features.join("<br />")}<br /><br />
          <strong>PAID</strong><br />
          ${bot.paidFeatures.join("<br />")}
        </div>
      </div>
    `;
};

// Insert the bot cards into the container
const container = document.getElementById("bots-container");
bots.forEach((bot) => {
  container.innerHTML += createBotCard(bot);
});
