import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native'

import Flag from 'react-native-flags';
import colors from "../config/colors"

export default function infoChile(){

    const [infoChile, setInfoChile] = useState(null)

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

    const URL_HOST = `https://api.covid19tracking.narrativa.com/api/${formatted_date}/country/chile/region/chile` 
    useEffect(() => {

        fetch(URL_HOST)
        .then((response) => response.json())
        .then((result) => {
            //console.log(result.dates[0].countries.Chile)
            setInfoChile(result.dates[formatted_date].countries.Chile)
        })
    },[])
    
    console.log(infoChile)

    {if(infoChile){
        return(
            <View style = {styles.container}>
                <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style = {styles.text}>
                    Información {"\n"} Chile 
                </Text>
                <Flag
                    code="CL"
                    size={32}
                />
                </View>
               
                <View style = {{alignItems: "center", flex: 1}}>
                    <View style = {styles.mini_card}>
                        <Text style = {styles.textInfo}>
                            Nuevos Casos 
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {(infoChile.today_new_confirmed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.mini_card}>
                        <Text style = {styles.textInfo}>
                            Muertes Hoy
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {(infoChile.today_new_deaths).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.mini_card}>
                        <Text style = {styles.textInfo}>
                            Casos Activos
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {(infoChile.today_open_cases).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text> 
                        </View>
                    </View>
                    <View style = {styles.mini_card}>
                        <Text style = {styles.textInfo}>
                            Casos Totales
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {(infoChile.today_confirmed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.footer}>
                        <Text style = {styles.textFooter}>
                            Última actualización {formatted_date}
                        </Text>
                    </View>
                </View>
            </View>
            )
    }else{
        return(
            <View style = {{flex: 1, paddingTop: 100}}>
                <ActivityIndicator size = {100} color = {colors.secundario}/>
            </View>
        )
    }}       
}

const styles = StyleSheet.create({
    container:{
        //elevation: 1,
        width: "90%",
        height: "95%", 
        borderRadius:20,
        borderColor: "#000",
        backgroundColor: "#F0F0F0",
        marginVertical: 20,
        marginHorizontal: 15,
        padding: 20,
        marginTop: 50
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
        borderRadius: 20,
        backgroundColor: colors.secundario
    },
    textInfo:{
        fontWeight: "bold",
        fontSize: 15,
        margin: 7,
        color: colors.blanco,
    },
    textCifra:{
        fontWeight: "bold",
        fontSize: 25,
        margin: 5,
        color: colors.blanco
    },
    footer:{
        paddingTop: 10
    },
    textFooter:{
        //fontWeight: "bold"
    }
})