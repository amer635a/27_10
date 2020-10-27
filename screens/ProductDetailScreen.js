import React,{setState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,ImageBackground,
  ScrollView,Dimensions,Image,Linking } from 'react-native';
import { AntDesign ,Entypo,FontAwesome,Ionicons} from '@expo/vector-icons'; 
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';
import * as productsActions from '../store/actions/products';

import Colors from '../constants/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const widthImageMain=windowWidth*0.8;
const Title_Image_Height=TITLE_HEIGHT-5;
const TITLE_HEIGHT=40;
const MainImagewidth=windowWidth*0.95
const MainImageHeigt=windowHeight*0.68

const PriceHeb='מחיר'
const ToOrder='להזמנה'
const AddCart='הוספה לסל קניות'

const ProductDetailScreen=Props=>{
  const product = Props.navigation.getParam('product');
  const Quantity=7;
  const mobileNumber='0543877432'
  const whatsAppMsg='רוצה להזמין        '+product.title  +'כמות      '+Quantity
  const dispatch = useDispatch();
  
  
  

    return ( 
      <ImageBackground source={require('../assets/b1.png')} style={styles.ImageBackground}>
        
      
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
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => {
        Props.navigation.navigate({routeName: 'CartScreen'});}}>
      <AntDesign name="shoppingcart" size={28} style={{marginLeft:12}} color={Colors.goldColor} />
      </TouchableOpacity>
        </View>
      
     </View>

     <ScrollView style={{flex:1}}> 
     <View>
     
     <View style={{ width:windowWidth,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30,fontFamily: 'open-sans-bold',}}>{product.title}</Text>
       </View>

       <View style={ {justifyContent:'center',alignItems:'center',marginTop:10,elevation: 5,marginBottom:10}}>
        <View style={ styles.borderCata  }></View>
        </View>

     <View style={{justifyContent:'center',alignItems:'center'}}>
     <View style={styles.MainImageContainer}>
     <Image
        style={styles.MainImage}
        source={require('../assets/1.png')}
      />
 
     </View>
     </View>

      <View style={{justifyContent:'center',alignItems:'center',}}>
        <View style={{ width:MainImagewidth,opacity:0.3}}>
          <View style={{marginTop:10,marginBottom:5,borderTopWidth:1}}></View>
        </View>
     </View>


     <View style={{marginRight:windowWidth*0.03,justifyContent:'flex-end'}}>
     <View style={{ }}>
      <Text style={{fontSize:18,fontFamily: 'open-sans-bold'}}> {product.details}</Text>
      </View>
      </View>

      <View style={{marginRight:windowWidth*0.03}}>
        <View>
          <Text style={{fontSize:27,fontFamily: 'open-sans-bold'}}>{PriceHeb} : ₪{product.price}</Text>
        </View>
        </View>
     
    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>{}}><Image source={require('../assets/plus.png')}  style={styles.imagePlusMenos}/></TouchableOpacity>
      <View style={{alignItems:'center',justifyContent:'center'}}>  <Text style={{width:60,height:40,borderWidth:1,textAlign:'center',alignItems:'center'}}>0</Text></View>
      <TouchableOpacity onPress={()=>{}}><Image source={require('../assets/menos.png')}  style={styles.imagePlusMenos}/></TouchableOpacity>
    
     </View>
     <View style={{justifyContent:'center',alignItems:'center'}}>
     <TouchableOpacity style={{}} onPress={() => {dispatch(cartActions.addToCart(product));}}
       style={styles.containerCartShop}>
        <Text style={{fontSize:28,fontFamily: 'open-sans-bold'}}>{AddCart}<AntDesign name="shoppingcart" size={28} style={{marginLeft:12}} color={Colors.goldColor} /> </Text>
     </TouchableOpacity>
     </View>
     
     <View style={{height:50}}>

     </View>
     
     </View>
     </ScrollView>
    
     
     </ImageBackground>
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
  },
  ImageBackground:{
    width:windowWidth,
    height:windowHeight,
    flex:1

  },
  borderCata:{
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    width:windowWidth/5,
    borderBottomWidth:4,
    borderColor:Colors.goldColor
  },
  containerCartShop:{
     width:windowWidth*0.75,
     alignItems:'center',
     marginTop:10,
     backgroundColor:'rgb(250,250,210)' ,
     shadowColor: 'black',
     shadowOpacity: 0.26,
     shadowOffset: { width: 0, height: 2 },
     shadowRadius: 8,
     elevation: 5,
  },
  
  MainImageContainer:{
    width:MainImagewidth  ,
    height:MainImageHeigt  ,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  MainImage:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    shadowColor: 'black',
  },
  imagePlusMenos:{
    height:60,
    width:60
  }
  });
  export default ProductDetailScreen; 

  /**
   * const initiateWhatsApp = () => {
     
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      'whatsapp://send?text=' + 
       whatsAppMsg +
      '&phone=+972' + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };
   */