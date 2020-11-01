import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Linking,
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
      <TouchableOpacity
        onPress = {() =>Linking.openURL("https://www.instagram.com/jpgelmi/")}
      >
        <Text style = {styles.footerText}>Juan Pablo Gelmi /@jpgelmi</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center"
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
  },
  footerText:{
    color: "#C9C9C9",
    fontWeight: "bold",
    paddingBottom:7
  }
}) 