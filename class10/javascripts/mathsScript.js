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





let class_10_MathsArray = [
  {
    title: "Quadratic Equation",
    topics: [
      {
        topic: "Identification of Quadratic Equation",
        url: "/",
      },
      {
        topic: "Formation of quadratic equation",
        url: "/",
      },
      {
        topic: "Solve by factorisation",
        url: "/",
      },
      {
        topic: "Solve by Quadratic Equation",
        url: "/",
      },
      {
        topic: "Word Problems",
        url: "/",
      },
      {
        topic: "Solve by using suitable method",
        url: "/",
      },
      {
        topic: "Nature of roots",
        url: "/",
      },
    ],
  },
  {
    title: "Real Numbers",
    topics: [
      {
        topic: "Divisibility",
        url: "/",
      },
      {
        topic: "Fundamental Theorem of Arithmetic",
        url: "/",
      },
      {
        topic: "Application of fundamental theorem",
        url: "/",
      },
      {
        topic: "Irrationality of numbers",
        url: "/",
      },
      {
        topic: "NCERT",
        url: "/",
      },
    ],
  },
  {
    title: "Polynomials",
    topics: [
      {
        topic: "Relation Between Zeroes and Coefficients",
        url: "/",
      },
      {
        topic: "Using zeros of a quadratic polynomials find the value of given expression",
        url: "/",
      },
      {
        topic: "Concept Builders",
        url: "/",
      },
      {
        topic: "Form a quadratic polynomial using zeros",
        url: "/",
      },
    ],
  },
  {
    title: "Arithmetic Progression",
    topics: [
      {
        topic: "Find unkown terms in an A.P.",
        url: "/",
      },
      {
        topic: "Find the common difference/first term of an A.P.",
        url: "/",
      },
      {
        topic: "nth term of an A.P.",
        url: "/",
      },
      {
        topic: "Sum of n term of an A.P.",
        url: "/",
      },
      {
        topic: "Identification of an AP",
        url: "/",
      },
      {
        topic: "Divisibility and Multiples in an A.P.",
        url: "/",
      },
    ],
  },
  {
    title: "Coordinate geometry",
    topics: [
      {
        topic: "Distance formula",
        url: "/",
      },
      {
        topic: "Section Formula",
        url: "/",
      },
    ],
  },
  {
    title: "Areas Related to Circles",
    topics: [
      {
        topic: "Area of Sector and Segment",
        url: "/",
      },
      {
        topic: "Concept Builders",
        url: "/",
      },
    ],
  },
  {
    title: "Surface area and volume",
    topics: [
      {
        topic: "Surface area of combined solids",
        url: "/",
      },
      {
        topic: "Volume of combined solids",
        url: "/",
      },
    ],
  },
  {
    title: "Pair of linear equation in two variable",
    topics: [
      {
        topic: "Solve by substitution method",
        url: "/",
      },
      {
        topic: "Solve by Elimination Method.",
        url: "/",
      },
      {
        topic: "Nature of lines and consistency",
        url: "/",
      },
      {
        topic: "Word Problems (Situational)",
        url: "/",
      },
    ],
  },
  {
    title: "Trigonometry",
    topics: [
      {
        topic: "Concept Builders",
        url: "/",
      },
      {
        topic: "Trigonometric ratios of specific angles",
        url: "/",
      },
      {
        topic: "Trigonometric Identities",
        url: "/",
      },
      {
        topic: "Prove that...",
        url: "/",
      },
      {
        topic: "NCERT",
        url: "/",
      },
      {
        topic: "NCERT",
        url: "/",
      },
    ],
  },
  {
    title: "Circles",
    topics: [
      {
        topic: "Concept Builders",
        url: "/",
      },
      {
        topic: "Find the measures",
        url: "/",
      },
      {
        topic: "Prove that..",
        url: "/",
      },
      {
        topic: "Assertion and Reason",
        url: "/",
      },
      {
        topic: "Case Study",
        url: "/",
      },
    ],
  },
  {
    title: "Triangles",
    topics: [
      {
        topic: "Basic Proportionality Theorem (Thales Theorem)",
        url: "/",
      },
      {
        topic: "Similarity of Triangles",
        url: "/",
      },
      {
        topic: "Mixed Questions",
        url: "/",
      },
      {
        topic: "Case Study",
        url: "/",
      },
      {
        topic: "Assertion and Reason",
        url: "/",
      },
      {
        topic: "Prove that...",
        url: "/",
      },
    ],
  },
  {
    title: "Probability",
    topics: [
      {
        topic: "Theoretical probability",
        url: "/",
      },
      {
        topic: "Experimental probability",
        url: "/",
      },
      {
        topic: "Concept Builders",
        url: "/",
      },
      {
        topic: "NCERT",
        url: "/",
      },
      {
        topic: "NCERT",
        url: "/",
      },
    ],
  },
  {
    title: "Statistics",
    topics: [
      {
        topic: "Mean",
        url: "/",
      },
      {
        topic: "Mode",
        url: "/",
      },
      {
        topic: "Median",
        url: "/",
      },
      {
        topic: "Mix Questions",
        url: "/",
      },
    ],
  },
  {
    title: "Application of Trigonometry",
    topics: [
      {
        topic: "Height and Distances",
        url: "/",
      },
    ],
  },
  ];
  
  class_10_MathsArray.forEach((item) => {
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