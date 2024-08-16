import { Modal, Text, View, Pressable, StyleSheet, TextInput, Button } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
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
}
const CreateModal = (props: IProps) => {
  const { modalVisible, setModalVisible } = props;
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
              onPress={() => setModalVisible(false)}
            />
          </View>
          <View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Nội dung:</Text>
              <TextInput style={styles.input} />
            </View>
            <View>
              <Text style={styles.text}>Đánh giá:</Text>
              <TextInput style={styles.input} keyboardType="numeric" />
            </View>
            <View style={{marginTop:10}}>
              <Button title="Add" />
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
