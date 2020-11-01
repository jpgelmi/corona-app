import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native'

import colors from "../config/colors"

import Carousel from 'react-native-snap-carousel';

const{width} = Dimensions.get("window")
const ITEM_WIDTH = Math.round(width * 0.8)

//const{height} = Dimensions.get("window")
//const ITEM_HEIGTH = Math.round(height)

export default function CarouselVertical(){

    const [infoRegiones, setInfoRegiones] = useState(null)
    const current_date = new Date()
    //const formatted_date = current_date.getDate() + "-" + (current_date.getMonth() + 1) + "-" + current_date.getFullYear()
    const formatted_date = current_date.getFullYear() + "-" + (current_date.getMonth() + 1) + "-" + current_date.getDate()
    console.log(formatted_date)

    const URL_HOST = `https://api.covid19tracking.narrativa.com/api/2020-9-11/country/chile` 
    console.log(URL_HOST)
    useEffect(() => {

        fetch(URL_HOST)
        .then((response) => response.json())
        .then((result) => {
            console.log(result.dates)
            setInfoRegiones(result.dates["2020-9-11"].countries.Chile.regions)
        })
    },[])
    
    //console.log(infoRegiones.dates["2020-09-22"].countries)

    return(
        <Carousel
            layout = {"default"}
            data = {infoRegiones}
            renderItem = {(item) => <RenderItem data = {item}/>}
            sliderWidth = {width}
            itemWidth = {ITEM_WIDTH}
            firstItem = {0}
        />
    )
} 

function RenderItem(props){
    const currentDate = new Date()
    //const formatted_date = current_date.getDate() + "-" + (current_date.getMonth() + 1) + "-" + current_date.getFullYear()
    //const date = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate()
    const{data} = props
    console.log(data)

    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                hola
            </Text>
            <View style = {{alignItems: "center", flex: 1}}>
                <View style = {[styles.mini_card, {backgroundColor: colors.secundario}]}>
                    <Text style = {styles.textInfo}>
                        Casos Activos
                    </Text>
                    <View style = {{alignItems: "center"}}>
                        <Text style = {styles.textCifra}>
                            {data.item.today_open_cases}
                        </Text>
                    </View>
                </View>
                <View style = {[styles.mini_card, {backgroundColor: colors.azul_agua}]}>
                    <Text style = {styles.textInfo}>
                        Casos Totales
                    </Text>
                    <View style = {{alignItems: "center"}}>
                        <Text style = {styles.textCifra}>
                            {data.item.today_confirmed}
                        </Text>
                    </View>
                </View>
                <View style = {[styles.mini_card, {backgroundColor: colors.azul_claro}]}>
                    <Text style = {styles.textInfo}>
                            Muertos Totales
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {data.item.today_deaths}
                            </Text>
                        </View>
                </View>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container:{
        //elevation: 1,
        width: "100%",
        height: "100%", 
        borderRadius:20,
        borderColor: "#000",
        backgroundColor: "#F0F0F0",
        marginVertical: 20,
        padding: 20,
        flex: 1
    },
    text: {
        fontWeight: "bold",
        fontSize: 20
    },
    mini_card:{
        marginTop: 20,
        height: "30%",
        width: "95%",
        backgroundColor: "red",
        borderRadius: 20
    },
    textInfo:{
        fontWeight: "bold",
        fontSize: 20,
        margin: 15,
        color: colors.blanco
    },
    textCifra:{
        fontWeight: "bold",
        fontSize: 40,
        margin: 15,
        color: colors.blanco
    }
})