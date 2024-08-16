import { Button, Image, StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp,RouteProp
  , useNavigation, useRoute } from "@react-navigation/native";
import startIcon from "../../assets/images/star.png"  
const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANS_REGULAR,
  },
  reviewText:{
    fontSize:20,
    padding:15
  },
});
const DetaillPage = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation(); 
    const route :RouteProp<RootStackParamList,'Details'> =useRoute();

  return (
    <View>
      <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
      <Text style={styles.reviewText}>Titile: {route.params?.title}</Text>
      <Text style={styles.reviewText}>Rating: {route.params?.star}</Text>
      <View style={{ flexDirection: "row" }}>
        <Image style={{ height: 50, width: 50 }} source={startIcon} />
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
      </View>
      {/* <Button title="Go back" onPress={() => navigation.navigate("home")} /> */}
    </View>
  );
 
  
};


export default DetaillPage