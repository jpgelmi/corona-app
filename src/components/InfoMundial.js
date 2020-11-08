import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ActivityIndicator
} from 'react-native'

import colors from "../config/colors"

import { Colors } from 'react-native/Libraries/NewAppScreen';

const{width} = Dimensions.get("window")
const ITEM_WIDTH = Math.round(width * 0.8)

export default function GeneralData(){

    const [infoChile, setInfoChile] = useState(null)
    const current_date = new Date()
    
    var dd = current_date.getDate()
    var mm = current_date.getMonth() + 1
    var yyyy = current_date.getFullYear()

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
            console.log(result.total)
            setInfoChile(result.total)
        })
    },[])
    

    {if(infoChile){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    Información Mundial
                </Text>
                <View style = {{alignItems: "center", flex: 1}}>
                    <View style = {[styles.mini_card, {backgroundColor: colors.primario_rojo}]}>
                        <Text style = {styles.textInfo}>
                            Casos Totales
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {((infoChile.today_confirmed)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {[styles.mini_card, {backgroundColor: colors.secundario_rojo}]}>
                        <Text style = {styles.textInfo}>
                            Casos Activos
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {((infoChile.today_open_cases)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {[styles.mini_card, {backgroundColor: colors.rojo_agua}]}>
                        <Text style = {styles.textInfo}>
                            Muertes Totales
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {((infoChile.today_deaths)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            )
    }else{
        return(
            <View style = {{flex: 1, paddingTop: 100}}>
                <ActivityIndicator size = {100} color = {colors.primario_rojo}/>
            </View>
        )
    }}       
}

const styles = StyleSheet.create({
    container:{
        //elevation: 1,
        width: "90%",
        height: "70%", 
        borderRadius:20,
        borderColor: "#000",
        backgroundColor: "#F0F0F0",
        marginVertical: 20,
        marginHorizontal: 20,
        padding: 20,
        flex: 1
    },
    text: {
        fontWeight: "bold",
        fontSize: 20
    },
    mini_card:{
        marginTop: 20,
        height: 180,
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