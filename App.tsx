import { View } from "react-native"
import HomePage from "./components/review/home"
import DetaillPage from "./components/review/detail"
import AboutPage from "./components/review/about"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();  // chờ load font chữ xong thì mới render để thông nhât font chữ



const App =() =>{
  const [loaded, error] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  return(
    <View>
      
      <HomePage />
      <DetaillPage />
      <AboutPage />
    </View>
  )
}

export default App;