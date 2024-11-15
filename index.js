document.getElementById("menu").addEventListener("click", () => {
  let x = document.querySelector(".right");
  if (x.className === "right") {
    x.className += " responsive";
  } else {
    x.className = "right";
  }
});
