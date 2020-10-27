import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image,TouchableOpacity } from 'react-native';
import { AntDesign ,Entypo,FontAwesome,Ionicons} from '@expo/vector-icons'; 

import Colors from '../constants/Colors';

const windowWidth = Dimensions.get('window').width;

const widthImageMain=windowWidth*0.8;
const Title_Image_Height=TITLE_HEIGHT-5;
const TITLE_HEIGHT=40;

const MainTitle=Props=>{
    return ( 
   <View style={styles.container}>
     <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={Props.goMenu}>

     <View style={{marginLeft:30,justifyContent:'center',alignItems:'center'}}>
     {Props.menu ? <Entypo name="menu" size={1} color={'white'}/>:<Entypo name="menu" size={30} color={Colors.goldColor}/>}  </View>
     </TouchableOpacity  >
    <View style={styles.imageContainer}> 
     <Image source={require('../assets/logo.png')} 
     style={styles.image}/>
     </View>
     <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={Props.goHome}>
     <View style={{marginRight:25,justifyContent:'center',alignItems:'center'}}>
       {Props.menu ? <Ionicons name="ios-arrow-forward" size={24} color={Colors.goldColor} /> :
       <View style={{flexDirection:'row'}}>
         
        <TouchableOpacity style={{marginRight:3}} onPress={Props.goHome}> <FontAwesome name="search" size={24} color={Colors.goldColor} /></TouchableOpacity>
        <TouchableOpacity onPress={Props.goCart}><AntDesign name="shoppingcart" size={28} style={{marginLeft:12}} color={Colors.goldColor} /></TouchableOpacity>

       </View> }
       
       </View>
     </TouchableOpacity>
    </View>
 
  );
};
 
 
const styles = StyleSheet.create({
  container:{
    width:windowWidth,
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor:'white',
    borderBottomWidth:1
  },
  image:{
    height:TITLE_HEIGHT,
    width:100
  }
    
  });
  export default MainTitle; 
  