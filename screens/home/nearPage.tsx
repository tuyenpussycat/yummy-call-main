import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootTabParamList, RootTabScreenProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import homeStyle from "./homeStyle";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Box, ToastProvider, useTheme } from "native-base";
import TabViewExample from "../../navigation/TopTabNavigator";
export default function Near() {
  const { user } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const image = {
    uri: "https://hoanghaistore.com/hinh-anh-hot-girl-18-tuoi/imager_25618.jpg",
  };
  const image1 = {
    uri: "https://chieuta.com/wp-content/uploads/2018/01/anh-girl-xinh-mac-vay-ngan-360x250.jpg",
  };
  const image2 = {
    uri: "https://1.bp.blogspot.com/-XwS1aSud_3o/Xtb3W4LGkYI/AAAAAAAAnoM/_jkF2-eJlioQ-T9q-h4GwyXKa_7jhb5tACLcBGAsYHQ/s1600/Gai-xinh-2k6%2B%25285%2529.jpg",
  };
  console.log(user);
  const BottomTab = createBottomTabNavigator<RootTabParamList>();
  const { colors } = useTheme();
  return (
    <View style={{ width: "100%" }} darkColor="white">
      <View darkColor="white" style={{ flexDirection: "row", marginTop: "10px" }}></View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
        darkColor="white">
        <View style={homeStyle.styleListStream}>
          <ImageBackground source={image} resizeMode="cover" style={{ height: 300 }}>
            <Box style={{ flexDirection: "row", marginTop: "265px" }}>
              <img
                width={"20px"}
                style={{}}
                src="https://cdn-icons-png.flaticon.com/512/584/584546.png"></img>{" "}
              <Text style={{ fontWeight: "600" }}>Live ca hát</Text>
            </Box>
          </ImageBackground>
        </View>
        <View style={homeStyle.styleListStream}>
          <ImageBackground source={image1} resizeMode="cover" style={{ height: 300 }}>
            <Box style={{ flexDirection: "row", marginTop: "265px" }}>
              <img
                width={"20px"}
                style={{}}
                src="https://cdn-icons-png.flaticon.com/512/584/584546.png"></img>{" "}
              <Text style={{ fontWeight: "600" }}>Live bán hàng</Text>
            </Box>
          </ImageBackground>
        </View>
        <View style={homeStyle.styleListStream}>
          <ImageBackground
            source={image2}
            resizeMode="cover"
            style={{ height: 300, borderRadius: 100 }}>
            <Box style={{ flexDirection: "row", marginTop: "265px" }}>
              <img
                width={"20px"}
                style={{}}
                src="https://cdn-icons-png.flaticon.com/512/584/584546.png"></img>{" "}
              <Text style={{ fontWeight: "600" }}>Live chơi game</Text>
            </Box>
          </ImageBackground>
        </View>
      </View>
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
