import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Text, View } from "../components/Themed";
import { setToken, setUser } from "../store/actions";
import { RootStackScreenProps } from "../types";

export default function NotFoundScreen({ navigation }: RootStackScreenProps<"NotFound">) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        onPress={() => {
          dispatch(setToken(null));
          dispatch(setUser(null));
        }}>
        Logout
      </Text>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.navigate("BottomTab")} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
