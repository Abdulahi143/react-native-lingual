import { StyleSheet, Text, View } from "react-native";

type SpeechBubbleProps = {
  /** Text shown inside the bubble. */
  text: string;
  /** Absolute position + rotation classes, e.g. "left-2 top-6 -rotate-6". */
  positionClassName: string;
  /** Background color class shared by the bubble and its tail. */
  bubbleClassName: string;
  /** Text color class. */
  textClassName: string;
  /** Horizontal placement of the tail, e.g. "left-6" or "right-6". */
  tailClassName: string;
};

/**
 * Small rounded chat bubble with a pointed tail, used to decorate the
 * onboarding mascot with greetings in different languages.
 */
export function SpeechBubble({
  text,
  positionClassName,
  bubbleClassName,
  textClassName,
  tailClassName,
}: SpeechBubbleProps) {
  return (
    <View className={`absolute z-10 ${positionClassName}`}>
      <View
        className={`rounded-2xl px-5 py-2.5 ${bubbleClassName}`}
        style={styles.shadow}
      >
        <Text className={`font-poppins-semibold text-base ${textClassName}`}>
          {text}
        </Text>
      </View>
      <View
        className={`absolute -bottom-1 h-4 w-4 rotate-45 rounded-[4px] ${bubbleClassName} ${tailClassName}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    boxShadow: "0px 6px 14px rgba(13, 19, 43, 0.10)",
  },
});
