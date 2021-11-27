import React from 'react'
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import {
    HomeNavigation,
    CatalogNavigation,
    ChatNavigation,
    SettingsNavigation
} from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function HomeNavigationTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarStyle: { height: 50 }
            }}
        >
            <Tab.Screen
                name='HomeTab'
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='home'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                {/* Texto Aqui */}
                                Home
                            </Text>
                        </>
                    )
                }}
            />
            <Tab.Screen
                name="CatalógoTab"
                component={CatalogNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='stream'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                                                        <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                {/* Texto Aqui */}
                                Catalógo
                            </Text>
                        </>
                    )
                }}
            />
            <Tab.Screen
                name="ChatTab"
                component={ChatNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='comment'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                                                        <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                {/* Texto Aqui */}
                                Chat
                            </Text>
                        </>
                    )
                }}
            />
            <Tab.Screen
                name="ConfiguraçõesTab"
                component={SettingsNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='user-cog'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                {/* Texto Aqui */}
                                Config
                            </Text>
                        </>
                    )
                }}
            />
        </Tab.Navigator>
    );
}