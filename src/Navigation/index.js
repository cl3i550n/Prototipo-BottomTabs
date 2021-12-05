import React from 'react'
import StackNavigation from './StackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './DrawerNavigation'

export default props => (
    <NavigationContainer>
        <DrawerNavigation />
    </NavigationContainer>
)