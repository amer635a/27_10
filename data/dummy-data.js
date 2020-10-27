import Product from '../models/product';
import catagory from '../models/catagory';
import menu from '../models/catagory';

export const PRODUCTS = [
    new Product(
      '1',
      'חלבון',
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
        'חלבון',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
        29.99
      ),
      new Product(
        '4',
        'חלבון',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
        29.99
      ),
      new Product(
        '5',
        'חלבון',
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
 
export const catagory1 = [
    new catagory(
      '1',
      'חלבון',
        PRODUCTS,
      'https://www.linkpicture.com/q/item1.png',
      0
    ),
    new catagory(
        '1',
        'חלבון',
          PRODUCTS,
        'https://www.linkpicture.com/q/item2.png',
        0
      ),]
      constructor(id,  title, catagories )
export const menus=[
    new menu(1,'ספורט',catagory1),
    new menu(1,'מזון',catagory1),
 
]      