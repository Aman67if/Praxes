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




let class_9_MathsArray = [
  {
    title: "Herons Formula",
    topics: [
      {
        topic: "Notes",
        url: "/",
      },
      {
        topic: "Concept Builders",
        url: "/",
      },
      {
        topic: "Area of Triangle",
        url: "/",
      },
      {
        topic: "Area of equilateral triangle",
        url: "/",
      },
      {
        topic: "Area of isosceles triangle",
        url: "/",
      },
      {
        topic: "Area of quadrilaterals",
        url: "/",
      },
      {
        topic: "Assertion and Reasoning",
        url: "/",
      },
      {
        topic: "Case Study",
        url: "/",
      },
    ],
  },
  {
    title: "Number System",
    topics: [
      {
        topic: "Fundamental of Number System",
        url: "/",
      },
      {
        topic: "Express in simplest fraction from (p/q)",
        url: "/",
      },
      {
        topic: "Operation on Irrational number",
        url: "/",
      },
      {
        topic: "Rationalise the denominator",
        url: "/",
      },
    ],
  },
  {
    title: "Polynomials",
    topics: [
      {
        topic: "Recognizing polynomials",
        url: "/",
      },
      {
        topic: "Recognizing Terms & Coefficients of a Polynomial",
        url: "/",
      },
      {
        topic: "Recognizing degree of polynomial & multivarient polynomial",
        url: "/",
      },
      {
        topic: "Express the polynomial in standard form",
        url: "/",
      },
    ],
  },
  {
    title: "Lines and Angle",
    topics: [
      {
        topic: "Different types of angles",
        url: "/",
      },
      {
        topic: "Angle Relations",
        url: "/",
      },
      {
        topic: "Parallel Lines and a transversal",
        url: "/",
      },
      {
        topic: "Assertion and Reasoning",
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
        topic: "Types of Triangle",
        url: "/",
      },
      {
        topic: "Properties of Triangle",
        url: "/",
      },
      {
        topic: "Congruency of triangles",
        url: "/",
      },
      {
        topic: "Assertion and Reasoning",
        url: "/",
      },
      {
        topic: "Case Study",
        url: "/",
      },
      {
        topic: "Concept Builders",
        url: "/",
      },
    ],
  },
  {
    title: "Co-Ordinate Geometry",
    topics: [
      {
        topic: "Cartesian System",
        url: "/",
      },
    ],
  },
  {
    title: "Linear Equation in two variable",
    topics: [
      {
        topic: "Formation of Linear Equation",
        url: "/",
      },
      {
        topic: "Solution of Linear Equation",
        url: "/",
      },
    ],
  },
  {
    title: "Quadrilaterals",
    topics: [
      {
        topic: "Midpoint Theorem",
        url: "/",
      },
      {
        topic: "Prove that...",
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
      {
        topic: "Find the measure of angles",
        url: "/",
      },
      {
        topic: "Concept Builders",
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
        topic: "Solve by using theorems",
        url: "/",
      },
      {
        topic: "Cyclic Quadrilaterals",
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
      {
        topic: "Find the measure of angles",
        url: "/",
      },
      {
        topic: "Prove that...",
        url: "/",
      },
    ],
  },
  {
    title: "Surface Area and Volume",
    topics: [
      {
        topic: "Surface Area of a Right Circular Cone",
        url: "/",
      },
      {
        topic: "Surface Area of a Sphere",
        url: "/",
      },
      {
        topic: "Volume of Right Circular Cone",
        url: "/",
      },
      {
        topic: "Volume of a Sphere",
        url: "/",
      },
    ],
  },
  {
    title: "Euclid's Geometry",
    topics: [
      {
        topic: "Euclid's Geometry",
        url: "/",
      },
    ],
  },
  ];
  
  class_9_MathsArray.forEach((item) => {
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