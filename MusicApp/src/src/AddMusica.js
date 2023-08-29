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

let musicaIndex = 0


class AddMusica extends React.Component {
    state ={
        musica: '',
        artista: '',
        
       
    }
    showAlert = ()=> {
        console.log("ENTRA AQUI")
        Alert.alert(
          "Erro!!",
          "Preencha todos os campos",
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Dismiss called...'),
              style: 'destructive'
            },
            
          ]
        )
      }
     

    onChangeText  =(key,value)=> {
        this.setState({[key]: value})
    }
    submit = () => {
    if (this.state.musica === '' || this.state.artista === '') 
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
   const musica = {
     musica: this.state.musica,
     artista: this.state.artista,
     id: String(Random.getRandomBytes(8)),
     liked: false,
     musicaIndex,
     
   }
   musicaIndex++
   this.props.addMusica(musica)
   this.setState({
    musica: '',
    artista: '',
   
   })
    }
}

    render(){
        return (
            <View style={styles.container}>
              
              <TextInput
                placeholder='Nome da Música:'
                onChangeText={val => this.onChangeText('musica', val)}
                style={styles.input}
                value={this.state.musica}
              />
              <TextInput
                placeholder='Nome do artista:'
                onChangeText={val => this.onChangeText('artista', val)}
                style={styles.input}
                value={this.state.artista}
              />
              
              <TouchableOpacity onPress={this.submit}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Adicionar Musica</Text>
                </View>
              </TouchableOpacity>
            </View>
          )
    }
    

}

const styles = StyleSheet.create({
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
    container: {
    backgroundColor: '#1C1C1C',
    
      flex: 1,
      justifyContent: 'flex-start'
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
   
   
   export default AddMusica
