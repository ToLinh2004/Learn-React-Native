import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [test, setTest] =useState({
    name:'Linh',
    age:25
  })
  const [count, setCount]=useState(0);
  return (
    <View style={styles.container}>
      <Text>Hello word</Text>
      <Text style={styles.hello}>Hello word, Tờ Linh</Text>
      <Text>
        {JSON.stringify(test)} {test.name}
      </Text>
      <Text>
       count = {count}
      </Text>
      <View>
        <Button title="Increase" onPress={()=>setCount(count+1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello:{
    color:'red',
    borderColor:'purple',
    padding:2,
    borderWidth:1
  }
});
