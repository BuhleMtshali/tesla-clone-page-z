document.getElementById("menu").addEventListener("click", () => {
  let x = document.querySelector(".right");
  if (x.className === "right") {
    x.className += " responsive";
  } else {
    x.className = "right";
  }
});

// function for background page
function changeBackgroundImage() {
  //element i'm changing
  let sectionElement = document.querySelector(".one");

  //array with images
  const images = [
    "url(images/tesla-section-1-bg.avif)",
    "url(images/tesla-section-1-slide-2.avif)",
  ];

  //index for the images
  let currentIndex = 0;

  //interval function
  setInterval(() => {
    sectionElement.style.backgroundImage = images[currentIndex];

    //toggling between images
    currentIndex = (currentIndex + 1) % images.length;
  }, 60000);
}

//calling the function
changeBackgroundImage();
