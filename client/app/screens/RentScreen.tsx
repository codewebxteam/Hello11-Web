import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

const PHONE_NUMBER = "918271586892";

const RentScreen = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [Car, setCar] = useState("");
  const [duration, setDuration] = useState("");

  const sendWhatsApp = () => {
    const message = `
Rent Enquiry 🚗
Name: ${name}
Phone: ${phone}
City: ${city}
Car: ${Car}
Duration: ${duration}
    `;
    Linking.openURL(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
    );
  };

  const makeCall = () => {
    Linking.openURL(`tel:${PHONE_NUMBER}`);
  };

  const InputField = ({
    icon,
    placeholder,
    value,
    onChangeText,
    keyboardType,
  }: any) => (
    <View className="flex-row items-center bg-white border border-black/10 rounded-2xl px-4 py-1">
      <Ionicons name={icon} size={20} color="#000" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#555"
        className="flex-1 px-3 py-4 font-semibold text-black text-[15px]"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />

      {/* HEADER */}
      <View className="pt-14 px-6 pb-4 flex-row items-center border-b border-yellow-400">
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text className="ml-4 text-2xl font-black text-black">
          Rent a Car
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView
          className="px-6"
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {/* SUBTEXT */}
          <Text className="text-black/70 mt-6 mb-8 font-medium leading-6">
            Tell us your requirement and we’ll handle the rest.
          </Text>

          {/* FORM CARD */}
          <View className="bg-white rounded-3xl px-5 py-6 border border-black/10">
            <View className="space-y-5">
              <InputField
                icon="person-outline"
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
              />

              <InputField
                icon="call-outline"
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />

              <InputField
                icon="location-outline"
                placeholder="City"
                value={city}
                onChangeText={setCity}
              />

              <InputField
                icon="car-outline"
                placeholder="Car Type"
                value={Car}
                onChangeText={setCar}
              />

              <InputField
                icon="time-outline"
                placeholder="Duration (e.g. 2 Days)"
                value={duration}
                onChangeText={setDuration}
              />
            </View>
          </View>

          {/* CTA SECTION */}
          <View className="mt-10 space-y-5">
            {/* PRIMARY CTA */}
            <TouchableOpacity
              onPress={sendWhatsApp}
              activeOpacity={0.85}
              className="bg-green-600 py-5 rounded-2xl flex-row justify-center items-center"
            >
              <Ionicons name="logo-whatsapp" size={22} color="white" />
              <Text className="text-white text-lg font-black ml-2">
                WhatsApp Enquiry
              </Text>
            </TouchableOpacity>

            {/* SECONDARY CTA */}
            <TouchableOpacity
              onPress={makeCall}
              activeOpacity={0.85}
              className="bg-blue-600 py-5 rounded-2xl flex-row justify-center items-center mt-4"
            >
              <Ionicons name="call-outline" size={20} color="white" />
              <Text className="text-white text-lg font-extrabold ml-2">
                Call Instead
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RentScreen;
