# Color Scheme Generator
A sleek, accessible, and modular web application that allows users to generate professional color palettes based on a seed color and various mathematical color schemes.

> **See live demo here**: https://getyourcolorscheme.netlify.app/

## 🚀 Features
- **Dynamic Palette Generation**: Leverages The Color API to fetch high-quality schemes.

- **Multiple Modes**: Supports Monochrome, Analogic, Complement, Triad, and more.

- **A11y (Accessibility) First**:

  - Full keyboard navigation support with :focus-visible rings.

  - Screen reader friendly with aria-live regions and descriptive aria-label attributes.

  - Semantic HTML5 structure using `<form>` and `<button>`.

- **Dark Mode Support**: Seamlessly toggle between light and dark themes.

- **Click-to-Copy**: Instantly copy any Hex code to your clipboard by clicking the color column.

- **Responsive Design**: Fluid layout that works on mobile, tablet, and desktop.

## 🛠️ Project Structure
The project follows the Separation of Concerns (SoC) principle to ensure reusability and maintainability:


```
src/
 ┣ services/
 ┃ ┗ colorApi.js    # API communication logic (Fetch)
 ┣ ui/
 ┃ ┗ render.js      # Pure UI rendering functions (HTML generation)
 ┣ main.js          # App controller & Event listeners
 ┣ theme.js         # Dark/Light mode logic
 ┗ style.css        # Global styles & Variable definitions
 ```

## 📦 Installation & Setup
This project is built with Vite.

- Clone the repository:
`git clone https://github.com/yy933/Color-Scheme-Generator`

- Navigate into the directory:
`cd color-scheme-generator`

- Install dependencies:
`npm install`

- Start the development server:
`npm run dev`

## 🖥️ Usage
- Select your preferred Seed Color using the color picker.

- Choose a Mode (e.g., Analogic, Triad) from the dropdown menu.

- Click "Get Color Scheme" or simply press Enter.

- Click on any color column to copy the Hex code to your clipboard.

## 🔧 Technical Highlights
- **Modular JS**: Logic is decoupled. The API service doesn't know about the DOM, and the UI renderer doesn't know about the API.

- **Event Delegation**: Efficient event handling for dynamically generated color columns.

- **CSS Variables**: Easy-to-manage theme switching using `:root` and `[data-theme="dark"]`.

- **Async/Await**: Clean asynchronous flow for network requests.


## 💡 Future Improvements
[ ] Allow users to choose the number of colors generated (count).

[ ] Implement a "Saved Schemes" feature using LocalStorage.