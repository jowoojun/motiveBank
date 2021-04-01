// src/navigation/AppNavigator.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen'
import SettingScreen from '../screens/SettingScreen'

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => { // 아이콘 설정
            let iconName;
            if (route.name === 'Home') { // 아이콘의 이름 결정
              iconName = focused? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }else{
              iconName = 'question'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{ // 아이콘의 색깔 결정
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} /> 
        <Tab.Screen name="Settings" component={SettingScreen} options={{ tabBarBadge: 3 }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;