import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { useFonts } from "expo-font";
import RegScreen from "./src/Screens/RegScreen";
import LogScreen from "./src/Screens/LogScreen";
import PostsScreen from "./src/Screens/PostsScreen";

import bgImg from "./assets/images/bg.jpg";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });

  return (
    <View style={styles.container}>
      <Image source={bgImg} resizeMode="cover" style={styles.bg} />
      {/* <RegScreen /> */}
      <LogScreen />
      {/* <PostsScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },

  bg: {
    position: "absolute",
    width: "100%",
  },
});
