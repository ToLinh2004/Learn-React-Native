import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import CreateModal from "./create.modal";

interface IReview {
  id: number;
  title: string;
  star: number;
}

const styles = StyleSheet.create({
  reviewItem: {
    padding: 15,
    backgroundColor: "#ccc",
    margin: 15,
  },
});
const HomePage = () => {
   const navigation: NavigationProp<RootStackParamList> = useNavigation(); 
  const [reviews, setReviews] = useState<IReview[]>([
    { id: 1, title: "React Native", star: 5 },
    { id: 2, title: "Hỏi dân IT", star: 5 },
  ]);

  const [modalVisible, setModalVisible]=useState(false)
  return (
    <View>
      <Text style={{ fontSize: 20, padding: 10 }}>Review List</Text>
      <Button title="Add" onPress={()=>setModalVisible(true)}/>
      <View>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Details", item)}
              >
                <View style={styles.reviewItem}>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <CreateModal modalVisible={modalVisible} setModalVisible ={setModalVisible}/>
    </View>
  );
};

export default HomePage;
