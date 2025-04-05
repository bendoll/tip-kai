const btn20 = document.getElementById("btn-20");
const btn22 = document.getElementById("btn-22");
const btn25 = document.getElementById("btn-25");
const btnNone = document.getElementById("btn-none");
const btnReset = document.getElementById("btn-reset");
const btnCustom = document.getElementById("btn-custom");
const btnCustomSubmit = document.getElementById("btn-custom-submit");
const btnCustomCancel = document.getElementById("btn-custom-cancel");
const stateNoTip = document.getElementById("state-no-tip");
const stateTipped = document.getElementById("state-tipped");
const statePrompt = document.getElementById("state-prompt");
const stateCustom = document.getElementById("state-custom");

function handleTip() {
  stateTipped.style.display = "flex";
  btnReset.style.display = "flex";
  statePrompt.style.display = "none";
  stateCustom.style.display = "none";
}

function handleNoTip() {
  statePrompt.style.display = "none";
  stateNoTip.style.display = "flex";
  btnReset.style.display = "flex";
  stateCustom.style.display = "none";
}

function handleReset() {
  statePrompt.style.display = "flex";
  stateNoTip.style.display = "none";
  stateTipped.style.display = "none";
  stateCustom.style.display = "none";
  btnReset.style.display = "none";
}

function handleCustom() {
  statePrompt.style.display = "none";
  stateCustom.style.display = "flex";
  const customValue = parseFloat(customInput.value);
  if (isNaN(customValue) || customValue <= 0) {
    alert("Please enter a valid tip percentage.");
    return;
  }
}

btn20.addEventListener("click", handleTip);
btn22.addEventListener("click", handleTip);
btn25.addEventListener("click", handleTip);
btnNone.addEventListener("click", handleNoTip);
btnReset.addEventListener("click", handleReset);
btnCustom.addEventListener("click", handleCustom);
btnCustomCancel.addEventListener("click", handleReset);
btnCustomSubmit.addEventListener("click", handleTip);
