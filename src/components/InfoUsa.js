import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ActivityIndicator
} from 'react-native'

import colors from "../config/colors"

import Flag from 'react-native-flags';

export default function GeneralData(){

    const [infoMundial, setInfoMundial] = useState(null)

    const URL_HOST = `https://api.covidtracking.com/v1/us/current.json` 
    useEffect(() => {
        fetch(URL_HOST)
        .then((response) => response.json())
        .then((result) => {
            setInfoMundial(result)
        })
    },[]) 
    

    {if(infoMundial){
        return(
            <View style = {styles.container}>
                    <Text style = {styles.text}>
                        Estados Unidos
                    </Text>
                <View style = {{alignItems: "flex-end"}}>
                    <Flag
                        code= {"US"}
                        size={32}
                    />
                </View>
                <View style = {{alignItems: "center", flex: 1}}>
                    <View style = {styles.mini_card}>
                        <Text style = {styles.textInfo}>
                            Casos Totales
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {infoMundial[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.mini_card}>
                        <Text style = {styles.textInfo}>
                            Recuperados
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {((infoMundial[0].recovered)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.mini_card}>
                        <Text style = {[styles.textInfo, {fontSize: 14}]}>
                            Muertes Totales
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {((infoMundial[0].death)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            )
    }else{
        return(
            <View style = {{flex: 1, paddingTop: 100}}>
                <ActivityIndicator size = {100} color = {"#808080"}/>
            </View>
        )
    }}       
}

const styles = StyleSheet.create({
    container:{
        //elevation: 1,
        width: "100%",
        height: "95%", 
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
        height: "27%",
        width: "95%",
        backgroundColor: "red",
        borderRadius: 20,
        backgroundColor: "#808080"
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