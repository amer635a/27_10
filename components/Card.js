import React from 'react';
import { Children } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';
import Colors from '../constants/Colors';
const Card=Props=>{
    return ( 
     
<LinearGradient
              colors={[Colors.color1grad, Colors.color2grad]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ borderRadius: 5 }}
            >
              <View style={styles.registerButtonStyle}>
              {Props.children}
              </View>
            </LinearGradient>
  );
};
 
 
const styles = StyleSheet.create({
    registerButtonStyle: {
        paddingLeft: 5,
        paddingRight: 12,
        paddingBottom: 5,
        paddingTop: 5,
        margin: 1 ,
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    
    },
  });
  export default Card; 