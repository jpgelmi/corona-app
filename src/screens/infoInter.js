import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ActivityIndicator
} from 'react-native'

import InfoUsa from '../components/InfoUsa'
import GraficoMundo from "../components/GraficoMundo"
import InfoMundial from "../components/InfoMundial"
import InfoPais from "../components/InfoPais"
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

export default function General(){
    return(
        <SafeAreaView style = {styles.containerSafe}>
            <ScrollView>
                <View style = {{alignItems: "center"}}>
                    <GraficoMundo/>
                </View>
                <View style = {styles.container}>
                    <InfoMundial/>
                    <InfoUsa
                        pais = {"colombia"}
                        nombre = {"Colombia"}
                        code = {"CO"}
                    />
                </View>
                <View style = {styles.container}>
                    <InfoPais
                        pais = {"united-kingdom"}
                        nombre = {"Reino Unido"}
                        code = {"GB"}
                    />
                    <InfoPais
                        pais = {"germany"}
                        nombre = {"Alemania"}
                        code = {"DE"}
                    />
                </View>
                <View style = {styles.container}>
                    <InfoPais
                        pais = {"argentina"}
                        nombre = {"Argentina"}
                        code = {"AR"}
                    />
                    <InfoPais
                        pais = {"france"}
                        nombre = {"Francia"}
                        code = {"FR"}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerSafe:{
        //alignItems: "center",
        backgroundColor: "#fff",
      },
    container:{
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:"row"
    }
})