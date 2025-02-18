import ThemedView from "@/presentation/shared/ThemedView";
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <ThemedView margin>
          <ThemedTextInput
            value={form.name}
            onChangeText={(name) => setForm({ ...form, name })}
            placeholder={"Name"}
            autoCorrect={false}
          />

          <ThemedTextInput
            value={form.email}
            onChangeText={(email) => setForm({ ...form, email })}
            placeholder={"Email"}
            autoCorrect={false}
            keyboardType={"email-address"}
          />

          <ThemedTextInput
            placeholder={"Phone"}
            value={form.phone}
            onChangeText={(phone) => setForm({ ...form, phone })}
            autoCorrect={false}
            keyboardType={"phone-pad"}
          />

          <ThemedCard>
            <ThemedText type={"link"}>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
