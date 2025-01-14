var openOrClose = 0;
const menuOpenClose = document.querySelector(".menu-open-close");
const menuImg = document.querySelector(".menuImg");
menuContainer = document.querySelector(".mobile-menu-container");

menuOpenClose.addEventListener("click", () => {
  if (openOrClose == 0) {
    menuImg.src = "/svg/close.svg";
    openOrClose = 1;
    gsap.to("#mobile-menu", {
      height: "20rem",
      display: "flex",
      opacity: 1,
      duration: 0.37,
      yoyo: true,
    });
    menuContainer.style.display = "block";
  } else {
    menuImg.src = "/svg/menu.svg";
    openOrClose = 0;
    gsap.to("#mobile-menu", {
      height: "0rem",
      display: "none",
      opacity: 0,
      duration: 0.37,
    });
    setTimeout(() => {
    menuContainer.style.display = "none";
    },400)
  }
});





let class_10_ScienceArray = [
  {
    title: "Chemical Reaction and Equation",
    topics: [
      {
        topic: "Balancing the Chemical Equation",
        url: "/",
      },
      {
        topic: "Assertion and Reasoning",
        url: "/",
      },
      {
        topic: "Give Reasons",
        url: "/",
      },
      {
        topic: "Convert word equation to chemical equation",
        url: "/",
      },
      {
        topic: "Conceptual Questions",
        url: "/",
      },
    ],
  },
  {
    title: "Life Processes",
    topics: [
      {
        topic: "Nutrition",
        url: "/",
      },
      {
        topic: "Respiration",
        url: "/",
      },
      {
        topic: "Transportation",
        url: "/",
      },
      {
        topic: "Circulation",
        url: "/",
      },
      {
        topic: "Assertion and Reason",
        url: "/",
      },
      {
        topic: "Activity based questions",
        url: "/",
      },
      {
        topic: "Case Study",
        url: "/",
      },
    ],
  },
  {
    title: "Carbon and its compounds",
    topics: [
      {
        topic: "Concept Builders",
        url: "/",
      },
    ],
  },
  {
    title: "Acid, Bases and Salt",
    topics: [
      {
        topic: "Conceptual Questions",
        url: "/",
      },
      {
        topic: "Assertion and Reason",
        url: "/",
      },
      {
        topic: "Identify the Chemical Formulas",
        url: "/",
      },
      {
        topic: "Give Reasons",
        url: "/",
      },
      {
        topic: "Fill in the Blanks",
        url: "/",
      },
    ],
  },
  {
    title: "Metals and Non-metals",
    topics: [
      {
        topic: "Conceptual Questions",
        url: "/",
      },
      {
        topic: "Assertion and Reason",
        url: "/",
      },
      {
        topic: "Fill in the blanks",
        url: "/",
      },
      {
        topic: "Occurrence of metals",
        url: "/",
      },
    ],
  },
  {
    title: "Control and Coordination",
    topics: [
      {
        topic: "Plants: Control and coordination",
        url: "/",
      },
      {
        topic: "Animals: Control and coordination",
        url: "/",
      },
      {
        topic: "Assertion and Reason",
        url: "/",
      },
    ],
  },
  {
    title: "How do organism reproduce?",
    topics: [
      {
        topic: "Sexual Reproduction in plants",
        url: "/",
      },
    ],
  },
];

class_10_ScienceArray.forEach((item) => {
  document.querySelector(
    ".allChapters"
  ).innerHTML += `<div class="class chapter">
            <div class="chapter-title-container">
              <h4 class="hover chapter-title">${item.title}</h4>
            </div>
            <div class="chapter-content">
              <ol class="topics">
                ${item.topics
                  .map(
                    (topic) =>
                      `<li class="topic"><a href="${topic.url}">${topic.topic}</a></li>`
                  )
                  .join("")}
              </ol>
            </div>
          </div>`;
});
