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

const Item = ({ name, price }) => {
  return (
    <View style={styles.data}>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
};

const App = () => {
  const renderItem = ({ item }) => {
    return <Item name={item.name} price={item.price} />; // {}를 쓴 후 return 써야함 안그러면 화면에 안나온다.
  };
  return (
    <View style={styles.container}>
      <View style={styles.topbox}>
        <Text style={styles.topfont}>Phone Shopping</Text>
      </View>
      <View style={styles.middlebox}>
        <Text style={styles.middlefont}>Phone List</Text>
      </View>

      <SafeAreaView style={styles.container}>
        <FlatList data={phonelist} renderItem={renderItem} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: StatusBar.currentHeight || 0,
  },

  data: {
    padding: 20,

    marginVertical: 10,

    marginTop: 10,

    alignItems: `center`,
    justifyContent: `center`,
  },

  topbox: {
    height: 200,
    backgroundColor: `#ced5f5`,

    alignItems: `flex-start`,
    justifyContent: `center`,
  },

  topfont: {
    fontSize: 30,

    marginLeft: 100,
    marginTop: 50,
  },

  middlebox: {
    width: `100%`,
    height: 100,

    backgroundColor: `#6063f0`,

    alignItems: `center`,
    justifyContent: `center`,
  },

  middlefont: {
    fontSize: 30,
    textDecorationLine: `underline`,

    color: `#fff`,
  },
});

export default App;
