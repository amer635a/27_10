import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions,FlatList ,ScrollView } from 'react-native';
 
import { Ionicons,FontAwesome } from '@expo/vector-icons'; 
import Colors from '../constants/Colors'
 

const windowWidth = Dimensions.get('window').width;

 

const GridMenu=Props=>{
    const [isPress, setIsPress] = useState(false);
    const datacatagory=Props.data;

    const renderGridItem=(itemData)=>{
        return (
       <View>
            <TouchableOpacity onPress={()=>{ Props.navigation.navigate({routeName: 'ProductsScreen', params: {catagory: itemData.item } }); }}>  
            <View style={{flexDirection:'row ',justifyContent:'flex-end'}}>
            <Text style={{fontFamily: 'open-sans-bold', fontSize: 18}}
       > {itemData.item.title } </Text>
            <View style={{justifyContent:'center',alignItems:'center', marginLeft:5}}><FontAwesome style={{marginRight:15}} name="circle" size={10} color={Colors.goldColor} /></View>
             </View>
             </TouchableOpacity>
       </View>);}
     

    return ( 
         
    <View  >
    <View>
        <TouchableOpacity style={{marginTop:15}} onPress={()=>{ setIsPress(prevState => !prevState) }}>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
           
               <View style={{width:windowWidth/4-10,justifyContent:'center',alignItems:'center'}}> 
               {isPress ?<Ionicons name="ios-arrow-down" size={30} color={Colors.goldColor}  /> :<Ionicons name="ios-arrow-back" size={30}   color={Colors.goldColor} />   }    
               </View>
               <View style={{width:windowWidth*0.2,justifyContent:'center',alignItems:'center'}}> <Text style={{fontFamily: 'open-sans-bold', fontSize: 20}} >{Props.title}</Text></View>
            </View>
        </TouchableOpacity>
        <View>
            {isPress ? <FlatList keyExtractor={(item,index)=>item.id} 
      data={datacatagory}
      renderItem={renderGridItem}
        /> :null }
        
 
        </View>
    </View>
    <View >

    </View>
    
    
  </View>
   
  );
};
 
 
const styles = StyleSheet.create({
    
  });
  export default GridMenu; 