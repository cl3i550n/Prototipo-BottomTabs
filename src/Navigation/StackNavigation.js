import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeNavigationTabs from './BottomTabs'

import {
    Login,
    Catalog,
    Chat,
    Home,
    Settings,
    SignUp
} from '../Screens'


const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator
        initialRouteName='Login' // Controle de rota inicial
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeNavigationTabs} />
    </Stack.Navigator>
)

export function HomeNavigation({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                title: 'Tela Home',
                headerLeft: () => (
                    <View style={{ margin: 10 }}>
                        <Icon
                            name="bars"
                            size={25}
                            color={"#000"}
                            onPress={() => navigation.openDrawer()}
                        />
                    </View>
                )
            }}
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export function CatalogNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name='Catalog'
                component={Catalog}
            />
        </Stack.Navigator>
    )
}

export function ChatNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name='Chat'
                component={Chat}
            />
        </Stack.Navigator>
    )
}

export function SettingsNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name='Settings'
                component={Settings}
            />

            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}