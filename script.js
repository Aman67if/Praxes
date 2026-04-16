var openOrClose = 0;
const menuOpenClose = document.querySelector(".menu-open-close");
const menuImg = document.querySelector(".menuImg");
menuContainer = document.querySelector(".mobile-menu-container");

menuOpenClose.addEventListener("click", () => {
  if (openOrClose == 0) {
    menuImg.src = "/src/svg/close.svg";
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
    menuImg.src = "/src/svg/menu.svg";
    openOrClose = 0;
    gsap.to("#mobile-menu", {
      height: "0rem",
      display: "none",
      opacity: 0,
      duration: 0.37,
    });
    setTimeout(() => {
      menuContainer.style.display = "none";
    }, 400);
  }
});

// let subscriptions = [
//   {
//     price: "201",
//     title: "Shapes",
//     subTitle: "EXP 1",
//     url: "/",
//   },
//   {
//     price: "201",
//     title: "Shapes",
//     subTitle: "EXP 1",
//     url: "/",
//   },
//   {
//     price: "201",
//     title: "Shapes",
//     subTitle: "EXP 1",
//     url: "/",
//   },
// ];

/* subscriptions.forEach((item) => {
    document.querySelector(
      ".subscription-cards"
    ).innerHTML += `<div class="subscription-card">
          <div class="price">
            <h4>INR ${item.price} /-</h4>
          </div>
          <h2 class="chapter">${item.title}</h2>
          <h4 class="sub-topic">${item.subTitle}</h4>
          <a href="${item.url}"><button class="join-btn">Join Class</button></a>
        </div>`;
  }); */
