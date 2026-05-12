const resultsContainer = document.querySelector(".results");

export function renderColors(colorsArray) {
  resultsContainer.innerHTML = colorsArray
    .map(
      (color, index) => `
      <button 
        class="color-column" 
        aria-label="Color ${index + 1}: ${color}. Click to copy hex code."
        style="background-color: ${color}"
        data-hex="${color}"
      >
        <span class="color-hex" aria-hidden="true">${color}</span>
      </button>
    `,
    )
    .join("");
}

export function renderModeOptions(modeSelect, options) {
  modeSelect.innerHTML = options
    .map((option) => {
      const displayText = option
        .replace(/-/g, " ")
        .replace(/^\w/, (text) => text.toUpperCase());
      return `<option value="${option}">${displayText}</option>`;
    })
    .join("");
}
