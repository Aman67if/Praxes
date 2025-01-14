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




let class_8_ScienceArray = [
    // {
    //   title: "Mensuration",
    //   topics: [
    //     {
    //       topic: "Area of polygon",
    //       url: "/",
    //     },
    //     {
    //       topic: "Surface area of a solid shape",
    //       url: "/",
    //     },
    //     {
    //       topic: "Volume of a solid shape",
    //       url: "/",
    //     },
    //     {
    //       topic: "Mixed questions on surface area and volume",
    //       url: "/",
    //     },
    //     {
    //       topic: "Assertion and Reason",
    //       url: "/",
    //     },
    //     {
    //       topic: "Case Study",
    //       url: "/",
    //     },
    //   ],
    // },
    // {
    //   title: "Square and Square Root",
    //   topics: [
    //     {
    //       topic: "No topics",
    //       url: "/",
    //     },
    //   ],
    // },
    // {
    //   title: "Factorisation",
    //   topics: [
    //     {
    //       topic: "Fundamentals of Factorisation",
    //       url: "/",
    //     },
    //     {
    //       topic: "Solve by taking common factors",
    //       url: "/",
    //     },
    //     {
    //       topic: "Solve by re-grouping method",
    //       url: "/",
    //     },
    //     {
    //       topic: "Solve by using Identities",
    //       url: "/",
    //     },
    //     {
    //       topic: "Division of Algebraic Expressions",
    //       url: "/",
    //     },
    //   ],
    // },
  ];
  
  class_8_ScienceArray.forEach((item) => {
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
  