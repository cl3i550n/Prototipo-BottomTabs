import React from 'react'
import { View, Text, Button } from 'react-native'
import Styles from './styles'

export default props => (
    <View style={Styles.container}>
        <Text style={Styles.text}>Settings Screen</Text>
        <Button title='Tela SignUp' onPress={() => props.navigation.navigate('SignUp')} />
    </View>
)