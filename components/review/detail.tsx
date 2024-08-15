import { Button, StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp,RouteProp
  , useNavigation, useRoute } from "@react-navigation/native";
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

      <Button title="Go back" onPress={() => navigation.navigate("home")} />
    </View>
  );
 
  
};


export default DetaillPage