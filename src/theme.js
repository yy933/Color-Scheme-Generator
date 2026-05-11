export function initTheme() {
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  // set theme
  const setTheme = (theme) => {
    htmlElement.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
    }
  };

  // initialize with light theme
  setTheme("light");

  // listen for theme toggle
  themeToggle?.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const targetTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(targetTheme);
  });
}
