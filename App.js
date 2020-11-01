import React, {useState, useEffect} from 'react'
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Text} from 'react-native'
import Carousel from "./src/components/Carousel"
import colors from './src/config/colors'

export default function App() {  
  return ( 
    <SafeAreaView style = {styles.container}>
      <View style = {styles.view}>
        <Text style = {styles.text}>
          Info por Regiones
        </Text>
      </View>
          <Carousel/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  view:{
    alignItems: "center",
    paddingTop: 30,
    paddingBottom:10
  },
  text:{
    fontSize: 25,
    fontWeight: "bold",
    color: colors.secundario
  }
}) 