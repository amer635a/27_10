import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,Dimensions,ImageBackground} from 'react-native';

import Card from '../components/Card'
import Colors from '../constants/Colors';


const NameHeb='שם'
const PriceHeb='מחיר'
const ShowHeb='הצגה'


const windowheight= Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

let HeightGrid=170
let WidthGrid=windowWidth *0.30
 if(windowWidth>900)
 HeightGrid=400

const SaleItem=Props=>{
    const s=require( '../assets/1.png')
    return ( 
        <View style={{margin:7}}>
             
     <Card>
    <View style={styles.container}>
        <View style={styles.containerimage}>
     <Image
        style={styles.imageproduct}
        source={s} 
      /></View>
     <View style={styles.containertitle}><Text numberOfLines={1}>{Props.title}</Text></View>
     <View style={styles.containerprice}>
         <Text style={styles.textpricew}>{PriceHeb} : </Text>
         <Text style={styles.textprice}>₪{Props.Newprice}</Text>
         <Text style={styles.textoldprice}>  <del>{Props.Oldprice}</del></Text>
     </View>


     <ImageBackground source={require('../assets/gold4.png')} style={styles.ImageBackground}>
       <TouchableOpacity onPress={Props.onSelect}  style={styles.containershow}><Text style={{fontFamily: 'open-sans-bold',fontSize: 18}}>{ShowHeb}</Text></TouchableOpacity>
       </ImageBackground>
    </View>
    </Card>
    </View>
  );
};
 
 
const styles = StyleSheet.create({
    container:{
        height:HeightGrid,
        width:WidthGrid,
        marginLeft:8
    },
    containerimage:{
        borderRadius: 5, 
        height:'60%',
        width:'100%',
    },
    imageproduct:{
        height:'100%',
        width:'100%',
        
    },
    containertitle:{
        flexDirection:'row-reverse' ,
        justifyContent:'center',
        alignItems:'center',
        width:WidthGrid ,
        height:'12%',
       
    },
    containerprice:{
         flexDirection:'row-reverse' ,
         height:'12%',
         justifyContent:'center',
         alignItems:'center',  
    },
    textpricew:{
        fontFamily: 'open-sans-bold',
        fontSize: 15
    },
    textprice:{
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    textoldprice:{
        color:'red',
        fontSize:13,
        marginRight:4
    },
    containershow:{
        height:'15%',
        width:'100%',
      //  backgroundColor:Colors.goldColor,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: 'black',
        marginTop:2,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    },
    ImageBackground:{
        flex: 1,
        justifyContent: "center" ,
        opacity:0.7,
        resizeMode:'center',
        borderRadius:5,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10
    
      }      


  });
  export default SaleItem; 