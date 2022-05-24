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
export default function Common() {
  const { user } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const image1 = { uri: "https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg" };
  const image2 = {
    uri: "https://recmiennam.com/wp-content/uploads/2020/10/tai-bo-anh-girl-xinh-kute-me-tu-cai-nhin-dau-tien-24.jpg",
  };
  const image3 = {
    uri: "https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg",
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
          <ImageBackground source={image1} resizeMode="cover" style={{ height: 300 }}>
            <Box style={{ flexDirection: "row", marginTop: "265px" }}>
              <img
                width={"20px"}
                style={{}}
                src="https://cdn-icons-png.flaticon.com/512/584/584546.png"></img>{" "}
              <Text style={{ fontWeight: "600" }}>Live chơi game</Text>
            </Box>
          </ImageBackground>
        </View>
        <View style={homeStyle.styleListStream}>
          <ImageBackground source={image2} resizeMode="cover" style={{ height: 300 }}>
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
            source={image3}
            resizeMode="cover"
            style={{ height: 300, borderRadius: 100 }}>
            <Box style={{ flexDirection: "row", marginTop: "265px" }}>
              <img
                width={"20px"}
                style={{}}
                src="https://cdn-icons-png.flaticon.com/512/584/584546.png"></img>{" "}
              <Text style={{ fontWeight: "600" }}>Live ca hát</Text>
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
