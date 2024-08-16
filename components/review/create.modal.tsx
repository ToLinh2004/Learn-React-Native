import { Modal, Text, View, Pressable, StyleSheet, TextInput, Button, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
const styles = StyleSheet.create({
  //   centeredView: {
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginTop: 22,
  //   },
  //   modalView: {
  //     margin: 20,
  //     backgroundColor: "white",
  //     borderRadius: 20,
  //     padding: 35,
  //     alignItems: "center",
  //     shadowColor: "#000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowOpacity: 0.25,
  //     shadowRadius: 4,
  //     elevation: 5,
  //   },
  //   button: {
  //     borderRadius: 20,
  //     padding: 10,
  //     elevation: 2,
  //   },
  //   buttonOpen: {
  //     backgroundColor: "#F194FF",
  //   },
  //   buttonClose: {
  //     backgroundColor: "#2196F3",
  //   },
  //   textStyle: {
  //     color: "white",
  //     fontWeight: "bold",
  //     textAlign: "center",
  //   },
  //   modalText: {
  //     marginBottom: 15,
  //     textAlign: "center",
  //   },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    borderWidth: 1,
    paddingVertical: 10,
    borderBlockColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom:10
  },
  groupInput:{
    marginBottom:15,

  },
  text:{
fontSize:20,
fontWeight: "400",

  },
  input:{
borderWidth:1,
borderColor:'#ccc',
paddingHorizontal:10,
marginVertical:10,
paddingVertical:5,
borderRadius:5
  }
});

interface IProps {
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
  addNew:any
}


const CreateModal = (props: IProps) => {
  const { modalVisible, setModalVisible,addNew } = props;
  const [title,setTitle]=useState("");
  const [rating, setRating] = useState("");
  function randomInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleSubmit =()=>{
    if(!title){
        Alert.alert("Nội dung không được để trống")
        return;
    }
    if (!rating) {
      Alert.alert("Nội dung không được để trống");
      return;
    }
    addNew({
      id: randomInteger(2,200),
      title,
      rating,
    });
    setModalVisible(false);
    setTitle("");
    setRating("")
  }

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{ fontSize: 25 }}> Create a view</Text>
            <AntDesign
              name="close"
              size={24}
              color="black"
              onPress={() => {setModalVisible(false);
                setTitle("");
                setRating("")

              }}
            />
          </View>
          <View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Nội dung:</Text>
              <TextInput
                style={styles.input}
                value={title}
                onChangeText={(v) => setTitle(v)}
              />
            </View>
            <View>
              <Text style={styles.text}>Đánh giá:</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={rating}
                onChangeText={(v) => setRating(v)}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Button title="Add" onPress={handleSubmit} />
            </View>
          </View>
          {/* <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View> */}
        </View>
      </Modal>
    </>
  );
};

export default CreateModal;
