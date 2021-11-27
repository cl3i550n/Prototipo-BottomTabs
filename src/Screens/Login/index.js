import React from 'react'
import { View, Text, Button } from 'react-native'
import Styles from './styles'

export default props => (
    <View style={Styles.container}>
        <Text style={Styles.text}>Login Tela</Text>
        <Button title='Fazer Login' onPress={() => props.navigation.navigate('Home')} />
    </View>
)