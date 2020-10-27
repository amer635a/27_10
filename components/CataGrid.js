import React from 'react';
import { StyleSheet, Text, View ,Dimensions,ImageBackground} from 'react-native';
 

const windowWidth = Dimensions.get('window').width;

const showHEB='צפיה'
let WidthGrid=windowWidth/2-windowWidth/10
let heightGrid=windowWidth*0.65

if(windowWidth>900){
   WidthGrid/=2;
   heightGrid = WidthGrid/2 +WidthGrid *0.9;

}

 
const CataGrid=Props=>{
    return ( 
     <View style={{marginBottom:25}}>
  <View style={styles.container}>
      
      <ImageBackground source={require('../assets/1.png')} style={styles.ImageBackground}> 
          <View style={{justifyContent:'flex-start',alignItems:'flex-start',marginLeft:10}}>
             
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
              <View style={styles.showContainer}>
                 <Text style={{fontSize:22,color:'white'}}> {showHEB}</Text>
              </View>

          </View>
     
       
      </ImageBackground>
  </View>
 <View style={{justifyContent:'center',alignItems:'center'}}>
 <Text style={{fontFamily:'open-sans-bold',fontSize:25}}>
     {Props.title}
 </Text>
</View>
</View>
  );
};
 
 
const styles = StyleSheet.create({
    container:{
        width:WidthGrid,
        height:heightGrid,
         
        marginHorizontal:10,
        
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        
    },
    ImageBackground:{
        flex: 1,
        opacity:1,
        resizeMode:'center'
    },
    showContainer:{
        backgroundColor:'black',
        width:'60%',
        borderWidth:1,
        borderColor:'white',
        marginTop:heightGrid/2-30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    }
    
  });
  export default CataGrid; 