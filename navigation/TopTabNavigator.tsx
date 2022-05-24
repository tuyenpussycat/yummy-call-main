import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Common from "../screens/home/commonPage";
import Near from "../screens/home/nearPage";
const FirstRoute = () => (
  <View>
    <Common />
  </View>
);

const SecondRoute = () => (
  <View>
    <Near></Near>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Phổ Biến" },
    { key: "second", title: "Gần đây" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
