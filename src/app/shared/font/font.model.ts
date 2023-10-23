export const fonts = [`Sans Serif`, `Serif`, `Mono`] as const;

export type Font = (typeof fonts)[number];

export const fontCssName = (fontName: Font) =>
  `var(--font-family-${fontName.toLowerCase().split(` `).join(`-`)})`;
