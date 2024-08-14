import { Button, Text, View } from "react-native"

const HomePage= (props:any)=>{
    const {navigation} =props;
    return (
      <View>
        <Text>Home page</Text>
        <Button
          title="View Detail"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    );
}

export default HomePage