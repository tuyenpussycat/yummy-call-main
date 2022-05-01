import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useColorScheme from "../hooks/useColorScheme";
import { RootTabParamList, RootTabScreenProps } from "../types";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useTheme } from "native-base";
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default function BottomTabNavigator() {
  const { colors } = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.main,
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return <Entypo name="home" size={22} color={color} />;
          },
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={({ navigation }: RootTabScreenProps<"Search">) => ({
          title: "Search",
          tabBarIcon: ({ color }) => {
            return <EvilIcons name="search" size={28} color={color} />;
          },
        })}
      />
      <BottomTab.Screen
        name="Stream"
        component={TabTwoScreen}
        options={({ navigation }: RootTabScreenProps<"Stream">) => ({
          title: "Stream",
          tabBarIcon: ({ color }) => {
            return <Entypo name="video-camera" size={20} color={color} />;
          },
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="Favorite"
        component={TabTwoScreen}
        options={({ navigation }: RootTabScreenProps<"Favorite">) => ({
          title: "Favorite",
          tabBarIcon: ({ color, focused }) => {
            if (focused) return <Entypo name="heart" size={24} color={color} />;
            return <EvilIcons name="heart" size={28} color={color} />;
          },
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="Me"
        component={TabTwoScreen}
        options={({ navigation }: RootTabScreenProps<"Me">) => ({
          title: "Info",
          tabBarIcon: ({ color }) => {
            return <EvilIcons name="user" size={28} color={color} />;
          },
        })}
      />
    </BottomTab.Navigator>
  );
}
