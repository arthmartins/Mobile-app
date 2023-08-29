import React from 'react'
import {
 View,
 Text,
 StyleSheet,
 TextInput,
 TouchableOpacity,
 Alert
} from 'react-native'


import * as Random from 'expo-random'


class AddPlaylist extends React.Component {
    state ={
        titulo: '',
       
    
    }
    onChangeTextT  =(key,value)=> {
        this.setState({[key]: value})
    }
    submitT = () => {
        if (this.state.titulo === '')
        {
            Alert.alert(
                'Erro!!',
                'Preencha todos os campos',
                [
                  {
                    text: 'Voltar',
                    style: 'destructive'
                  },
                  
                ]
              )
        }else
        {
   const playlist = {
     titulo: this.state.titulo,
     musicas: [],
     id: String(Random.getRandomBytes(8)),
     
   }
   this.props.addPlaylist(playlist)
   this.setState({
    titulo: '',
    
   
   })
    }
}

    render(){
        return (
            <View style={styles.container}>
              
              <TextInput
                placeholder='Nova Playlist:'
                onChangeText={val => this.onChangeTextT('titulo', val)}
                style={styles.input}
                value={this.state.titulo}
              />
             
              <TouchableOpacity onPress={this.submitT}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Adicionar Playlist</Text>
                </View>
              </TouchableOpacity>
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
    button: {
        height: 40,
        width: 150,
        backgroundColor: 'darkred',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderWidth: 1,
        borderColor: 'white',
      },
      buttonText: {
        color: 'black',
        fontSize: 18
      },
    heading: {
      color: 'white',
      fontSize: 40,
      marginBottom: 10,
      alignSelf: 'center'
    },
    
    input: {
        margin: 10,
        backgroundColor: '#363636',
        borderWidth: 1,
        borderColor: 'darkred',
        paddingHorizontal: 8,
        height: 50
      }
   })
   
   
   export default AddPlaylist
