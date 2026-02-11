import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });

  // 🔥 LOAD SAVED PROFILE
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");

        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);

          setUserInfo({
            name: parsedUser.name || "",
            email: parsedUser.email || "",
            phone: parsedUser.phone || parsedUser.mobile || "",
            gender: parsedUser.gender || "",
          });
        }
      } catch (error) {
        console.log("Error loading user:", error);
      }
    };

    loadUser();
  }, []);

  // 🔥 VALIDATION
  const validateForm = () => {
    if (!userInfo.name.trim()) {
      Alert.alert("Validation Error", "Name cannot be empty");
      return false;
    }

    if (userInfo.email && !/^\S+@\S+\.\S+$/.test(userInfo.email)) {
      Alert.alert("Validation Error", "Enter a valid email address");
      return false;
    }

    return true;
  };

  // 🔥 SAVE PROFILE LOCALLY
  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      // Save to AsyncStorage
      await AsyncStorage.setItem("user", JSON.stringify(userInfo));

      setLoading(false);
      setIsEditing(false);

      Alert.alert("Success", "Profile updated successfully");
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", "Failed to save profile");
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");

    router.replace("/");
  };

  const renderField = (
    label: string,
    key: keyof typeof userInfo,
    icon: string,
    isReadOnly: boolean = false,
    keyboardType: "default" | "email-address" | "phone-pad" = "default",
  ) => {
    const value = userInfo[key];
    const isEmpty = !value || value.trim() === "";

    return (
      <View className="mb-5">
        <View className="flex-row items-center mb-2 ml-1">
          <Ionicons name={icon as any} size={18} color="#94A3B8" />
          <Text className="text-slate-400 text-xs font-bold uppercase ml-2 tracking-wider">
            {label}
          </Text>
        </View>

        {isEditing && !isReadOnly ? (
          key === "gender" ? (
            <View className="bg-slate-50 border border-slate-200 rounded-2xl px-2">
              <Picker
                selectedValue={userInfo.gender}
                onValueChange={(itemValue) =>
                  setUserInfo({ ...userInfo, gender: itemValue })
                }
              >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
          ) : (
            <TextInput
              value={userInfo[key]}
              onChangeText={(text) =>
                setUserInfo({ ...userInfo, [key]: text })
              }
              className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 font-semibold text-base"
              keyboardType={keyboardType}
              placeholder={`Enter ${label.toLowerCase()}`}
              placeholderTextColor="#CBD5E1"
            />
          )
        ) : (
          <View
            className={`bg-white border border-slate-100 rounded-2xl px-5 py-4 ${
              isEmpty ? "opacity-60" : ""
            } shadow-sm`}
          >
            <Text
              className={`text-base font-bold ${
                isEmpty ? "text-slate-400 italic" : "text-slate-800"
              }`}
            >
              {isEmpty ? `No ${label.toLowerCase()} added` : value}
            </Text>

            {isReadOnly && (
              <View className="absolute right-4 top-4 opacity-30">
                <Ionicons name="lock-closed" size={16} color="#64748B" />
              </View>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar style="dark" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="bg-[#FFD700] pt-12 pb-24 rounded-b-[40px] relative">
            <View className="px-6 flex-row justify-between items-center">
              <TouchableOpacity
                onPress={() => router.replace("/screens/HomeScreen")}
                className="bg-white/60 p-2 rounded-xl"
              >
                <Ionicons name="arrow-back" size={22} color="black" />
              </TouchableOpacity>

              <Text className="text-xl font-black text-slate-800">
                Profile
              </Text>

              <TouchableOpacity
                disabled={loading}
                onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
                className="px-4 py-2 bg-slate-900 rounded-full"
              >
                {loading ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <Text className="font-bold text-white text-xs uppercase">
                    {isEditing ? "Save" : "Edit"}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Content */}
          <View className="px-6 -mt-16">
            {/* Avatar */}
            <View className="items-center mb-6">
              <View className="w-28 h-28 bg-white rounded-[30px] justify-center items-center shadow-lg border-4 border-white">
                <Text className="text-5xl font-black text-slate-800">
                  {userInfo.name
                    ? userInfo.name.charAt(0).toUpperCase()
                    : "U"}
                </Text>
              </View>
            </View>

            {/* Name + Phone */}
            <View className="items-center mb-8">
              <Text className="text-2xl font-black text-slate-800">
                {userInfo.name || "Your Name"}
              </Text>
              <Text className="text-slate-500 font-medium">
                {userInfo.phone || "No phone added"}
              </Text>
            </View>

            {/* Details Card */}
            <View className="bg-white p-6 rounded-[30px] shadow-sm mb-6">
              <Text className="text-lg font-extrabold text-slate-800 mb-6">
                Personal Details
              </Text>

              {renderField("Full Name", "name", "person-outline")}
              {renderField("Phone Number", "phone", "call-outline", true)}
              {renderField(
                "Email Address",
                "email",
                "mail-outline",
                false,
                "email-address",
              )}
              {renderField("Gender", "gender", "people-outline")}
            </View>

            {/* Logout */}
            <TouchableOpacity
              onPress={handleLogout}
              className="flex-row items-center justify-center bg-white py-4 rounded-2xl shadow-sm border border-red-50 active:bg-red-50 mb-8"
            >
              <Ionicons
                name="log-out-outline"
                size={20}
                color="#EF4444"
                style={{ marginRight: 8 }}
              />
              <Text className="text-red-500 font-bold text-base">
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ProfileScreen;
