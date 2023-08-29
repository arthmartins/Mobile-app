import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MusicasNavScreen from './src/MusicasNavScreen';
import Biblioteca from './src/Biblioteca';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const Tab = createMaterialBottomTabNavigator()



class App extends Component{
  constructor(){
    super()
    this.state={
      musicas: [],
      playlists:[]
    }
    this.musicaLiked = this.musicaLiked.bind(this)
    this.deleteMusica = this.deleteMusica.bind(this)
    this.deleteMusicaPlaylist = this.deleteMusicaPlaylist.bind(this)
    this.deletePlaylist = this.deletePlaylist.bind(this)
  }
  addMusica = (musica) => {
    const musicas = this.state.musicas
    musicas.push(musica )

    this.setState({ musicas })
    console.log('estado do app.js: ', musica.artista)
    
 }
  addPlaylist = (playlist) => {
    const playlists = this.state.playlists
    playlists.push(playlist)

    this.setState({ playlists })
    console.log('estado do app.js: ', playlist.titulo)
  }

  addMusicaPlaylist = (musica,playlist)=> {
    const index = this.state.playlists.findIndex(item => {
    
    return item.id === playlist.id
  })
  
  const chosenPlaylist = this.state.playlists[index]

  chosenPlaylist.musicas.push(musica)
  const playlists = [
    ...this.state.playlists.slice(0, index),
    chosenPlaylist,
    ...this.state.playlists.slice(index + 1)
  ]
  this.setState({
    playlists
  })
}
  
 musicaLiked(musicaIndex){
  let musicas = this.state.musicas

  musicas.forEach((musica) => {
    if (musica.musicaIndex === musicaIndex){
      musica.liked = !musica.liked
    }
  })
  this.setState({ musicas })
}

  deleteMusica(musicaIndex){
 
  let { musicas } = this.state
  musicas = musicas.filter((musica) => musica.musicaIndex !== musicaIndex)
  this.setState({ musicas })
}

deleteMusicaPlaylist(musicaIndex,playlist){
  const index = this.state.playlists.findIndex(item => {
    return item.id === playlist.id
  })
  console.log("aaammmASDSADsadsafaf: ")
  let{ playlists} = this.state
  playlists[index].musicas = playlists[index].musicas.filter((musica) => musica.musicaIndex !== musicaIndex)
  
  
  this.setState({
    playlists
  })

}
  deletePlaylist(playlistIndex){
 
  let { playlists } = this.state
  playlists = playlists.filter((playlist) => playlist.playlistIndex !== playlistIndex)
  this.setState({ playlists })
}

  render(){
    return(
   
  
    <NavigationContainer>

        <Tab.Navigator
          shifting={false}
          activeColor='#ffffff'
          inactiveColor='#1e1e1e'
          barStyle={{backgroundColor: '#1C1C1C', padding: 5, borderWidth: 0.3, borderColor: "darkred"}}
          tabBarLabel={{color:'white'}
          }>
          
          <Tab.Screen name = 'Suas Musicas' >
              {props => <MusicasNavScreen {...props}
              musicas={this.state.musicas}
              addMusica={this.addMusica}
              musicaLiked={this.musicaLiked}
              deleteMusica={this.deleteMusica}/>}
              
          </Tab.Screen>
           <Tab.Screen name = 'Biblioteca'>
              {props => <Biblioteca {...props}
            
              playlists={this.state.playlists}
              addPlaylist={this.addPlaylist}
              musicaLiked={this.musicaLiked}
              deletePlaylist={this.deletePlaylist}
              deleteMusicaPlaylist={this.deleteMusicaPlaylist}
              musicas={this.state.musicas}
              addMusicaPlaylist={this.addMusicaPlaylist}/>}
          </Tab.Screen>
       
           
        </Tab.Navigator>  
   
      </NavigationContainer> 
     
    

    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F4F4F',

  },
  barratopo: {
    flex: 1,
    backgroundColor: "black",
    width: 500,
    marginBottom: 825,
    borderColor: "darkgreen",
    borderWidth: 1
  },
  AppName: {
    fontStyle: 'italic',
    fontSize: 25,
    marginTop: 40,
    marginLeft: 10 
  }

})

export default App