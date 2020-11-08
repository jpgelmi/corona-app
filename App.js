import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  View,
  Text} from 'react-native'
import Carousel from "./src/components/Carousel"
import InfoMundial from "./src/components/InfoMundial"
import InfoChile from "./src/components/InfoChile"
import { ScrollView } from 'react-native-gesture-handler'
import GraficoChile from "./src/components/GraficoChile"

export default function App() {  
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
      <View style = {styles.view}>
      </View>
        <View style = {styles.columns}>
          <InfoMundial/>
          <InfoChile/>
        </View>
        <View style = {{alignItems: "center"}}>
          <GraficoChile/> 
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
  view:{
    alignItems: "center",
    paddingTop: 30,
    paddingBottom:10
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