
import React from 'react'
import {
 View,
 Text,
 StyleSheet,
 TouchableWithoutFeedback,
 TouchableHighlight,
 ScrollView,
 Image
} from 'react-native'
import MusicButton from './MusicButton'

export default class MusicasPlaylist extends React.Component{
    navigate = (item) => {
        this.props.navigation.navigate('AddMusicPlaylist', { playlist: item })
    }


    render(){
        const {playlist} = this.props.route.params
        const {deleteMusicaPlaylist} = this.props
        
        return(
        <View style={styles.container}>
            <ScrollView>
                <View style={[!playlist.musicas.length]}>
                {
                    !playlist.musicas.length && <Text style={styles.textoSemMusica} >Não há músicas</Text>                        }
                    {
                        playlist.musicas.map((item)=> (
                            <View style={styles.Containermusic}>
                                <View style={styles.imageContainer}>
                                        <Image style={styles.cardImage} source={require('./images/musica.jpeg')} />
                                    </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.musica}>{item.musica}</Text>
                                    <Text style={styles.artista}>{item.artista}</Text>
                                </View>

                                <View style={styles.buttonliked}>
                                    <MusicButton
                                        name = '🗑'
                                        onPress={()=> deleteMusicaPlaylist(item.musicaIndex,playlist)}>
                                    </MusicButton>
                                </View>
                            </View>
                            
                             
                        ))      
                    }
                </View>   
            </ScrollView>
            <TouchableHighlight onPress={() =>  this.props.navigation.navigate('AddMusicPlaylist', {playlist: playlist})} style={styles.button}>
        
            <Text style={styles.adicionar}>+</Text>
        
        </TouchableHighlight>
        </View>
       

           

        )
    }

}
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#1C1C1C',
        flex: 1,
        justifyContent: 'flex-start'
    },

    button:{
        position: 'absolute',
        borderRadius: 60,
        width: 60,
       height: 60,
       marginLeft: 350,
       marginTop: 670,
       backgroundColor: 'DimGray',
       borderWidth: 1,
       borderColor: 'darkred',
         
        
       
        alignItems: 'center'
    },
    adicionar: {
        color: 'green',
        fontWeight: '400',
        fontSize: 40
    
    },
    Containermusic: {
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: 'darkred',
        
      },
      imageContainer: {
        marginRight: 10,
      },
      textContainer: {
        position: 'absolute',
        flex: 1,
        marginLeft: 105,
        marginTop: 25,
        alignItems: 'center'
      },
    
    cardImage: {
        width: 90,
        height: 90,
        justifyContent: 'flex-start'
    },
    
      musica: {
        fontSize: 20,
        justifyContent: 'flex-end',
        color: 'white',
        
      },
      artista: {
        color: 'white',
        justifyContent:'center'
      },
      
      textoSemMusica:{
        marginTop: 10,
        marginLeft: 25,
        fontSize: 20,
        fontStyle: 'italic',
        color: 'white'

      },
      buttonliked: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
 })
 

