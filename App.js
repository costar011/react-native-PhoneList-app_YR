import React from "react";
import { View, Text, StyleSheet } from "react-native";

const phonelist = [
  {
    id: `phone1`,
    name: ``,
    price: ``,
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
