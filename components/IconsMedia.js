import React from 'react';
import { StyleSheet, View ,Image,TouchableOpacity} from 'react-native';

const IconsMedia=Props=>{
    return ( 
     
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>{}}>
             <Image source={require('../assets/goldenface.png')} 
               style={styles.image}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
             <Image source={require('../assets/goldeninsta.png')} 
               style={styles.image}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
             <Image source={require('../assets/goldenwhats.png')} 
                style={styles.image}/>
        </TouchableOpacity>
        </View>
      </View>
 
  );
};
 
 
const styles = StyleSheet.create({
    image:{
      width:55,
      height:55,
      marginLeft:10
      }
  });
  export default IconsMedia; 