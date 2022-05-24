import React, { useState } from "react";
import { ImageBase, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "../../components/Themed";
import { Info } from "./Infor.types";
import { Avatar } from "native-base";
import { RootState } from "../../store";
import { Ionicons } from "@expo/vector-icons";
import { setToken, setUser } from "../../store/actions";
import profileStyle from "./profileStyle";
import { removeItem } from "../../untils/storage";
export default function ProfileScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [info, setInfo] = useState<Info>();
  console.log(user);
  return (
    <>
      <View style={{ width: "30%", marginHorizontal: "auto" }} darkColor="white">
        <Avatar
          style={{ alignSelf: "center", marginBottom: "10px", marginTop: "20px" }}
          bg="amber.500"
          source={{
            uri: "https://bit.ly/broken-link",
          }}>
          MT
        </Avatar>
        <View
          darkColor="white"
          style={{ flexDirection: "row", alignSelf: "center", marginBottom: "10px" }}>
          <Text darkColor="black" style={{ marginRight: "6px", fontWeight: "600" }}>
            Nguyễn Tuyên
          </Text>

          {user?.gender === "nam" ? (
            <View darkColor="white" style={{ flexDirection: "row", backgroundColor: "blue" }}>
              <Text darkColor="white" style={{ marginRight: "2px" }}>
                22
              </Text>
              <Text darkColor="white">
                <Ionicons bg="amber.500" color={"amber.500"} name="male"></Ionicons>
              </Text>
            </View>
          ) : (
            <View
              darkColor="white"
              style={{
                flexDirection: "row",
                backgroundColor: "pink",
                paddingHorizontal: "4px",
                borderRadius: 4,
              }}>
              <Text darkColor="white" style={{ marginRight: "2px" }}>
                22
              </Text>
              <Text darkColor="white">
                <Ionicons name="female"></Ionicons>
              </Text>
            </View>
          )}
        </View>
        <View
          darkColor="white"
          style={{ alignSelf: "center", flexDirection: "row", marginBottom: "20px" }}>
          <Text darkColor="black" style={{ marginRight: "10px" }}>
            {" "}
            ID:{user?._id}
          </Text>
          <Ionicons name="copy"></Ionicons>
        </View>
        <View
          darkColor="white"
          style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: "10px" }}>
          <View darkColor="white" style={profileStyle.styleListFollow}>
            <Text darkColor="black" style={{ fontWeight: "600", fontSize: 25 }}>
              0
            </Text>{" "}
            <Text darkColor="black">Bạn bè</Text>
          </View>

          <View darkColor="white" style={profileStyle.styleListFollow}>
            {" "}
            <Text darkColor="black" style={{ fontWeight: "600", fontSize: 25 }}>
              0
            </Text>{" "}
            <Text darkColor="black">Đang theo dõi</Text>
          </View>

          <View darkColor="white" style={profileStyle.styleListFollow}>
            {" "}
            <Text darkColor="black" style={{ fontWeight: "600", fontSize: 25 }}>
              0
            </Text>{" "}
            <Text darkColor="black">Người hâm mộ</Text>
          </View>
        </View>
      </View>
      <View style={profileStyle.containerListItem} darkColor="white">
        <View darkColor="white" style={profileStyle.styleListItem}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/4142/4142160.png",
            }}
            style={profileStyle.profileListItem}
          />
          <Text style={{ fontWeight: "400" }} darkColor="black">
            Vip của tôi
          </Text>
        </View>

        <View darkColor="white" style={profileStyle.styleListItem}>
          {" "}
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/4144/4144517.png",
            }}
            style={profileStyle.profileListItem}
          />
          <Text style={{ fontWeight: "400" }} darkColor="black">
            Nhóm của tôi
          </Text>
        </View>

        <View darkColor="white" style={profileStyle.styleListItem}>
          {" "}
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1041/1041888.png",
            }}
            style={profileStyle.profileListItem}
          />
          <Text style={{ fontWeight: "400" }} darkColor="black">
            Nạp tiền
          </Text>
        </View>
        <View darkColor="white" style={profileStyle.styleListItem}>
          {" "}
          <Image
            source={{
              uri: "https://cdn-icons.flaticon.com/png/512/774/premium/774476.png?token=exp=1652672431~hmac=c241cfad0a8c3203a33564a9be2856f1",
            }}
            style={profileStyle.profileListItem}
          />
          <Text style={{ fontWeight: "400" }} darkColor="black">
            Giới thiệu
          </Text>
        </View>
      </View>

      <View style={profileStyle.containerListMenu} darkColor="white">
        <TouchableOpacity style={profileStyle.profileListMenu}>
          {" "}
          <View darkColor="white" style={profileStyle.profileListIconMenu}>
            <Image
              source={{
                uri: "https://cdn-icons.flaticon.com/png/512/2903/premium/2903501.png?token=exp=1652673141~hmac=0aa4b919c68d3e71cf9f7a0b2b079d73",
              }}
              style={profileStyle.profileTextMenu}
            />
            <Text style={{ fontWeight: "400" }} darkColor="black">
              Tin nhắn
            </Text>
          </View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/892/892528.png",
            }}
            style={profileStyle.profileIconRightMenu}
          />
        </TouchableOpacity>
        <TouchableOpacity style={profileStyle.profileListMenu}>
          {" "}
          <View darkColor="white" style={profileStyle.profileListIconMenu}>
            <Image
              source={{
                uri: "https://cdn-icons.flaticon.com/png/512/855/premium/855279.png?token=exp=1652673185~hmac=fd0cdd81ce23f7b450e3470204124564",
              }}
              style={profileStyle.profileTextMenu}
            />
            <Text style={{ fontWeight: "400" }} darkColor="black">
              Ví của tôi
            </Text>
          </View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/892/892528.png",
            }}
            style={profileStyle.profileIconRightMenu}
          />
        </TouchableOpacity>
        <TouchableOpacity style={profileStyle.profileListMenu}>
          {" "}
          <View darkColor="white" style={profileStyle.profileListIconMenu}>
            <Image
              source={{
                uri: "https://cdn-icons.flaticon.com/png/512/5669/premium/5669968.png?token=exp=1652673838~hmac=0fb478342cf5a880a8dc059d5e0d8869",
              }}
              style={profileStyle.profileTextMenu}
            />
            <Text style={{ fontWeight: "400" }} darkColor="black">
              Tủ đồ của tôi
            </Text>
          </View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/892/892528.png",
            }}
            style={profileStyle.profileIconRightMenu}
          />
        </TouchableOpacity>
        <TouchableOpacity style={profileStyle.profileListMenu}>
          {" "}
          <View darkColor="white" style={profileStyle.profileListIconMenu}>
            <Image
              source={{
                uri: "https://cdn-icons.flaticon.com/png/512/4612/premium/4612366.png?token=exp=1652673737~hmac=a461db0452d3c567a8c27046630a1405",
              }}
              style={profileStyle.profileTextMenu}
            />
            <Text style={{ fontWeight: "400" }} darkColor="black">
              Bài đăng của tôi
            </Text>
          </View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/892/892528.png",
            }}
            style={profileStyle.profileIconRightMenu}
          />
        </TouchableOpacity>
        <TouchableOpacity style={profileStyle.profileListMenu}>
          {" "}
          <View darkColor="white" style={profileStyle.profileListIconMenu}>
            <Image
              source={{
                uri: "https://cdn-icons.flaticon.com/png/512/2538/premium/2538036.png?token=exp=1652673427~hmac=1ca2bc98314d697bb51af870e8ef1399",
              }}
              style={profileStyle.profileTextMenu}
            />
            <Text style={{ fontWeight: "400" }} darkColor="black">
              Phản hồi
            </Text>
          </View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/892/892528.png",
            }}
            style={profileStyle.profileIconRightMenu}
          />
        </TouchableOpacity>
        <TouchableOpacity style={profileStyle.profileListMenu}>
          {" "}
          <View darkColor="white" style={profileStyle.profileListIconMenu}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3893/3893258.png",
              }}
              style={profileStyle.profileTextMenu}
            />
            <Text style={{ fontWeight: "400" }} darkColor="black">
              Follow us
            </Text>
          </View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/892/892528.png",
            }}
            style={profileStyle.profileIconRightMenu}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={profileStyle.profileListMenu}
          onPress={() => {
            dispatch(setToken(null));
            dispatch(setUser(null));
            removeItem("refresh_token");
            removeItem("token");
          }}>
          <View darkColor="white" style={profileStyle.profileListIconMenu}>
            <Image
              source={{
                uri: "https://cdn-icons.flaticon.com/png/512/4400/premium/4400828.png?token=exp=1652682953~hmac=c6d61b8a15f650fcdab78964a96b359f",
              }}
              style={profileStyle.profileTextMenu}
            />
            <Text style={{ fontWeight: "400" }} darkColor="black">
              Đăng xuất
            </Text>
          </View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/892/892528.png",
            }}
            style={profileStyle.profileIconRightMenu}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
