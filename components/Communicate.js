
import React from 'react';
import { StyleSheet, Text, View,Dimensions,TextInput,TouchableOpacity,ImageBackground  } from 'react-native';
import { AntDesign ,Entypo,FontAwesome,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get('window').width;
const widthItem=windowWidth*0.75;
const PlaceHeb='סחנין / רחוב 805/ سخنين'
import Colors from '../constants/Colors';


const Communicate=Props=>{
  const Icons=<View style={styles.Media}>
    <a href="https://www.facebook.com/Fitness-bar-sakhnin-109919470533905/" style={{textDecoration: 'none'}}><Entypo name="facebook" size={30} color={'blue'}  style={{margin:10 }}/></a>     
    <a href="https://instagram.com/fitness.bar.sakhnin0?igshid=1dtwax1fs6jij" style={{textDecoration: 'none'}}> <AntDesign name="instagram" size={30} color={'#833AB4'}style={{margin:10 }} /></a>
    <a href="https://instagram.com/fitness.bar.sakhnin0?igshid=1dtwax1fs6jij" style={{textDecoration: 'none'}}><FontAwesome name="whatsapp" size={31} color={'#25D366'} style={{margin:10 }} /></a>
   </View>
    return ( 
      
     <View style={styles.container}>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
          </View>


          <TouchableOpacity onPress={()=>{}} style={styles.containerIcon}>
             <MaterialCommunityIcons name="phone-settings" size={24} color={Colors.goldColor} style={{marginRight:26}}/>  <Text>050-4400-432</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{}} style={styles.containerIcon}>
            <Fontisto name="map" size={24} color={Colors.goldColor} style={{marginRight:26}}/><Text>{PlaceHeb}</Text>
          </TouchableOpacity>

           
        <View style={{marginTop:9}}> {Icons}</View>
         
        
     </View>
      
  );
};
 
 
const styles = StyleSheet.create({
    container:{
        width:windowWidth, 
        height:110,
         
    },
    containerIcon:{
     flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginTop:15,
     
   },
   Media:{
    alignItems:'flex-end',
    justifyContent:'center',
    flexDirection:'row',
     
  }
    
  });
  export default Communicate; 