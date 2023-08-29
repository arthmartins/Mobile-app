import React from 'react'
import { View } from 'react-native'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'



const MusicButton = ({name,liked,onPress}) => (
   <TouchableHighlight
       onPress={onPress}
       underlayColor='gray'
       style={styles.button}>
           <Text style={[
               styles.text,
               liked ? styles.liked : null,
               name == '🗑' ? styles.deleteButton : null,
           ]}>
               {name}
           </Text>
           
    </TouchableHighlight>
)


const styles = StyleSheet.create({
   button: {
       alignSelf: 'flex-end',
       padding: 5,
       borderColor: '#ededed',
       borderWidth: 1,
       borderRadius: 70,
       marginRight: 5,
       marginTop: -100
   },
   text: {
       color: 'black',
       fontSize: 30
   },
   liked: {
       color: 'red',
       fontWeight: 'bold',
       
       
   },
   deleteButton: {
       color: 'rgba:(175, 47, 47, 1)'
   },
   
})


export default MusicButton