 
import React,{useState} from 'react';
 
import { StyleSheet, Text, View,Dimensions  } from 'react-native';
import { Searchbar } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
 

const Search=Props=>{
     
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return ( 
     <View style={{justifyContent:'center',alignItems:'center'}}>
    <View style={styles.contaniersearch}>
         <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  </View>
  </View>
 
  );
};
 
 
const styles = StyleSheet.create({
    contaniersearch:{
        width:windowWidth*0.75,
        shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    }
  });
  export default Search; 