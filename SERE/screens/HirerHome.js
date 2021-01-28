import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Icon } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-datepicker";

const onPressTitle = () => {
  console.log("Hello");
};

const HirerHome = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [countries, setCountries] = useState([
    { label: "Delhi", value: "Delhi" },
    { label: "Bengaluru", value: "Bengaluru" },
    { label: "Mumbai", value: "Mumbai" },
    { label: "Chennai", value: "Chennai" },
  ])
  const [Equipment, setEquipment] = useState([
      {label:'Crane',value:'Crane'},
      {label:'Excavators',value:'Excavators'},
      {label:'Backhoe',value:'Backhoe'},
      {label:'Loader',value:'Loader'},
      {label:'Trenchers',value:'Trenchers'}])
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
        <View>
          <Icon name="camera" type="entypo" style={styles.camera} />
        </View>
        <View style={styles.header}>
          <Text style={styles.text} onPress={onPressTitle}>
            About
          </Text>
          <Text style={styles.text} onPress={onPressTitle}>
            Contact
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <DropDownPicker
            searchable={true}
            searchablePlaceholder="Search..."
            searchableError="Not Found"
            placeholder="Select your loaction"
            items={countries}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: "#fafafa" }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
            //   onChangeItem={(item) =>
            //     this.setState({
            //       country: item.value,
            //     })
            //   }
          />
        </View>
        <View style={styles.button}>
          <DropDownPicker
            searchable={true}
            searchablePlaceholder="Search..."
            searchableError="Not Found"
            placeholder="Select an Equipment"
            items={Equipment}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: "#fafafa" }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
            //   onChangeItem={(item) =>
            //     this.setState({
            //       country: item.value,
            //     })
            //   }
          />
        </View>
        <View style={styles.datePicker}>
          <Text>From:</Text>
          <DatePicker
            style={{ width: 210 }}
            date={date}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate={date}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
              // ... You can check the source to find the other keys.
            }}
            // onDateChange={(date) => {setDate({date})}}
          />
        </View>
        <View style={styles.datePicker2}>
          <Text>To:</Text>
          <DatePicker
            style={{ width: 210 }}
            date={date}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate={date}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
              // ... You can check the source to find the other keys.
            }}
            // onDateChange={(date) => {setDate({date: date})}}
          />
        </View>
        <View style={styles.search}>
          <Button title="Search" onPress={()=>navigation.push('FilteredProducts')}></Button>
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
    margin: 30,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    marginTop: 10,
  },

  button: {
    margin: 15,
    width: 250,
  },
  text: {
    marginTop: 5,
    marginRight: 6,
    marginLeft: 6,
    height: 50,
    width: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  camera: {
    marginTop: 10,
  },
  datePicker: {
    margin: 26,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  datePicker2: {
    marginLeft: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    margin: 30,
    width: 250,
  },
});

export default HirerHome;
