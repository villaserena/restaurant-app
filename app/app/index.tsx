import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Main content */}
      <View style={styles.main}>
        <Text>Hello! This is so awesome</Text>
      </View>

      {/* Bottom bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bigPlusButton}>
          <Ionicons name="add" size={32} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="play-outline" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bigPlusButton: {
    width: 60,
    height: 60,
    backgroundColor: "#000",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
