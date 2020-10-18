import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    ScrollView,
    SafeAreaView,
    View,
    Text,
    Dimensions,
} from 'react-native'


import Carousel from 'react-native-snap-carousel';

const{width} = Dimensions.get("window")
const ITEM_WIDTH = Math.round(width * 0.8)

//const{height} = Dimensions.get("window")
//const ITEM_HEIGTH = Math.round(height)

export default function CarouselVertical(props){
    const {data} = props
    return(
        <Carousel
            layout = {"default"}
            data = {data}
            renderItem = {(item) => <RenderItem data = {item}/>}
            sliderWidth = {width}
            itemWidth = {ITEM_WIDTH}
            //itemHeight = {}
            firstItem = {1}
        />
    )
}

function RenderItem(props){
    //const{data} = props
    return(
        <View style = {styles.container}>
            <Text>Hola</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        width: "100%",
        height: "95%", 
        borderRadius: 20,
        backgroundColor: "red",
        marginVertical: 20
        //flex: 1
    }
})