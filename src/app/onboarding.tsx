import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { SpeechBubble } from "@/components/speech-bubble";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 pb-4 pt-3">
        <View className="px-8">
          {/* Logo */}
          <View className="flex-row items-center justify-center gap-x-2">
            <View className="h-12 w-12">
              <Image
                source={images.mascotLogo}
                resizeMode="contain"
                style={styles.fill}
              />
            </View>
            <Text className="font-poppins-bold text-[28px] text-text-primary">
              Luuqad
            </Text>
          </View>

          {/* Headline */}
          <View className="mt-12">
            <Text className="font-poppins-bold text-3xl leading-tight text-text-primary">
              Your AI language{"\n"}
              <Text className="text-lingua-deep-purple">teacher.</Text>
            </Text>
            <Text className="body-md mt-3 max-w-64 text-text-secondary">
              Real conversations, personalized lessons, anytime, anywhere.
            </Text>
          </View>
        </View>

        {/* Mascot + greetings (full-bleed) */}
        <View className="relative flex-1 items-center justify-center pb-16">
          <View className="relative aspect-square w-full max-w-80">
            <Image
              source={images.mascotWelcome}
              resizeMode="contain"
              style={styles.fill}
            />

            <SpeechBubble
              text="Hello!"
              positionClassName="left-4 top-4 -rotate-6"
              bubbleClassName="bg-[#EFF6FD]"
              textClassName="text-text-primary"
              tailClassName="right-6"
            />
            <SpeechBubble
              text="¡Hola!"
              positionClassName="right-1 -top-3 rotate-6"
              bubbleClassName="bg-[#F6F6FD]"
              textClassName="text-[#0000EF]"
              tailClassName="left-6"
            />
            <SpeechBubble
              text="你好!"
              positionClassName="right-0 top-24 -rotate-3"
              bubbleClassName="bg-[#FCF3EE]"
              textClassName="text-[#E70000]"
              tailClassName="left-6"
            />
          </View>
        </View>

        {/* CTA */}
        <View className="px-8">
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => router.replace("/")}
            className="h-16 flex-row items-center justify-center rounded-[28px] bg-lingua-deep-purple"
            style={styles.cta}
          >
            <Text className="font-poppins-semibold text-[17px] text-white">
              Get Started
            </Text>
            <View className="absolute right-6 h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  fill: {
    width: "100%",
    height: "100%",
  },
  cta: {
    boxShadow: "0px 12px 24px rgba(91, 59, 246, 0.35)",
  },
});
