import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';
import TryScreen from '../screens/TryScreen';
import CartScreen from '../screens/CartScreen';
const ProductsNavigator = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        TryScreen:TryScreen,
        MenuScreen:MenuScreen,
        ProductDetailScreen:ProductDetailScreen,
        ProductsScreen:ProductsScreen,
        CartScreen:CartScreen,
    } ,{
        headerMode:'none'
    }
   
  );

  
  export default createAppContainer(ProductsNavigator);