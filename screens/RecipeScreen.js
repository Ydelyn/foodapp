import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../reducers/favorites';


export default function RecipeScreen(props) {
  let tab = [];

  const dispatch = useDispatch();
  const data = props.route.params;
  const [count, setCount] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector((state) => state.favorites.value);

  useEffect(() => {
    for(const a of favorites){
      if(a.name === data.name){
        setIsFavorite(true);
      }
    }
  }, [])

  const handleFavorite = () => {
    favorites.find(e => e.name === data.name) ? dispatch(removeFavorite(data)) : dispatch(addFavorite(data));
  }

  for (const ingredient of data.ingredients) {
    tab.push(
    <View key={data.ingredients.indexOf(ingredient)} style={{flexDirection: 'row', justifyContent:'space-between', marginBottom: 10 }}>
      <Text style={{color:'#aaa', fontWeight: 'bold'}}>{ingredient.name}</Text>
      <Text style={{color:'#888', fontWeight: 'bold'}}>{(ingredient.amount)*count} {ingredient.unit}</Text>
    </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      background: 'linear-gradient(to right, red 50%, blue 50%)',
    },
  });




  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}locations={[0.5,0.5]} colors={['#fff', data.color]} style={styles.container}>
        <View style={{ width: '100%', height: '40%', flex: 1, justifyContent: "center", alignItems: "center", borderBottomLeftRadius: 150, backgroundColor: data.color, position: 'relative' }}>
        <FontAwesome name={'arrow-left'} size={20} style={{textAlign: 'left', padding: 50, position:'absolute', top: 0, left: -30}} onPress={() => {props.navigation.navigate('Search')}}/>
          <Image style={{ width: 250, height: 250 }} source={data.image} />
        </View>
        <View style={{ backgroundColor: '#fff', borderTopRightRadius: 150, width: '100%', height: '60%', alignItems: "center", paddingTop: 50, position:'relative'}}>
          <TouchableOpacity style={{position:'absolute', borderRadius:100, paddingVertical: 25, paddingHorizontal: 28, backgroundColor:'#655074', right: 35, top:-30}} onPress={() => (handleFavorite(), setIsFavorite(!isFavorite))}>
            <FontAwesome name={isFavorite ? 'bookmark' : 'bookmark-o'} size={20} color={'#fff'} style={'regular'}/>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '60%' }}>
            <View>
              <FontAwesome style={{textAlign:'center'}} name={'flash'} size={25} color={data.color}/>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{data.level}</Text>
            </View>
            <View>
              <FontAwesome style={{textAlign:'center'}} name={'clock-o'} size={25} color={data.color}/>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{data.time}</Text>
            </View>
            <View>
              <FontAwesome style={{textAlign:'center'}} name={'star'} size={25} color={data.color}/>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{data.rating}</Text>
            </View>
          </View>
          <Text style={{width: '80%', paddingTop : 20, fontSize : 40}}>{data.name}</Text>
          <Text style={{width: '80%', paddingTop : 5, }}>{data.longDesc}</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between', width : '80%', paddingTop : 20}}>
            <View>
              <Text style={{fontWeight : 'bold', fontSize: 20}}>Ingredients</Text>
              <Text style={{fontWeight : 'bold', color: '#aaa'}}>How many servings?</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center', }}>
              <TouchableOpacity style={{backgroundColor:'#eee', padding:15, borderTopLeftRadius: 20, borderBottomLeftRadius: 20}} onPress={() => count > 1 && setCount(count -1)}><Text>-</Text></TouchableOpacity>
              <Text style={{backgroundColor:'#eee', padding:15}}>{count}</Text>
              <TouchableOpacity style={{backgroundColor:'#eee', padding:15, borderTopRightRadius: 20, borderBottomRightRadius: 20}} onPress={() => setCount(count +1)}><Text>+</Text></TouchableOpacity>
            </View>
          </View>
          <ScrollView style={{width: '80%', marginTop: 30}}>
            {tab}
          </ScrollView>
        </View>
    </LinearGradient>
  );
}

