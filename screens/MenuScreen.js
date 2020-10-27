import React,{useState} from 'react';
import { StyleSheet, Text, View,Dimensions,TouchableOpacity ,FlatList,ScrollView,ImageBackground   } from 'react-native';
import { AntDesign ,Entypo,FontAwesome,Ionicons} from '@expo/vector-icons'; 

import Card from '../components/Card'
import MainTitle from '../components/MainTitle'; 
import GridMenu from '../components/GridMenu'; 
import Colors from '../constants/Colors'
import Product from '../models/product';
import catagory from '../models/catagory';
import menu from '../models/catagory';
import Search from '../components/Search'
import IconsMedia from '../components/IconsMedia'
 

 
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
        '1',
        'אוכל ו שתיה',
          PRODUCTS,
        'https://www.linkpicture.com/q/item2.png',
        0
      ),
      new catagory(
        '1',
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
 
const windowWidth = Dimensions.get('window').width;
const windowheight= Dimensions.get('window').height;



const MenuScreen=Props=>{
  const [isPress, setIsPress] = useState(false);
  
    return ( 
      <View  style={{flex:1}}>
      <ImageBackground source={require('../assets/b1.png')} style={styles.ImageBackground}>
     
      <MainTitle
        goMenu={()=>{}}
        goHome={() => {
        Props.navigation.navigate({routeName: 'HomeScreen'});}}
        menu={1}
      />
      
      <Search/>
      <ScrollView> 
        {menus.map((menu) =>  
        <View> 
          <GridMenu
          title={menu.title}
          data={catagory1es}
          navigation={Props.navigation}
          />

        </View>  )}
     
    
     <View style={{ marginTop:windowheight*0.3 }}>
        <IconsMedia />
     </View>
     </ScrollView>  
  </ImageBackground>
  </View>
  );
};
  
 
const styles = StyleSheet.create({
  Media:{
    width:windowWidth,
    alignItems:'flex-end',
    justifyContent:'center',
    flexDirection:'row',
  },
  ImageBackground:{
    height:windowheight,
    width:windowWidth
  }
  });
  export default MenuScreen; 
  
 
  