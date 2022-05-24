import { Box, Flex, Input, ScrollView } from "native-base";
import React, { useState } from "react";
import { AppRegistry, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

export default function Stream({ navigation }: RootTabScreenProps<"Stream">) {
  const image1 = { uri: "https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg" };
  const [checkText, setCheckText] = useState(false);
  return (
    <View style={styles.container} darkColor="white">
      <Box width={"30%"}>
        <ImageBackground source={image1} resizeMode="cover" style={{ height: 800 }}>
          <Box style={{ marginTop: "520px" }} paddingLeft={"3"}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              width={"80%"}
              height="250px">
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>hihi</Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>xinhhhhhhhhhhhh</Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>
                  haloooooooooooooooooooooooooooo
                </Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>chàooooooooooooooooooo</Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>đang làm gì đó</Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>hihi</Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>hihi</Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>chàooooooooooooooooooo</Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>chàooooooooooooooooooo</Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>chàooooooooooooooooooo</Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>chàooooooooooooooooooo</Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>chàooooooooooooooooooo</Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>chàooooooooooooooooooo</Text>
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "400", fontSize: 20 }}>User 1 : </Text>{" "}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>chàooooooooooooooooooo</Text>
              </Box>
            </ScrollView>
            {checkText === true ? (
              <Input placeholder="Viết bình luận"></Input>
            ) : (
              <TouchableOpacity onPress={() => setCheckText(!checkText)}>
                <img width={24} src="https://cdn-icons-png.flaticon.com/512/724/724715.png"></img>
              </TouchableOpacity>
            )}
          </Box>
        </ImageBackground>
      </Box>
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
