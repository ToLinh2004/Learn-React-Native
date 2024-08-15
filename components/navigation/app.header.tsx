import { StyleSheet, Text, View } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const AppHeader = () =>{
    const navigation:any = useNavigation(); 

    const styles=StyleSheet.create({
        container: {
            flexDirection:'row',
            backgroundColor: '#ccc',
            paddingHorizontal:5,
            paddingVertical:10,
            alignItems:'center',
            paddingTop:40
            
        },
        headerText:{
            
            textAlign:'center',
            width:'100%',
            fontSize:20
        }
    })
    return (
      <>
        <View style={styles.container}>
          <MaterialIcons name="menu" size={30} color="black" onPress={()=>{navigation.openDrawer()}}  />
          <Text style={styles.headerText    }>Good morning</Text>
        </View>
      </>
    );
}

export default AppHeader;