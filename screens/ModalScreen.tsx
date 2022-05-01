import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import React from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { View } from "../components/Themed";
import { Button } from "native-base";
import { removeItem } from "../untils/storage";
import { REFRESH_TOKEN, TOKEN } from "../constants/storage";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../store/actions";

export default function ModalScreen() {
  const dispatch = useDispatch();
  const login = async () => {
    await removeItem(TOKEN);
    await removeItem(REFRESH_TOKEN);
    dispatch(setUser(null));
    dispatch(setToken(null));
  };
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />
      <Button onPress={login}>Login</Button>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
