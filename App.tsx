import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
 const [students, setStudents] = useState([
   { id: 1, name: "Bao1", age: 19 },
   { id: 2, name: "Bao2", age: 19 },
   { id: 3, name: "Bao3", age: 19 },
   { id: 4, name: "Bao4", age: 19 },
   { id: 5, name: "Ba05", age: 19 },
   { id: 6, name: "Bao6", age: 19 },
   { id: 7, name: "Bao7", age: 10 },
   { id: 8, name: "Bao8", age: 20 },
   { id: 9, name: "Bao9", age: 20 },
   { id: 10, name: "Bao10", age: 20 },
   { id: 11, name: "Bao11", age: 20 },
   { id: 12, name: "Bao12", age: 20 },
 ]);
 
  return (
    <View style={styles.container}>
      <Text style={{fontSize:60}}>Hello word</Text>
      <FlatList 
      keyExtractor={item =>item.id + ""}
      numColumns={2}
        data={students}
        renderItem={({item})=>{    // or (data)  result data.item.name
          return (
            <View  style={styles.listStudent}>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
      {/* <ScrollView >
        {students.map(student =>{
          return (
            <View key={student.id} style={styles.listStudent}>
              <Text>{student.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop:50,
    paddingHorizontal:20,

    // alignItems: "center",
    // justifyContent: "center",
  },
  listStudent:{
    padding:15,
    backgroundColor:'purple',
    marginBottom:30,
    marginHorizontal:30
  }
 
});
