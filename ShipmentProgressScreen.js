import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg"; // Import QRCode

export default function ShipmentProgressScreen() {
  const navigation = useNavigation();

  // State to store the data for the QR code (replace with your actual cargo details)
  const [qrCodeData, setQrCodeData] = useState(null);
  const cargoDetails = {
    date: "31/10/2024",
    plateNo: "RA123",
    eirNo: "LKJ4356",
    containerVanNo: "W46576",
    size: "20DC",
    shipperConsignee: "Century Pacific Food",
    voyageVessel: "LCDM",
    no: "23457",
    pickupLocation: "CYVTA",
    deliveryLocation: "MNLP16",
    status: "In Transit",
  };

  // Function to generate the QR code data
  const generateQRCode = () => {
    // Combine cargo details into a string or object
    const dataString = JSON.stringify(cargoDetails);
    setQrCodeData(dataString);
  };

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
        <Text style={styles.headerTitle}>Shipment Progress</Text>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate("ProfileManagement")}
        >
          <Ionicons name="person-circle-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Shipment Progress Content */}
      <View style={styles.progressContent}>
        {/* Progress Steps */}
        <View style={styles.progressSteps}>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>1</Text>
            <Text style={styles.stepLabel}>Pending</Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.stepLabel}>In Transit</Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>3</Text>
            <Text style={styles.stepLabel}>Delivered</Text>
          </View>
        </View>

        {/* Cargo Details */}
        <View style={styles.cargoDetails}>
          <Text style={styles.cargoTitle}>Cargo Details</Text>

          {/* Generate QR Code Button (Conditional Text) */}
          <TouchableOpacity
            style={styles.generateButton}
            onPress={qrCodeData ? () => setQrCodeData(null) : generateQRCode}
          >
            <Text style={styles.generateButtonText}>
              {qrCodeData ? "QR Code" : "Generate QR Code"}
            </Text>
          </TouchableOpacity>

          <Text style={styles.cargoText}>Date: {cargoDetails.date}</Text>
          <Text style={styles.cargoText}>
            Plate No.: {cargoDetails.plateNo}
          </Text>
          <Text style={styles.cargoText}>EIR No.: {cargoDetails.eirNo}</Text>
          <Text style={styles.cargoText}>
            Container Van No.: {cargoDetails.containerVanNo}
          </Text>
          <Text style={styles.cargoText}>Size: {cargoDetails.size}</Text>
          <Text style={styles.cargoText}>
            Shipper/Consignee: {cargoDetails.shipperConsignee}
          </Text>
          <Text style={styles.cargoText}>
            Voyage Vessel: {cargoDetails.voyageVessel}
          </Text>
          <Text style={styles.cargoText}>No.: {cargoDetails.no}</Text>
          <Text style={styles.cargoText}>
            Pickup Location: {cargoDetails.pickupLocation}
          </Text>
          <Text style={styles.cargoText}>
            Delivery Location: {cargoDetails.deliveryLocation}
          </Text>
          <Text style={styles.cargoText}>Status: {cargoDetails.status}</Text>

          {/* Display QR Code (conditionally) */}
          {qrCodeData && (
            <View style={styles.qrCodeContainer}>
              <QRCode
                value={qrCodeData}
                size={200} // Adjust size as needed
                color="black"
                backgroundColor="white"
              />
            </View>
          )}
        </View>
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
  progressContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  progressSteps: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  step: {
    alignItems: "center",
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#ddd",
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: "center",
    lineHeight: 40,
    marginBottom: 5,
  },
  stepLabel: {
    fontSize: 14,
  },
  cargoDetails: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 5,
    position: "relative", // Relative positioning for absolute button
  },
  cargoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cargoText: {
    fontSize: 14,
    marginBottom: 5,
  },
  generateButton: {
    backgroundColor: "#19284D",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    position: "absolute", // Absolute positioning
    top: 10, // Adjust as needed
    right: 10, // Adjust as needed
    zIndex: 1, // Ensure it's on top
  },
  generateButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
  qrCodeContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});
