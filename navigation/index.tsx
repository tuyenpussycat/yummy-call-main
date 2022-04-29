import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme, useToast } from "native-base";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Toast from "../components/Toast";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import LoginScreen from "../screens/LoginScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import AuthenService from "../services/Authen.service";
import { RootState } from "../store";
import { setToken, setUser } from "../store/actions";
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const toast = useToast();
  const { colors } = useTheme();
  const [loading, setLoading] = React.useState<boolean>(false);
  const { token } = useSelector((state: RootState) => state.token);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  React.useMemo(() => {
    if (!token) return;
    setLoading(true);
    (async () => {
      try {
        const user = await AuthenService.getMyinfo();
        if (user) {
          dispatch(setUser(user));
        } else {
          dispatch(setUser(null));
        }
        setLoading(false);
        toast.show({
          render: () => <Toast text="Welcome" color={colors.main} />,
          placement: "top",
        });
      } catch (error) {
        dispatch(setUser(null));
        setLoading(false);
      }
    })();
  }, [token]);
  if (loading) {
    return <Loading />;
  }
  if (!token || !user) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }
  return <Main />;
}
const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();
function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
        // headerShown: false,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen name="TabTwo" component={TabTwoScreen} />
      {/* <BottomTab.Screen name="TabThree" component={Main} options={{ headerShown: false }} /> */}
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
