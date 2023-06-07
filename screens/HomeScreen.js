import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/home.jpg')} />
      <Text style={styles.text}>FoodApp</Text>
      <TouchableOpacity>
        <Text style={styles.button} onPress={() => navigation.navigate('DrawerNavigator')}>Let's go! <FontAwesome name={'arrow-right'} size={20}/></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#655074",
    height: '100%',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'right',
    margin: 20,
  },
  image: {
    width: '100%',
    height: '80%',
    borderBottomLeftRadius: 200,
  },
  button: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'right',
    marginHorizontal: 20,
  },
});
