import React,{useState,useEffect} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import NumericInput from 'react-native-numeric-input'

const Cart = ({ navigation }) => {
    const [value, setValue] =  useState(1)
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View style={styles.Details}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://constructionreviewonline.com/wp-content/uploads/2015/06/cranes.jpg",
            }}
          />
        <View style={styles.desc}>
          <Text style={styles.text}>Crane</Text>
          <Text style={styles.text}>AK Group.</Text>
          <Text style={styles.text}>2015</Text>
          <View style={styles.qty}>
          <Text style={styles.text}>Quantity</Text>
          <NumericInput type='up-down' value={value} minValue={1} maxValue={5} />
          </View>
          

        </View>
        </View>
      
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  Details: {
    flexDirection: "row",
  },

  desc: {
    flexDirection: "column",
    margin:10
  },
  qty:{
      flexDirection:'row'
  }
});

export default Cart;
