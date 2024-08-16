const hexBox = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorEL = document.querySelector("#color-code");
const flipBtn = document.querySelector("#flip-button");
flipBtn.addEventListener("click", () => {
  let newHex = "#";
  for (let i = 0; i < 6; i++) {
    newHex += hexBox[randomHex()];
  }
  colorEL.textContent = newHex;
  document.body.style.backgroundColor = newHex;
});
const randomHex = () => {
  return Math.floor(Math.random() * hexBox.length);
};
