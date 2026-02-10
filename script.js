const buttonsContainer = document.querySelector(".buttons-container");
const firstButton = document.querySelector(".first-button");
const secondButton = document.querySelector(".second-button");
const thirdButton = document.querySelector(".third-button");
const fourthButton = document.querySelector(".fourth-button");
const secretContainer = document.querySelector(".secret-container");
const secretText = document.querySelector(".secret-text");

firstButton.addEventListener("click", () => {
  console.log("First button clicked");
  secondButton.classList.add("button-show");
  firstButton.classList.add("button-hide");
});

secondButton.addEventListener("click", () => {
  console.log("Second button clicked");
  thirdButton.classList.add("button-show");
  secondButton.classList.add("button-hide");
});

thirdButton.addEventListener("click", () => {
  console.log("Third button clicked");
  thirdButton.classList.add("button-hide");
  fourthButton.classList.add("button-show");
});

fourthButton.addEventListener("click", () => {
  console.log("Fourth button clicked");
  fourthButton.classList.add("button-hide");
  secretContainer.classList.add("secret-container-show");
  secretText.classList.add("secret-text-show");
  buttonsContainer.style.display = "none";
});
