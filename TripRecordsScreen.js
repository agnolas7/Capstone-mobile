import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TripRecordsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trip Records</Text>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate("ProfileManagement")}
        >
          <Ionicons name="person-circle-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text>Trip Records Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
    top: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  menuButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
