import React from 'react'
import {
 View,
 Text,
 StyleSheet,
 TouchableWithoutFeedback,
 ScrollView,
 TouchableHighlight,
 Image
} from 'react-native'
import MusicButton from './MusicButton'

export default class Playlists extends React.Component {
    navigate = (item) => {
        this.props.navigation.navigate('Musicas Playlist', { playlist: item })
      }

    render(){
        const {playlists} = this.props
        const {deletePlaylist} = this.props
        
        return(
        <View style={styles.container}>
            <ScrollView>
                <View>
                {    
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Favoritos')}>
                    <View style={styles.Containerplaylist}>
                    <View style={styles.imageContainer}>
                    <Image style={styles.cardImage} source={require('./images/curtidas.jpeg')}/>
                                </View>
                            <View style={styles.textContainer}>
                            <Text style={styles.titulo}>Favoritos</Text>
                            </View>
                    </View>
                </TouchableWithoutFeedback>
            
            }
            {      
                playlists.map((item,index)=> (
                    <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index}>
                        <View style={styles.Containerplaylist}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.cardImage} source={require('./images/playlisticon.jpeg')}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.titulo}>{item.titulo}</Text>
                        </View>

                        <View style={styles.buttonliked}>
                        
                        <MusicButton
                            name = '🗑'
                            onPress={()=> deletePlaylist(item.musicaIndex)}>
                        </MusicButton>
                        </View>
                            </View>
                        </TouchableWithoutFeedback>
                        
                        ))
                        
                }
                    
                    
                </View>
                
            </ScrollView>
            <TouchableHighlight onPress={() =>  this.props.navigation.navigate("Adicionar Playlist")} style={styles.button}>
        
            <Text style={styles.adicionar}> + </Text>
        
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
    Containerplaylist: {
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
          
        titulo: {
            fontSize: 30,
            color: 'white',
            fontStyle: 'italic'
            
          },
          buttonliked: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center'
        }
})
