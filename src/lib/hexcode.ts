type TagColorResponse = {
  tag: string;
  bgColor: string; // rgba with 0.5 opacity
  textColor: string; // same RGB with 0 opacity
};

function stringToHex(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color =
    ((hash >> 24) & 0xff).toString(16).padStart(2, "0") +
    ((hash >> 16) & 0xff).toString(16).padStart(2, "0") +
    ((hash >> 8) & 0xff).toString(16).padStart(2, "0");
  return `#${color}`;
}

function hexToRGB(hex: string): { r: number; g: number; b: number } {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

export function generateTagColorResponse(tags: string[]): TagColorResponse[] {
  return tags.map((tag) => {
    const hex = stringToHex(tag);
    const { r, g, b } = hexToRGB(hex);
    return {
      tag,
      bgColor: `rgba(${r}, ${g}, ${b}, 0.06)`,
      textColor: `rgba(${r}, ${g}, ${b}, 1)`,
    };
  });
}
