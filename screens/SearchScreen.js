import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { recipes } from '../data/recipes';


export default function SearchScreen({ navigation }) {

  let tab = recipes.map((e, i) => {
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
      <Text style={styles.title}>What do you want to eat today?</Text>
      <Text style={styles.text}>Our daily healthy meal plans</Text>
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
  text: {
    fontSize: 15,
    color: '#aaa',
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
  grid: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
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
