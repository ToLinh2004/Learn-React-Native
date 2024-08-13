import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge]=useState<number>();
  const [test, setTest] = useState({
    name: "Linh",
    age: 25,
  });
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <Text>Name: {name}</Text>
        <TextInput
          style={styles.styleInput}
          multiline // automatic line break like textarea
          onChangeText={(value) => setName(value)}
        />
      </View>
      <View>
        <Text>Age: {age}</Text>
        <TextInput
          style={styles.styleInput}
          
          onChangeText={(value) => setAge(+value)}
          keyboardType="numeric"
          maxLength={2}
        />
      </View>

      <Text>Hello word</Text>
      <Text>
        {JSON.stringify(test)} {test.name}
      </Text>
      <Text>count = {count}</Text>
      <View>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  styleInput: {
    borderWidth: 1,
    color: "black",
    width: 200,
    padding: 12,
  },
});
