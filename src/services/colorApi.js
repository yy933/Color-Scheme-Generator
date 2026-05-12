const BASE_URL = "https://www.thecolorapi.com/scheme";

export async function getColorScheme(hex, mode, count = 5) {

  const cleanHex = hex.replace("#", "");
  const response = await fetch(
    `${BASE_URL}?hex=${cleanHex}&mode=${mode}&count=${count - 1}`,
  );

  if (!response.ok) throw new Error("Failed to fetch color scheme");

  const data = await response.json();

  // merge seed color with colors
  return [data.seed.hex.value, ...data.colors.map((color) => color.hex.value)];
}
