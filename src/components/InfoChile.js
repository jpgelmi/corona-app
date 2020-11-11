import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ActivityIndicator
} from 'react-native'

import colors from "../config/colors"

export default function infoChile(){

    const [infoChile, setInfoChile] = useState(null)
    //Sacar la fecha de hoy y de ayer
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

    let last_date = new Date();
    last_date.setDate(last_date.getDate() - 1);

    let last_dd = last_date.getDate()
    let last_mm = last_date.getMonth() + 1
    let last_yyyy = last_date.getFullYear()

    if(last_dd<10){
        last_dd = "0"+ last_dd
    }

    if(last_mm<10){
        last_mm = "0"+ last_mm
    }

    const formatted_date = yyyy + "-" + mm + "-" + dd
    
    const formatted_last_date = last_yyyy + "-" + last_mm + "-" + last_dd
    //console.log(formatted_last_date)

    const URL_HOST = `https://api.covid19api.com/country/chile?from=${formatted_last_date}T00:00:00Z&to=${formatted_date}T00:00:00Z` 
    //console.log(URL_HOST)
    useEffect(() => {

        fetch(URL_HOST)
        .then((response) => response.json())
        .then((result) => {
            setInfoChile(result)
        })
    },[])
    

    {if(infoChile){
        //console.log(infoChile[0].Country)
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    Información {"\n"} Chile 
                </Text>
                <View style = {{alignItems: "center", flex: 1}}>
                    <View style = {[styles.mini_card, {backgroundColor: colors.primario_verde}]}>
                        <Text style = {styles.textInfo}>
                            Casos Totales
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {infoChile[0].Confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {[styles.mini_card, {backgroundColor: colors.secundario_verde}]}>
                        <Text style = {styles.textInfo}>
                            Casos Activos
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {((infoChile[0].Active)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {[styles.mini_card, {backgroundColor: colors.verde_agua}]}>
                        <Text style = {styles.textInfo}>
                            Muertes Totales
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {((infoChile[0].Deaths)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            )
    }else{
        return(
            <View style = {{flex: 1, paddingTop: 100}}>
                <ActivityIndicator size = {100} color = {colors.primario_verde}/>
            </View>
        )
    }}       
}

const styles = StyleSheet.create({
    container:{
        //elevation: 1,
        width: 200,
        height: 460, 
        borderRadius:20,
        borderColor: "#000",
        backgroundColor: "#F0F0F0",
        marginVertical: 20,
        marginHorizontal: 15,
        padding: 20,
        flex: 1
    },
    text: {
        fontWeight: "bold",
        fontSize: 15
    },
    mini_card:{
        marginTop: 20,
        height: 100,
        width: "95%",
        backgroundColor: "red",
        borderRadius: 20
    },
    textInfo:{
        fontWeight: "bold",
        fontSize: 15,
        margin: 7,
        color: colors.blanco
    },
    textCifra:{
        fontWeight: "bold",
        fontSize: 16,
        margin: 5,
        color: colors.blanco
    }
})