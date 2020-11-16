import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  View,
  Button,
  Text} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

import MainScreen from "./src/screens/MainScreen"
import infoInter from "./src/screens/infoInter"

  export default function App(){
    return(
      <NavigationContainer >
        <Drawer.Navigator initialRouteName="Info Chile">
          <Drawer.Screen name="Chile" component={MainScreen} />
          <Drawer.Screen name="Mundo" component={infoInter} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }