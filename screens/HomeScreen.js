import React, { Component } from 'react';
import LinearGradient from 'react-native-web-linear-gradient';
import { StyleSheet, View, WebView, Platform ,Dimensions,Text,ScrollView,ImageBackground,FlatList,TouchableOpacity,Image  } from 'react-native';
import { AntDesign ,Entypo,FontAwesome,Ionicons,MaterialCommunityIcons,} from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import MainTitle from '../components/MainTitle'; 
import Colors from '../constants/Colors';
import CataGrid from '../components/CataGrid'
import IconsMedia from '../components/IconsMedia'

import Product from '../models/product';
import catagory from '../models/catagory';
import menu from '../models/catagory';
import SaleItem from '../components/SaleItem';

const cataHEB='קטגוריות/ '
 
const PlaceHeb='סחנין-الشارع رئيسي بنايه عمر مختار / مطعم دبي'

const windowheight= Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const backgroundheight=windowheight-40;
let numColumnsCheck=2;
 
if (windowWidth>900){
  numColumnsCheck=3
}
     
const TryProduct= new Product(
  '1',
  'חטיף',
  'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
  'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
  29.99
)
const PRODUCTS = [
  new Product(
    '1',
    'חטיף',
    'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
    'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
    29.99
  ),
  new Product(
      '2',
      'חלבון',
      'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
      'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
      29.99
    ),
    new Product(
      '3',
      'אוכל',
      'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
      'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
      29.99
    ),
    new Product(
      '4',
      'אוכל 1',
      'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
      'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
      29.99
    ),
    new Product(
      '5',
      'אוכל 2',
      'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
      'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
      29.99
    ),
    new Product(
      '6',
      'חלבון',
      'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
      'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
      29.99
    ),
]

const catagory1es = [
  new catagory(
    '1',
    'משקלות',
      PRODUCTS,
    'https://www.linkpicture.com/q/item1.png',
    0
  ),
  new catagory(
      '2',
      'אוכל ו שתיה',
        PRODUCTS,
      'https://www.linkpicture.com/q/item2.png',
      0
    ),
    new catagory(
      '3',
      'חטיפים',
        PRODUCTS,
      'https://www.linkpicture.com/q/item2.png',
      0
    ),
    new catagory(
      '4',
      'חטיפים',
        PRODUCTS,
      'https://www.linkpicture.com/q/item2.png',
      0
    ),
    new catagory(
      '5',
      'חטיפים',
        PRODUCTS,
      'https://www.linkpicture.com/q/item2.png',
      0
    ),
    new catagory(
      '6',
      'חטיפים',
        PRODUCTS,
      'https://www.linkpicture.com/q/item2.png',
      0
    ),
   
  
  
  ]

const menus=[
  new menu(1,'ספורט',catagory1es),
  new menu(2,'לחם',catagory1es),
  new menu(3,'שתיה',catagory1es),
  new menu(4,'מזון',catagory1es),

]   

const DATAPRODUCT= [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-21121221212',
    title: 'מקלות פקינמון',
    imageUrl:'../assets/1.png',
    Newprice:90,
    Oldprice:100

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-211212222212',
    title: 'מקלות פקינמון',
    imageUrl:'../assets/2.png',
    Newprice:12,
    Oldprice:100
  },
  {
    id: '58694a0f-3da1-471f-bd96-145511112 vvvv72',
    title: 'מקלות פקינמון',
    imageUrl:'../assets/3.png',
    Newprice:10,
    Oldprice:1
  },
  {
    id: '58694a0f-3da1-471f-bd96-145511112 awaw72',
     title: 'מקלות פקינמון',
     imageUrl:'../assets/4.png',
    Newprice:88,
    Oldprice:100
  },
   
];
const HomeScreen=Props=>{
    return(
      <View style={{flex:1,backgroundColor:'white'}}>
        <MainTitle
        goMenu={() => {
        Props.navigation.navigate({routeName: 'MenuScreen'});}}
        goHome={() => {
        Props.navigation.navigate({routeName: 'HomeScreen'});}}
        goCart={() => {
          Props.navigation.navigate({routeName: 'CartScreen'});}}

        home={1}
       />
       <ScrollView style={{flex:1}}>
       <ImageBackground source={require('../assets/store1.png')} style={styles.ImageBackground}>
         <View style={{width:windowWidth,height:windowheight,justifyContent:'center',alignItems:'center'}}>
           <View style={{borderTopWidth:3,borderBottomWidth:3,borderColor:'white'}}>
             <Text style={{fontFamily:'open-sans-bold',fontSize:30,color:'white'}}>Fitness1 Bar sakhnin</Text>
           </View>
           <View>
             <Text style={{color:'white'}}>Change your body,change your life</Text>
           </View>

         </View>
 
       </ImageBackground>
       <View style={{backgroundColor:'white',marginTop:10}}>

       <View style={{justifyContent:'center',alignItems:'center',marginTop:50 }}>
           
           <Image source={require('../assets/SaleSanbl.png')} 
     style={{width:200,height:100,resizeMode:'stretch',marginBottom:20}}/>    
       </View>
        <View style={ {justifyContent:'center',alignItems:'center',elevation: 5,}}>
        <View style={ styles.borderCata  }></View>
        </View>
         
 
            <FlatList
             data={DATAPRODUCT}
              horizontal
             keyExtractor={item => item.id}
             renderItem={itemData => (
    
              <SaleItem
               image={itemData.item.imageUrl}
               title={itemData.item.title}
               Newprice={itemData.item.Newprice}
               Oldprice={itemData.item.Oldprice}
                onSelect={() => { Props.navigation.navigate({routeName: 'ProductDetailScreen', params: {product: TryProduct}}); }}
                /> 
                )}/>

       <View style={{justifyContent:'center',alignItems:'center',marginTop:50 }}>
             
             <Image source={require('../assets/catagorHeb3.png')} 
               style={{width:150,height:40,resizeMode:'stretch'}}/>
       </View>
        <View style={ {justifyContent:'center',alignItems:'center',marginTop:10,elevation: 5,}}>
        <View style={ styles.borderCata  }></View>
        </View>
        <View style={{height:30}}></View>

        <View style={{justifyContent:'center',alignItems:'center'}}>        <FlatList
      data={catagory1es}
      numColumns={numColumnsCheck}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <CataGrid
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
           
          onSelect={() => { Props.navigation.navigate({routeName: 'ProductDetailScreen', params: {product: TryProduct}}); }}
        /> 
      )}
    />
    </View>
    </View>
   
   <View style={{width:windowWidth,borderTopWidth:1,opacity:0.1}}></View>

  <View style={{ }}>
   <IconsMedia/>
 <View style={{justifyContent:'flex-start',alignItems:'flex-start',padding:20}}>
   <TouchableOpacity onPress={()=>{}} style={styles.containerIcon}>
             <MaterialCommunityIcons name="phone-settings" size={24} color={Colors.goldColor} style={{marginRight:26}}/>  <Text>050-4400-432</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{}} style={styles.containerIcon}>
            <Fontisto name="map" size={24} color={Colors.goldColor} style={{marginRight:26}}/><Text>{PlaceHeb}</Text>
            
          </TouchableOpacity>
    </View>
  </View>
       </ScrollView>
      </View>
  
 );
};
 
 
const styles = StyleSheet.create({
  ImageBackground:{
    flex: 1,
    justifyContent: "center" ,
    opacity:0.9,
    resizeMode:'center'
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
   Maincata:{
    fontFamily:'open-sans-bold',
    fontSize:30
   },
   containerIcon:{
    flexDirection:'row',
   justifyContent:'flex-start',
   alignItems:'flex-start',
   marginTop:15,
  },
  image:{
    width:55,
    height:55,
    marginLeft:10,
    
  }
    
  });
  export default HomeScreen; 
 