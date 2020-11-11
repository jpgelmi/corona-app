import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ActivityIndicator
} from 'react-native'

import colors from "../config/colors"

export default function GeneralData(){

    const [infoMundial, setInfoMundial] = useState(null)
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

    const URL_HOST = `https://api.covid19tracking.narrativa.com/api/${formatted_date}/country/chile` 
    useEffect(() => {

        fetch(URL_HOST)
        .then((response) => response.json())
        .then((result) => {
            setInfoMundial(result.total)
        })
    },[]) 
    

    {if(infoMundial){
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
                                {((infoMundial.today_confirmed)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {[styles.mini_card, {backgroundColor: colors.secundario_rojo}]}>
                        <Text style = {styles.textInfo}>
                            Casos Activos
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {((infoMundial.today_open_cases)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {[styles.mini_card, {backgroundColor: colors.rojo_agua}]}>
                        <Text style = {styles.textInfo}>
                            Muertes Totales
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {((infoMundial.today_deaths)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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