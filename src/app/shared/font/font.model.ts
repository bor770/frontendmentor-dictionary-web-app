export const fonts = [`Sans Serif`, `Serif`, `Mono`] as const;

export type Font = (typeof fonts)[number];
