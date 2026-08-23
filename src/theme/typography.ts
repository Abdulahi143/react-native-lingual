/**
 * Design system typography — mirrors the `font-*` tokens and the
 * `h1`/`h2`/`h3`/`h4`/`body-lg`/`body-md`/`body-sm`/`caption` utilities
 * defined in `src/global.css`.
 * Use the NativeWind classNames wherever possible. Reach for these raw values
 * only where a className can't be used (e.g. StyleSheet-only props).
 */
export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

// fontSize / lineHeight are in px. Ratios come from the design system
// (e.g. H1 is 32px / 1.2 line-height -> 38.4px).
export const typeScale = {
  heading1: { fontFamily: fontFamily.bold, fontSize: 32, lineHeight: 38.4 },
  heading2: { fontFamily: fontFamily.semiBold, fontSize: 24, lineHeight: 31.2 },
  heading3: { fontFamily: fontFamily.semiBold, fontSize: 20, lineHeight: 26 },
  heading4: { fontFamily: fontFamily.medium, fontSize: 16, lineHeight: 22.4 },
  bodyLarge: { fontFamily: fontFamily.regular, fontSize: 16, lineHeight: 25.6 },
  bodyMedium: { fontFamily: fontFamily.regular, fontSize: 14, lineHeight: 22.4 },
  bodySmall: { fontFamily: fontFamily.regular, fontSize: 13, lineHeight: 20.8 },
  caption: { fontFamily: fontFamily.regular, fontSize: 11, lineHeight: 15.4 },
} as const;

export type TypeScaleToken = keyof typeof typeScale;
