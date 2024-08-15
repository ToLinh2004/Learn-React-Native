import AboutPage from "../review/about";
import DetaillPage from "../review/detail";
import HomePage from "../review/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppHeader from "./app.header";

const HomeLayout = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
        
    >
      <Stack.Screen
        name="home"
        component={HomePage}
        options={{ header: () =><AppHeader /> }}
      />
      <Stack.Screen
        name="Details"
        component={DetaillPage}
        options={{ title: "Trang chi tiết" }}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
    // screenOptions={{headerShown:false}}
    >
      <Drawer.Screen
        name="home1"
        component={HomeLayout}
        options={{ title: "Trang chủ",
            header:() => <></>
         }}
      />
      <Drawer.Screen
        name="about"
        component={AboutPage}
        options={{ title: "Trang Thông Tin" ,
            header: () => <AppHeader />
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;
