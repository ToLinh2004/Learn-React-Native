import HomePage from "./components/review/home";
import DetaillPage from "./components/review/detail";
import AboutPage from "./components/review/about";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { OPENSANS_REGULAR } from "./utils/const";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppNavigation from "./components/navigation/app.navigation";


SplashScreen.preventAutoHideAsync(); // Wait until the font is loaded before rendering to confirm the font
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


  return (
    <NavigationContainer>
      
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
