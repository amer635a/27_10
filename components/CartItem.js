import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height
;
const WidthGrid= windowWidth*0.9;
const HeightGrid= windowHeight*0.21;

const CartItem = props => {
  return (
   <View style={{justifyContent:'center',alignItems:'center',marginBottom:10}}>
    <View style={{width:WidthGrid,height:HeightGrid }}>
      <View style={{flexDirection:'row-reverse'}}>
    
        <View style={styles.contanierMainImage}>
        <Image source={{uri:props.image}} 
           style={{width:'100%',height:'100%'}}/>
          </View>
         

        <View style={{width:'60%',height:HeightGrid*0.9 }}>

          <View style={{height:'80%' ,alignItems:'center' ,justifyContent:'flex-start'}}>
            <Text style={{fontFamily: 'open-sans-bold',fontSize: 30}}>{props.title}</Text>
          </View>

          <View style={{height:'20%', flexDirection:'row-reverse'  }}>
         <View style={{justifyContent:'center',alignItems:'center'  }}> <Text style={styles.quantity}> x {props.quantity} </Text> 
         </View>
         <View style={{justifyContent:'center',alignItems:'center' }} > <Text style={styles.mainText}>₪{props.amount.toFixed(2)}</Text> </View>
         <View style={{width:'45%' ,marginLeft:5}} >{props.deletable && (
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}
          >
            <Ionicons
              name={'ios-trash'}
              size={23}
              color="red"
            />
          </TouchableOpacity>
        )}</View>
          </View>

        </View>

      </View>
  
    </View>
    <View style={{ width:WidthGrid,opacity:0.2,borderWidth:1}}>
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  contanierMainImage:{
    width:'40%',
    height:HeightGrid*0.9 ,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantity: {
    fontFamily: 'open-sans',
    color: '#888',
    fontSize: 16
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 20
  },
  deleteButton: {
    marginLeft: 20
  }
});

export default CartItem;
/*
<View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity} </Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
      {props.deletable && (
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}
          >
            <Ionicons  name={ 'ios-trash'} size={23} color="red"/>
              
            
              
            
          </TouchableOpacity>
        )}
        <Text style={styles.mainText}>    ₪{props.amount.toFixed(2)}</Text>
        
      </View>
    </View>*/
