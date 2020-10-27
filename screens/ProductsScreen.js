
import React from 'react';
import { StyleSheet, Text, View,Dimensions ,ScrollView,Image,FlatList } from 'react-native';
 
import MainTitle from '../components/MainTitle'; 
import Product from '../models/product';
import PoularItem from '../components/PoularItem';

const windowWidth = Dimensions.get('window').width;

const ProductsScreen=Props=>{
    const catagory = Props.navigation.getParam('catagory');
    return ( 
    
   <View style={{flex:1}}>
       <View>
       <MainTitle
        goMenu={() => {
        Props.navigation.navigate({routeName: 'MenuScreen'});}}
        goHome={() => {
        Props.navigation.navigate({routeName: 'HomeScreen'});}}
        home={1}
       />
       </View>
       
         <ScrollView  style={{flex:1}}>
            <View>
          <View style={styles.containerimage}>
            <Image
            style={styles.image}
            source={require('../assets/1.png')}
            />
         </View> 
         <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:30,fontFamily: 'open-sans-bold',}}>{catagory.title}</Text>

          </View> 
              <View style={{justifyContent:'center',alignItems:'center'}}>
          <FlatList
      data={PRODUCTS}
       numColumns={2}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PoularItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => { Props.navigation.navigate({routeName: 'ProductDetailScreen', params: {product: itemData.item}}); }}
        /> 
      )}
    />
              </View> 
              
              </View>
           </ScrollView>

       





   </View>
 
  );
};
 
 
const styles = StyleSheet.create({
    containerimage:{
        width:windowWidth,
        height:200
    },
    image:{
        width:'100%',
        height:'100%'

    },
    container:{

    }
    
  });
  export default ProductsScreen; 


  const PRODUCTS = [
    new Product(
      '1',
      'חלבון',
      'https://www.linkpicture.com/q/7_77.png',
      'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
      29.99
    ),
    new Product(
        '2',
        'חלבון',
        'https://www.linkpicture.com/q/6_91.png',
        'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
        29.99
      ),
      new Product(
        '3',
        'חלבון',
        'https://www.linkpicture.com/q/4_149.png',
        'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
        29.99
      ),
      new Product(
        '4',
        'חלבון',
        'https://www.linkpicture.com/q/3_189.png',
        'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
        29.99
      ),
      new Product(
        '5',
        'חלבון',
        'https://www.linkpicture.com/q/1_343.png',
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