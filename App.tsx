import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);
  function randomInterger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if(!todo){
      Alert.alert("Error todo", "empty not input", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ])
      
      return;
     
    }
    setListTodo([{ id: randomInterger(2, 200), name: todo },...listTodo]);
    setTodo('')
  };
const handleDeleteTodo=(id:number)=>{
  const newTodo = listTodo.filter(item => item.id !=id)
  setListTodo(newTodo);

}
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} >
    <View style={styles.container}>
      <Text style={styles.header}>Todo App</Text>
      <View style={styles.body}>
        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <Button title="Add todo" onPress={handleAddTodo} />
      </View>
      <View style={styles.body}>
        <FlatList
        keyExtractor={item => item.id +''}
          data={listTodo}
          renderItem={({ item }) => {
            return (
              <Pressable
              onPress={()=>handleDeleteTodo(item.id)}
              style={({pressed})=>({opacity:pressed ? 0.5 : 1})}
              >
                <Text style={styles.todoItem}>{item.name}</Text>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
    </ TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 40,
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    marginHorizontal: 15,
    margin: 15,
  },
  body: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  todoItem: {
    fontSize: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 10,
    padding: 10,
  },
});
