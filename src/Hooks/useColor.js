import { useState, useEffect } from "react";

function hexToRgb(color) {
  const colors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  return colors
    ? {
        r: parseInt(colors[1], 16),
        g: parseInt(colors[2], 16),
        b: parseInt(colors[3], 16),
      }
    : null;
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(color) {
  const v = color !== null ? color.trim().split("(") : null;
  const values = v !== null ? v[1].trim().split(")") : null;
  const colors = values !== null ? values[0].trim().split(",") : null;
  return colors !== null && colors.length >= 3
    ? "#" +
        componentToHex(parseInt(colors[0])) +
        componentToHex(parseInt(colors[1])) +
        componentToHex(parseInt(colors[2]))
    : null;
}

export default function useColor(HEX = null, RGB = null) {
  const [colorRGB, setColorRGB] = useState(null);
  const [colorHEX, setColorHEX] = useState(null);

  useEffect(() => {
    setColorRGB(hexToRgb(HEX));
    setColorHEX(rgbToHex(RGB));
  }, [HEX, RGB]);

  return [colorRGB, colorHEX];
}
