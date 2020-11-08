import React,{useEffect, useState} from 'react'
import {
  View,
  Text,
  Dimensions
} from 'react-native'



import {
    LineChart,
  } from "react-native-chart-kit";

  export default function GraficoChile(){
    const [data, setData] = useState()
    const{width} = Dimensions.get("window")
    const ITEM_WIDTH = Math.round(width * 0.93)
   

    const URL_HOST = `https://api.covid19api.com/dayone/country/chile` 
    //console.log(URL_HOST)
    useEffect(() => {

        fetch(URL_HOST)
        .then((response) => response.json())
        .then((result) => {
            console.log(result[0])
            setData(result[0])
        })
    },[])

    function procesarData(){

    }
      return(
        <View>
        <LineChart
          data={{
            labels: ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Agos", "Sep", "Oct", "Nov", "Dic"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={ITEM_WIDTH} // from react-native
          height={220}
          //yAxisLabel={"$"}
          //yAxisSuffix={"k"}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            //backgroundColor: "#A9A9A9",
            backgroundGradientFrom: "#A9A9A9",
            backgroundGradientTo: "#C0C0C0",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
 