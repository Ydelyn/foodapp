import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';


export default function MyRecipesScreen({navigation}) {
  const favorites = useSelector((state) => state.favorites.value);

  let tab = favorites.map((e, i) => {
    return (
      <TouchableOpacity key={e.id} style={[styles.recipe, { backgroundColor: e.color }]} onPress={() => navigation.navigate('Recipe', { ...e })}>
        <Image style={styles.imageRecipe} source={e.image} />
        <Text style={styles.titleRecipe}>{e.name}</Text>
        <Text style={styles.textRecipe}>{e.desc}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The best ones...</Text>
      <ScrollView>
        <View style={styles.grid} >
          {tab}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#fff",
    padding: 15,
    paddingTop: 100,
  },

  title: {
    fontSize: 25,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: '#655074',
  },

  grid: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },

  recipe: {
    width: '45%',
    height: 250,
    color: '#000',
    margin: 8,
    borderRadius: 30,
    borderBottomLeftRadius: 80,
    borderTopRightRadius: 80,
  },

  imageRecipe: {
    width: 120,
    height: 100,
    margin: 20,
  },

  titleRecipe: {
    textAlign: 'right',
    marginHorizontal: 10,
    color: '#655074',
    fontWeight: 'bold',
    fontSize: 15,
  },

  textRecipe: {
    textAlign: 'right',
    marginHorizontal: 10,
    color: '#555',
    fontSize: 12,
  },
});
