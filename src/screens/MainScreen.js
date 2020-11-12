import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  View,
  Text} from 'react-native'
import Carousel from "../components/Carousel"
import InfoMundial from "../components/InfoMundial"
import InfoChile from "../components/InfoChile"
import { ScrollView } from 'react-native-gesture-handler'
import GraficoActivos from "../components/GraficoActivos"
import GraficoNuevos from "../components/GraficoNuevos"

export default function MainScreen() {  
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView style = {{backgroundColor: "#fff"}}> 
        <View style = {styles.columns}>
          <InfoChile/>
        </View>
        <View style = {{alignItems: "center"}}>
          <GraficoActivos/>
          <GraficoNuevos/>
        </View>
        <Carousel/>
      <TouchableOpacity
        style = {{alignItems: "center"}}
        onPress = {() =>Linking.openURL("https://www.instagram.com/jpgelmi/")}
      >
        <Text style = {styles.footerText}>Juan Pablo Gelmi /@jpgelmi</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center"
  },
  footerText:{
    color: "#C9C9C9",
    fontWeight: "bold",
    paddingBottom:7
  },
  columns:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
}) 