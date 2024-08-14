import { View, Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection:"row", // dàn các item thành hàng ngang
    justifyContent:'center', 
    alignItems:'center',
    flex:1 // chiều cao cha bao nhiêu thì con bấy nhiêu
  },
  item1: {
    backgroundColor: "violet",
    padding: 10,
  },
  item2: {
    backgroundColor: "cyan",
    padding: 10,
  },
  item3: {
    backgroundColor: "green",
    padding: 10,
  },
  item4: {
    backgroundColor: "orange",
    padding: 10,
  },
});
const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.item2}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.item3}>
        <Text>Item 3</Text>
      </View>
      <View style={styles.item4}>
        <Text>Item 4</Text>
      </View>
    </View>
  );
};

export default FlexBox;
