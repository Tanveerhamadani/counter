// let h1 = document.getElementsByClassName("counter"); // Returns Collection
let h1 = document.querySelector(".counter");
let addButton = document.querySelectorAll(".count")[0];
let resetButton = document.querySelectorAll(".count")[1];
let lowerButton = document.querySelectorAll(".count")[2];
let count = 0;

lowerButton.addEventListener("click", () => {
  count++;
  h1.textContent = count;
});

resetButton.addEventListener("click", () => {
  count = 0;
  h1.textContent = 0;
});

addButton.addEventListener("click", () => {
  count--;
  h1.textContent = count;
});
