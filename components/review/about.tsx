import { StyleSheet, Text, View } from "react-native";
import { globalStyles, OPENSANS_REGULAR } from "../../utils/const";


const styles = StyleSheet.create({
  about: {
    fontSize: 30,
    
  },
});
const AboutPage = () => {
  return (
    <View>
      <Text style={[styles.about, globalStyles.globalFont]}>
        About page
      </Text>
      
    </View>
  );
  
};


export default AboutPage