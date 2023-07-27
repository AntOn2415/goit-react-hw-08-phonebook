export const getRandomHexColor = () => {
  const minChannelValue = 40; // Adjust this value to control the minimum brightness of the color

  let randomColor;
  do {
    randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;

    // Parse the color to get individual RGB channel values
    const r = parseInt(randomColor.substring(1, 3), 10);
    const g = parseInt(randomColor.substring(3, 5), 16);
    const b = parseInt(randomColor.substring(5, 7), 8);

    // Check if any channel is below the minimum threshold
    if (r < minChannelValue || g < minChannelValue || b < minChannelValue) {
      continue; // Regenerate a new color if any channel is too low
    }

    // Combine the RGB channels and convert back to hex format
    randomColor = `#${((r << 16) | (g << 8) | b)
      .toString(16)
      .padStart(6, '0')}`;
  } while (!randomColor);

  return randomColor;
};
