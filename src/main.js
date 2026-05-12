import "./style.css";
import { initTheme } from "./theme.js";

// initialize theme
initTheme();

const modeOptions = [
  "monochrome",
  "monochrome-dark",
  "monochrome-light",
  "analogic",
  "complement",
  "analogic-complement",
  "triad",
  "quad",
];
const modeSelect = document.getElementById("mode-select");
function renderModeOptions() {
  const modeOptionsHtml = modeOptions
    .map((option) => {
      let displayOption = option.replace(/-/g, " ");
      displayOption =
        displayOption.charAt(0).toUpperCase() + displayOption.slice(1);
      return `<option value="${option}">${displayOption}</option>`;
    })
    .join("");
  modeSelect.innerHTML = modeOptionsHtml;
}

renderModeOptions();
