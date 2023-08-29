import 'react-native-gesture-handler';
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

import MusicButton from './MusicButton';



const Favoritos =({musicas,musicaLiked}) =>(
        musicas = musicas.filter((t) => t.liked),
        
        <View style={styles.container}>
            <ScrollView>
                <View style={[!musicas.length]}>
                {
                    !musicas.length && <Text style={styles.textoSemMusica} >Não há músicas curtidas</Text>                        }
                    {
                        musicas.map((item)=> (
                            
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
                                        name = '♡'
                                        liked={(item.liked)}
                                        onPress={()=> musicaLiked(item.musicaIndex)}>
                                            
                                    </MusicButton>
                                    
                                    
                                </View>
                            </View>
                            
                          
                        ))
                        
                    }
                </View>
                
            </ScrollView>
        
        </View> 
)       


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#1C1C1C',
        
          flex: 1,
          justifyContent: 'flex-start'
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
 
 export default Favoritos