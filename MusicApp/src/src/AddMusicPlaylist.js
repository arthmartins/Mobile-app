import 'react-native-gesture-handler';
import React from 'react'
import {
 View,
 Text,
 StyleSheet,
 TouchableWithoutFeedback,
 Image,

 ScrollView,
 TouchableOpacity
} from 'react-native'

class AddMusicPlaylist extends React.Component{

    addMusicaPlaylist = (item)=> {
    const { playlist } = this.props.route.params
        if(playlist.contains(item))
        {
            Alert.alert(
                "Erro!!",
                "Musica já adicionada na playlist",
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Dismiss called...'),
                    style: 'destructive'
                  },
                  
                ]
              )
        }else
        {
            this.props.addMusicaPlaylist(item, playlist)
        }

    }

    render(){
        const {musicas} = this.props
        
        const { playlist } = this.props.route.params
        
        return(
        <View style={styles.background}>
            
            <ScrollView contentContainerStyle={[!musicas.length && {flex: 1}]}>
                <View style={[!musicas.length]}>
                {
                    !musicas.length && <Text style={styles.textoSemMusica} >Não há músicas</Text>                        }
                    {
                        musicas.map((item)=>
                         (
                        <TouchableOpacity onPress={() => {
                            console.log("onPress acionado");
                            this.props.addMusicaPlaylist(item, playlist)
                        }}>

                            <View style={styles.Containermusic}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.cardImage} source={require('./images/musica.jpeg')} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.musica}>{item.musica}</Text>
                                <Text style={styles.artista}>{item.artista}</Text>
                            </View>
                            </View>

                        </TouchableOpacity>
                          
                        ))
                    }
                </View>
                
            </ScrollView>
            </View>
        
       

           

        )
    }

}
const styles = StyleSheet.create({

    background:
    {
        flex:1,
        backgroundColor: '#1C1C1C'

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
        justifyContent:'center',
        marginLeft: 25,
        fontSize: 20,
        fontStyle: 'italic',
        color: 'white'

      },
     
 })
 
 export default AddMusicPlaylist
