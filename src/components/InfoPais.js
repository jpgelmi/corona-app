import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ActivityIndicator
} from 'react-native'

import Flag from 'react-native-flags';

import colors from "../config/colors"
import getDataPais from "../api/api"

export default function GeneralData(props){

    const [infoMundial, setInfoMundial] = useState(false) 
    const {pais, nombre, code} = props

    useEffect(() => {
      getDataPais(pais).then((response) => {
          setInfoMundial(response)
      })
    },[]) 
    

    {if(infoMundial){
        return(
            <View style = {styles.container}>
                <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style = {styles.text}>
                        {nombre}
                    </Text>
                    <Flag
                        code= {code}
                        size={32}
                    />
                </View>
                
                <View style = {{alignItems: "center", flex: 1, paddingTop:16}}>
                    <View style = {[styles.mini_card, {backgroundColor: colors.primario_rojo}]}>
                        <Text style = {styles.textInfo}>
                            Casos Totales
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {infoMundial[0].Confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {[styles.mini_card, {backgroundColor: colors.secundario_rojo}]}>
                        <Text style = {styles.textInfo}>
                            Casos Activos
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {infoMundial[0].Active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                        </View>
                    </View>
                    <View style = {[styles.mini_card, {backgroundColor: colors.rojo_agua}]}>
                        <Text style = {styles.textInfo}>
                            Muertes Totales
                        </Text>
                        <View style = {{alignItems: "center"}}>
                            <Text style = {styles.textCifra}>
                                {infoMundial[0].Deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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
        padding: 15,
        flex: 1
    },
    text: {
        fontWeight: "bold",
        fontSize: 15,
        paddingRight: 7
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