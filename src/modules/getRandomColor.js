const getRandomColor = function(max, bool) {
  // Returns only a hue value if true - seems like a bad decision
  if (bool) {
    return Math.floor(Math.random() * max);
  }
  let hue = Math.floor(Math.random() * max);
  let saturation = Math.floor(Math.random() * 100);
  let lightness = Math.floor(Math.random() * 100);
  return `hsl(${hue}, ${saturation}%, ${lightness})`
}

export default getRandomColor;
