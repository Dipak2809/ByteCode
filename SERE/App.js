import React,{useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button,  Image } from 'react-native';
import Home from './screens/Home';
import HirerHome from './screens/HirerHome';
import MyBot from './screens/MyBot';
import FilteredProducts from './screens/FilteredProducts';
import EquipmentDetails from './screens/EquipmentDetails';
import Cart from './screens/Cart';

const Stack = createStackNavigator();
function Homes({navigation}){
  return(
    <Home navigation={navigation}></Home>

  )
}
function Search({navigation}){
  return(
   <HirerHome navigation={navigation}></HirerHome>
  )
}
function FilteredProduct({navigation}){
  return(
   <FilteredProducts navigation={navigation}></FilteredProducts>
  )
}
function EquipmentDetail({navigation}){
  return(
   <EquipmentDetails navigation={navigation}></EquipmentDetails>
  )
}
function cartPage(){
  return(
   <Cart ></Cart>
  )
}

function MyChatBot({navigation}){
  return(
   <MyBot navigation={navigation}></MyBot>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homes">
        <Stack.Screen
          name="Homes"
          component={Homes}
          options={{ title: "SERE", headerTitleAlign: "center" ,headerStyle: {
            backgroundColor: '#3F51B5',
          }}} 
        ></Stack.Screen>

        <Stack.Screen
          name="HirerHome"
          component={Search}
          options={{title:'',headerStyle: {
            backgroundColor: '#3F51B5',
          },}}
        ></Stack.Screen>

        <Stack.Screen
          name="FilteredProducts"
          component={FilteredProduct}
          options={{title:'',headerStyle: {
            backgroundColor: '#3F51B5',
          }}}
        ></Stack.Screen>

        <Stack.Screen
          name="EquipmentDetail"
          component={EquipmentDetails}
          options={{title:'',headerStyle: {
            backgroundColor: '#3F51B5',
          }}}
        ></Stack.Screen>

        <Stack.Screen
          name="cartPage"
          component={Cart}
          options={{title:'',headerStyle: {
            backgroundColor: '#3F51B5',
          }}}
        ></Stack.Screen>

        <Stack.Screen
          name="MyChatBot"
          component={MyBot}
          options={{title:'',headerStyle: {
            backgroundColor: '#3F51B5',
          }}}
        ></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


