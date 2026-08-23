/**
 * Design system colors — mirrors the `--color-*` tokens defined in `src/global.css`.
 * Use the NativeWind classNames (e.g. `bg-lingua-purple`) wherever possible.
 * Reach for these raw values only where a className can't be used
 * (e.g. StyleSheet-only props, native SVG fills, status bar colors).
 */
export const colors = {
  // Brand / primary
  linguaPurple: "#6C4EF5",
  linguaDeepPurple: "#5B3BF6",
  linguaBlue: "#4D8BFF",
  linguaGreen: "#21C16B",

  // Semantic
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",

  // Neutrals
  textPrimary: "#0D132B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export type ColorToken = keyof typeof colors;
