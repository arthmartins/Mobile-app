import { createStackNavigator } from '@react-navigation/stack'
import AddMusica from './AddMusica'
import Musicas from './Musicas'
import { View, StyleSheet, ScrollView,Text } from 'react-native';

const MusicaNav = createStackNavigator()


const MusicasNavScreen = ({musicas,addMusica,musicaLiked,deleteMusica}) => (
   <MusicaNav.Navigator
      initialRouteName='Musicas'
      screenOptions={{headerStyle:{backgroundColor: 'firebrick'}, headerTintColor: '#ffffff'}}>
     <MusicaNav.Screen name="Musicas">
       { props => <Musicas {...props} musicas={musicas} 
       musicaLiked={musicaLiked}
       deleteMusica={deleteMusica}/> }
     </MusicaNav.Screen>
     <MusicaNav.Screen name="Adicionar Musica" options={({ route }) => ({ title: route.name })}>
       { () => <AddMusica addMusica={addMusica}/> }
     </MusicaNav.Screen>
   </MusicaNav.Navigator>
  
 )

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#363636',
  
    },
})

export default MusicasNavScreen