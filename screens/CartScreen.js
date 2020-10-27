import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  ActivityIndicator,Image,
  ScrollView,Dimensions,TouchableOpacity,ImageBackground,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign ,Entypo,FontAwesome,Ionicons} from '@expo/vector-icons'; 

import Colors from '../constants/Colors';
import CartItem from '../components/CartItem'
import Card from '../components/CardCart'
import Carda from '../components/Card'
import * as cartActions from '../store/actions/cart';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const widthImageMain=windowWidth*0.8;
const Title_Image_Height=TITLE_HEIGHT-5;
const TITLE_HEIGHT=40;
const sumHEB='ס"כ'
const orderHEB='הזמנה דרך'
 
 

const CartScreen = Props => {
  const [isLoading, setIsLoading] = useState(false);

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productImage: state.cart.items[key].productImage,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });
  const dispatch = useDispatch();
 
  return (
    <View>

<View style={styles.container}>
         
         <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>{
           Props.navigation.goBack();
         }}>
    
         <View style={{marginLeft:30,justifyContent:'center',alignItems:'center'}}>
          <Ionicons name="ios-arrow-back" size={24} color={Colors.goldColor}/>  </View>
         </TouchableOpacity  >
        <View style={styles.imageContainer}> 
         <Image source={require('../assets/logo.png')} 
         style={styles.image}/>
         </View>
         
         <View style={{marginRight:20,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
         <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => {
           Props.navigation.navigate({routeName: 'HomeScreen'});}}>
         <AntDesign name="home" size={24} color={Colors.goldColor} /> 
         </TouchableOpacity>
         
           </View>
         
        </View>

        <ScrollView>
         
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          {sumHEB} ₪:{' '}
          <Text style={styles.amount}>
            {Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.colorblue} />
        ) : (
          <View style={{height:40,marginBottom:40}}>
           <Carda>
            <View >
           <TouchableOpacity disabled={cartItems.length === 0} onPress={() => {window.location.reload(false)}} 
           style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
           <FontAwesome name="whatsapp" size={31} color={'#25D366'} style={{margin:10 }} /> <Text>{orderHEB}</Text> 
          </TouchableOpacity>
          </View>
          </Carda>
          
          </View>
        )}
      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.productId}
        renderItem={itemData => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            image={itemData.item.productImage}
            deletable
            onRemove={() => {
              dispatch(cartActions.removeFromCart(itemData.item.productId));
            }}
          />
       )}
      />
    </View>
    
    </ScrollView>

 
    </View>
  );
};

 

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  amount: {
    color: 'green'
  },
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
  },
  ImageBackground:{
    width:windowWidth,
    height:windowHeight+50

  }
});

export default CartScreen;



/**
 <ScrollView>
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>
            ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.primary} />
        ) : (
          <Button
            color={Colors.accent}
            title="Order Now"
            disabled={cartItems.length === 0}
            onPress={()=>{}}
          />
        )}
      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.productId}
        renderItem={itemData => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            deletable
            onRemove={() => {
              dispatch(cartActions.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
    </ScrollView>
 */
/*
<View style={{justifyContent:'center',alignItems:'center'}} >
           <TouchableOpacity disabled={cartItems.length === 0} onPress={() => {window.location.reload(false)}} 
           style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
             <Image source={require('../assets/hzmna.png')} 
                style={{width:windowWidth*0.5,height:100,resizeMode:'stretch'}}/>
          </TouchableOpacity>
*/
