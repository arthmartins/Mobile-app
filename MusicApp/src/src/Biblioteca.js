import { createStackNavigator } from '@react-navigation/stack'
import Playlists from './Playlists'
import AddPlaylist from './AddPlaylist'
import MusicasPlaylist from './MusicasPlaylist'
import AddMusicPlaylist from './AddMusicPlaylist'
import Favoritos from './Favoritos'


const BibliotecaNav = createStackNavigator()

const Biblioteca = ({playlists,addPlaylist,musicas,addMusicaPlaylist,musicaLiked,deleteMusicaPlaylist,deletePlaylist}) => (
    <BibliotecaNav.Navigator
    initialRouteName='Playlists'
    screenOptions={{headerStyle:{backgroundColor: 'firebrick'}, headerTintColor: '#ffffff'}} >
        <BibliotecaNav.Screen name="Playlists">
        { props => <Playlists {...props} playlists={playlists} deletePlaylist={deletePlaylist}/>}

        </BibliotecaNav.Screen>

        <BibliotecaNav.Screen name="Adicionar Playlist" options={({ route }) => ({ title: route.name})}>
        { () => <AddPlaylist addPlaylist={addPlaylist} />}
        </BibliotecaNav.Screen> 

        <BibliotecaNav.Screen name="Musicas Playlist" options={({ route }) => ({ title: route.params.playlist.playlist})}>
        { props => <MusicasPlaylist {...props}  musicaLiked={musicaLiked}
            deleteMusicaPlaylist={deleteMusicaPlaylist}/>}
        </BibliotecaNav.Screen> 

        <BibliotecaNav.Screen name="AddMusicPlaylist" options={({ route }) => ({ title: route.params.playlist.playlist})}>
        { props => <AddMusicPlaylist {...props} musicas={musicas}
            addMusicaPlaylist={addMusicaPlaylist}/>}
        </BibliotecaNav.Screen> 
        <BibliotecaNav.Screen name="Favoritos" options={({ route }) => ({ title: route.name})}>
        { props => <Favoritos {...props} musicas={musicas}
            musicaLiked={musicaLiked}/>}
        </BibliotecaNav.Screen> 

    </BibliotecaNav.Navigator>
  )
 
 
 export default Biblioteca