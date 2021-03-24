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

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>ssss</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: `center`,
    justifyContent: `center`,
  },
});

export default App;
