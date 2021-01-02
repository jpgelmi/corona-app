import React,{useEffect, useState} from 'react'
import {
  View,
  Text,
  Dimensions
} from 'react-native'

import {
    LineChart,
  } from "react-native-chart-kit";

  export default function GraficoActivo(){
    const [data, setData] = useState(null)
    const{width} = Dimensions.get("window")
    const ITEM_WIDTH = Math.round(width * 0.93)
    const ListaNum = [0]
    const URL_HOST = `https://api.covid19api.com/dayone/country/chile` 
    
    useEffect(() => {

        fetch(URL_HOST)
        .then((response) => response.json())
        .then((result) => {
            setData(result)
        })
    }, [])

    if(data !== null){
      limpiarData()
    }

    function limpiarData(){
        data.forEach((item) => {
          ListaNum.push(item.Active)
        });
    }
    
    return(
      <View>
          <Text style = {{fontWeight: "bold", fontSize: 15, marginTop: 20}}>
            Casos activos
          </Text>
      <LineChart
        data={{
          labels: [ ],
          datasets: [
            { 
              data: ListaNum
            }
          ]
        }}
        width={ITEM_WIDTH} // from react-native
        height={220}
        //yAxisLabel={"$"}
        //yAxisSuffix={"k"}
        fromZero = {false}
        yAxisInterval={100} // optional, defaults to 1
        chartConfig={{
          //backgroundColor: "#A9A9A9",
          backgroundGradientFrom: "#E8E9EB",
          backgroundGradientTo: "#F0F0F0",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(18,105,148, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            //stroke: "#ffffff"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
    )
}
