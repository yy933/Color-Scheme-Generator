import "./style.css";
import { initTheme } from "./theme.js";
import { getColorScheme } from "./services/colorApi.js";
import { renderColors, renderModeOptions } from "./ui/render.js";

const MODE_OPTIONS = [
  "monochrome",
  "monochrome-dark",
  "monochrome-light",
  "analogic",
  "complement",
  "analogic-complement",
  "triad",
  "quad",
];
const modeSelect = document.querySelector("#mode-select");
const colorForm = document.querySelector("#color-form");
const seedColor = document.querySelector("#seed-color");
const getSchemeBtn = document.querySelector("#get-scheme-btn");

function init() {
  initTheme();
  renderModeOptions(modeSelect, MODE_OPTIONS);
  handleFetchScheme();
}

async function handleFetchScheme() {
  try {
    getSchemeBtn.disabled = true; // prevent multiple requests
    const colors = await getColorScheme(seedColor.value, modeSelect.value);
    renderColors(colors);
  } catch (err) {
    console.error("Oops!", err);
    alert(err.message);
  } finally {
    getSchemeBtn.disabled = false;
  }
}

// listen for button click
colorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleFetchScheme();
});

init();
