import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Button, Image } from "react-native";

const onPressTitle = () => {
  console.log("Hello");
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Image
            source={{
              uri:
                "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
            }}
            style={styles.text}
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.text} onPress={() => navigation.push("MyChatBot")}>
            ChatBot
          </Text>
          <Text style={styles.text} onPress={onPressTitle}>
            Contact
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Supplier"  onPress={() => navigation.push("HirerHome")}/>
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title="Hirer"
            onPress={() => navigation.push("HirerHome")}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    marginTop: 10,
  },

  button: {
    margin: 30,
    width: 150,
  },
  text: {
    marginTop: 10,
    marginRight: 6,
    marginLeft: 6,
    height: 50,
    width: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Home;
