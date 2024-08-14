import { View } from "react-native";
import HomePage from "./components/review/home";
import DetaillPage from "./components/review/detail";
import AboutPage from "./components/review/about";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { OPENSANS_REGULAR } from "./utils/const";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

SplashScreen.preventAutoHideAsync(); // chờ load font chữ xong thì mới render để thông nhât font chữ

const App = () => {
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{ title: "Overview" }}
        />
        <Stack.Screen name="Details" component={DetaillPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
