import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-background p-6">
      <Text className="h4 text-text-primary">Luuqad</Text>

      <Link href="/onboarding" asChild>
        <TouchableOpacity
          activeOpacity={0.9}
          className="rounded-2xl bg-lingua-deep-purple px-6 py-3"
        >
          <Text className="font-poppins-semibold text-white">
            Open onboarding
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
