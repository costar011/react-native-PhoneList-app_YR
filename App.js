import React from "react";
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

const phonelist = [
  {
    id: `phone1`,
    name: `iPhone 11`,
    price: `3000000`,
  },
  {
    id: `phone2`,
    name: `12 pro`,
    price: `3500000`,
  },
  {
    id: `phone3`,
    name: `갤럭시 s10`,
    price: `1300000`,
  },
  {
    id: `phone4`,
    name: `갤럭시 s21`,
    price: `3200000`,
  },
  {
    id: `phone5`,
    name: `iPhone se`,
    price: `2300000`,
  },
  {
    id: `phone6`,
    name: `갤럭시 s20`,
    price: `1600000`,
  },
];

const Data = ({ name, price }) => {
  return (
    <View style={styles.data}>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
};

const App = () => {
  const renderData = ({ Data }) => {
    return <Data title={Data.name} author={Data.price} />; // {}를 쓴 후 return 써야함 안그러면 화면에 안나온다.
  };
  return (
    <View style={styles.container}>
      <View style={styles.listBox_top}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: `center`,
    justifyContent: `center`,
  },

  data: {
    backgroundColor: `#6ce6d9`,
    padding: 20,
  },

  listBox_top: {
    width: `50%`,
    height: 200,

    backgroundColor: `#555`,
  },
});

export default App;
