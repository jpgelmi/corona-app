import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ActivityIndicator
} from 'react-native'

import colors from "../config/colors"

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const{width} = Dimensions.get("window")
const ITEM_WIDTH = Math.round(width * 0.8)

//const{height} = Dimensions.get("window")
//const ITEM_HEIGTH = Math.round(height)

export default function CarouselVertical(){

    const [infoRegiones, setInfoRegiones] = useState(null)
    const current_date = new Date()
    
    let dd = current_date.getDate()
    let mm = current_date.getMonth() + 1
    let yyyy = current_date.getFullYear()

    if(dd<10){
        dd = "0"+ dd
    }

    if(mm<10){
        mm = "0"+ mm
    }


    const formatted_date = yyyy + "-" + mm + "-" + dd
    console.log(formatted_date)

    const URL_HOST = `https://api.covid19tracking.narrativa.com/api/${formatted_date}/country/chile` 
    console.log(URL_HOST)
    useEffect(() => {

        fetch(URL_HOST)
        .then((response) => response.json())
        .then((result) => {
            //console.log(result.dates)
            setInfoRegiones(result.dates[`${formatted_date}`].countries.Chile.regions)
        })
    },[])
    
    //console.log(infoRegiones.dates["2020-09-22"].countries)

    {if(infoRegiones){
        return(
            <View style = {{alignItems: "center"}}>
            <Carousel
                layout = {"default"}
                data = {infoRegiones}
                renderItem = {(item) => <RenderItem data = {item}/>}
                sliderWidth = {width}
                itemWidth = {ITEM_WIDTH}
                firstItem = {0}
            />
            {/*<Pagination
                activeDotIndex = {0}
                dotsLength = {13}
                activeDotIndex = {activeSlide}

            />*/}
            </View>
    
            )
    }else{
        return(
            <View style = {{flex: 1, paddingTop: 100}}>
                <ActivityIndicator
                    size = {100}
                    color = {colors.secundario}
                />
            </View>
        )
    }}

        
} 

function RenderItem(props){

    const{data} = props


    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                {data.item.name_es}
            </Text>
            <View style = {{alignItems: "center", flex: 1}}>
                <View style = {[styles.mini_card, {backgroundColor: colors.secundario}]}>
                    <Text style = {styles.textInfo}>
                        Casos Activos
                    </Text>
                    <View style = {{alignItems: "center"}}>
                        <Text style = {styles.textCifra}>
                            {data.item.today_open_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </Text>
                    </View>
                </View>
                <View style = {[styles.mini_card, {backgroundColor: colors.azul_agua}]}>
                    <Text style = {styles.textInfo}>
                        Casos Totales
                    </Text>
                    <View style = {{alignItems: "center"}}>
                        <Text style = {styles.textCifra}>
                            {data.item.today_confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </Text>
                    </View>
                </View>
                <View style = {[styles.mini_card, {backgroundColor: colors.azul_claro}]}>
                    <Text style = {styles.textInfo}>
                            Muertos Totales
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {data.item.today_deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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
        fontSize: 20,
        color: "black"
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
    },
    textTitulo:{
        fontSize: 25,
        fontWeight: "bold",
        color: colors.secundario
      },
})