const btn20 = document.getElementById("btn-20");
const btn22 = document.getElementById("btn-22");
const btn25 = document.getElementById("btn-25");
const btnNone = document.getElementById("btn-none");
const btnReset = document.getElementById("btn-reset");

const stateNoTip = document.getElementById("state-no-tip");
const stateTipped = document.getElementById("state-tipped");
const statePrompt = document.getElementById("state-prompt");

const containerReset = document.getElementById("reset-btn-container");

function handleTip() {
  statePrompt.style.display = "none";
  stateTipped.style.display = "flex";
  containerReset.style.display = "flex";
}

function handleNoTip() {
  statePrompt.style.display = "none";
  stateNoTip.style.display = "flex";
  containerReset.style.display = "flex";
}

function handleReset() {
  stateNoTip.style.display = "none";
  stateTipped.style.display = "none";
  statePrompt.style.display = "flex";
  containerReset.style.display = "none";
}

btn20.addEventListener("click", handleTip);
btn22.addEventListener("click", handleTip);
btn25.addEventListener("click", handleTip);
btnNone.addEventListener("click", handleNoTip);
btnReset.addEventListener("click", handleReset);
