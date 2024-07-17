// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Change header background color on button click
  const changeColorButton = document.createElement("button");
  changeColorButton.textContent = "Change Header Color";
  document.querySelector("header").appendChild(changeColorButton);

  changeColorButton.addEventListener("click", function () {
    document.querySelector("header").style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  });

  // Smooth scroll to section on nav link click
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
});
