import React from 'react'
import { View, Text,Image,StyleSheet,SafeAreaView ,ScrollView  } from 'react-native'


const FilteredProducts = ({navigation}) => {
    return (
        <SafeAreaView  style={styles.container}>
            <ScrollView >
            <View style={styles.Details}>
                <Image style={styles.image} source={{uri:'https://constructionreviewonline.com/wp-content/uploads/2015/06/cranes.jpg'}}/>
                <Text style={styles.text} onPress={()=>navigation.push('EquipmentDetail')} >A crane is a type of machine, generally equipped with a hoist rope, wire ropes or chains, and sheaves, that can be used both to lift and lower materials and to move them horizontally.</Text>
            </View>
            <View style={styles.Details}>
                <Image style={styles.image} source={{uri:'https://i.ytimg.com/vi/XN7CWdXrPto/maxresdefault.jpg'}}/>
                <Text style={styles.text} onPress={()=>navigation.push('EquipmentDetail')}>A crane is a type of machine, generally equipped with a hoist rope, wire ropes or chains, and sheaves, that can be used both to lift and lower materials and to move them horizontally.</Text>
            </View>
            <View style={styles.Details}>
                <Image style={styles.image} source={{uri:'https://media.stokker.com/prod/l/853/144736853'}}/>
                <Text  style={styles.text} onPress={()=>navigation.push('EquipmentDetail')}>A crane is a type of machine, generally equipped with a hoist rope, wire ropes or chains, and sheaves, that can be used both to lift and lower materials and to move them horizontally.</Text>
            </View>
            <View style={styles.Details}>
                <Image style={styles.image} source={{uri:'https://www.service-repair-workshop-manual.com/wp-content/uploads/2019/05/JCB-JS200W-Auto-Tier3-Wheeled-Excavator-Service-Repair-Workshop-Manual.jpg'}}/>
                <Text style={styles.text} onPress={()=>navigation.push('EquipmentDetail')}>A crane is a type of machine, generally equipped with a hoist rope, wire ropes or chains, and sheaves, that can be used both to lift and lower materials and to move them horizontally.</Text>
            </View>
            <View style={styles.Details}>
                <Image style={styles.image} source={{uri:'https://images-na.ssl-images-amazon.com/images/I/71DjhM51KfL._AC_SX425_.jpg'}}/>
                <Text style={styles.text} onPress={()=>navigation.push('EquipmentDetail')}>A crane is a type of machine, generally equipped with a hoist rope, wire ropes or chains, and sheaves, that can be used both to lift and lower materials and to move them horizontally.</Text>
            </View>
            <View style={styles.Details}>
                <Image style={styles.image} source={{uri:'https://5.imimg.com/data5/TestImages/RU/PI/FV/SELLER-36391204/jcb-machine-500x500.jpg'}}/>
                <Text style={styles.text} onPress={()=>navigation.push('EquipmentDetail')}>A crane is a type of machine, generally equipped with a hoist rope, wire ropes or chains, and sheaves, that can be used both to lift and lower materials and to move them horizontally.</Text>
            </View>
            <View style={styles.Details}>
                <Image style={styles.image} source={{uri:'https://constructionreviewonline.com/wp-content/uploads/2015/06/cranes.jpg'}}/>
                <Text style={styles.text} onPress={()=>navigation.push('EquipmentDetail')}>A crane is a type of machine, generally equipped with a hoist rope, wire ropes or chains, and sheaves, that can be used both to lift and lower materials and to move them horizontally.</Text>
            </View>
            </ScrollView >
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      
    },
    image:{
        width:100,
        height:100,
        margin:10
    },
    Details:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    text:{
        height:100,
        width:270
    }
   
  });

export default FilteredProducts
