import React, {useState, useEffect} from 'react'
import { StyleSheet, ScrollView, SafeAreaView, View, Text} from 'react-native'
import Carousel from "./src/components/Carousel" 
import {getCasosHoy} from "./src/api/datos"

export default function App() {
  const [info, setInfoGeneral] = useState(null)
  const [infoRegiones, setInfoRegiones] = useState(null)

    useEffect(() => {
        getCasosHoy().then((response) => {
            setInfoGeneral(response)
            setInfoRegiones(response.dates["2020-09-22"].countries.Chile.regions)  
        })
    }, [])
    console.log(infoRegiones)
    
  return (
    <SafeAreaView>
      <View style = {styles}>
        <Carousel data = {infoRegiones}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //backgroundColor:"red"
  }
})