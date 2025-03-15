import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simple login logic
    if (username === "manager" && password === "manager123") {
      navigation.navigate("Main", { role: "operations_manager" });
    } else if (username === "driver" && password === "driver123") {
      navigation.navigate("Main", { role: "driver" });
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.content}>
          <Text style={styles.title}>SYA</Text>
          <Text style={styles.title}>TRUCKING SERVICES</Text>
          <Text style={styles.since}>SINCE 2018</Text>

          <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>Login</Text>

            <TextInput
              style={styles.input}
              placeholder="USERNAME"
              placeholderTextColor="#888"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="PASSWORD"
              placeholderTextColor="#888"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: "#2a364e",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    top: 80,
  },
  subtitle: {
    fontSize: 20,
    color: "white",
  },
  since: {
    fontSize: 14,
    color: "white",
    marginBottom: 40,
    top: 80,
  },
  loginContainer: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 40,
    width: "110%",
    height: "80%",
    top: 80,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  loginSubtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#888",
    top: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    top: 60,
  },
  errorText: {
    color: "red",
    marginBottom: 15,
    top: 60,
  },
  loginButton: {
    backgroundColor: "#2a364e", // Dark background color
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    top: 60,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
