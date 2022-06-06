import { StyleSheet, Text, View , Pressable} from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/colors'

const Button = ({onPress, children}) => {
  return (
    <Pressable style={({pressed})=> [styles.button, pressed && styles.pressed]} onPress={onPress} >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:12,
        paddingVertical:12,
        margin:4,
        backgroundColor:Colors.primary800,
        elevation:2,
        shadowColor:'black',
        shadowOffset: {width:1, height:1},
        shadowOpacity:0.14,
        shadowRadius:2,
        borderRadius:4
    },
    pressed:{ 
        opacity:0.7
    },
    text:{
        textAlign:'center',
        fontSize:16,
        color:Colors.primary50
    }
})