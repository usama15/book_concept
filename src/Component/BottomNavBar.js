import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Splash from './Splash';
import Home from '../Screens/Home';
import Locations from '../Screens/Locations';
import {NavigationContainer} from '@react-navigation/native';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import Browse from '../Screens/Browse';

export default function BottomNavBar() {
  // const Tab = createBottomTabNavigator();
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: '#3C3C3C'}}>
      <Tab.Screen
        name="Location"
        component={Locations}
        options={{
          headerMode: 'none',
          headerShown: false,
          tabBarLabel: 'Location',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          headerMode: 'none',
          headerShown: false,
          tabBarLabel: 'Order now',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="feature-search-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerMode: 'none',
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          headerMode: 'none',
          headerShown: false,
          tabBarLabel: 'About',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="contact"
        component={Contact}
        options={{
          headerMode: 'none',
          headerShown: false,
          tabBarLabel: 'Contact',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="phone" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
