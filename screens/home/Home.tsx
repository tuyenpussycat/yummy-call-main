import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootTabParamList, RootTabScreenProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import homeStyle from "./homeStyle";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { ToastProvider, useTheme } from "native-base";
import TabViewExample from "../../navigation/TopTabNavigator";
export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const { user } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const image = { uri: "https://reactjs.org/logo-og.png" };
  console.log(user);
  const BottomTab = createBottomTabNavigator<RootTabParamList>();
  const { colors } = useTheme();
  return (
    <View style={{ width: "30%", marginHorizontal: "auto" }} darkColor="white">
      <TabViewExample></TabViewExample>
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
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 15,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "left",
  },
});
function handleRegister() {
  throw new Error("Function not implemented.");
}
