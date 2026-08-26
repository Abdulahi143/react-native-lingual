/**
 * Type declarations for static image assets imported into the app,
 * e.g. `import mascot from "@/assets/images/mascot.png"`.
 * Metro bundles these to a number/URI that React Native's `Image` accepts.
 */
declare module "*.png" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}

declare module "*.jpg" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}

declare module "*.jpeg" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}

declare module "*.webp" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}

declare module "*.gif" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}
