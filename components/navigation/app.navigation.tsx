import AboutPage from "../review/about";
import DetaillPage from "../review/detail";
import HomePage from "../review/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

const HomeLayout = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomePage}
        options={{ title: "Trang chủ" }}
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
    <Drawer.Navigator>
      <Drawer.Screen
        name="home1"
        component={HomeLayout}
        options={{ title: "Trang chủ" }}
      />
      <Drawer.Screen
        name="about"
        component={AboutPage}
        options={{ title: "Trang Thông Tin" }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;
