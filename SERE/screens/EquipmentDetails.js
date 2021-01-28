import React from 'react'
import { StyleSheet, Text, View,Image, Button } from 'react-native'

const EquipmentDetails = ({navigation}) => {
    return (
        <View style={styles.container}>
             <View style={styles.Details}>
                <Image style={styles.image} source={{uri:'https://constructionreviewonline.com/wp-content/uploads/2015/06/cranes.jpg'}}/>
                <Text style={styles.text} >Crane, AK Group </Text>
            </View>
            <View style={styles.ratings}>
                    <Text style={styles.text}>Ratings:</Text>
                    <Text style={styles.rateValue}>4.8</Text>
                </View>
                <View style={styles.ratings}>
                    <Text style={styles.text}>Reviews</Text>
                </View>
                <View style={styles.ratings}>
                    <Text style={styles.text}>Price</Text>
                </View>
                <View style={styles.ratings}>
                    <Text style={styles.text}>Description</Text>
                    <Text style={styles.extraDetails}>A crane is a type of machine, generally equipped with a hoist rope, wire ropes or chains, and sheaves</Text>
                </View>
                <View style={styles.footer}>
                    <Button  title='Add to Cart' onPress={()=>navigation.push('cartPage')}></Button>
                </View>
        </View>
    )
}

export default EquipmentDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection:'column',
        
      },
      image:{
          width: 390,
          height:300,
      },
      Details:{
         marginLeft:10,
          flexDirection:'column',
        
      },
      extraDetails:{
          marginLeft:5,
          marginTop:15,
          width:280
      },
      text:{
          marginTop:10,
          fontSize:20,
          
      },
      ratings:{
        marginLeft:10,
          flexDirection:'row',
          justifyContent:'flex-start',
         
      },
      rateValue:{
        fontSize:20,
       margin:10,
        fontWeight:'bold'
      },
      footer:{
          position:'absolute',
          bottom:0,
          left:0,
          right:0,
          
      }
})
