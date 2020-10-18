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
            firstItem = {0}
        />
    )
}

function RenderItem(props){
    const{data} = props
    console.log(data)

    return(
        <View style = {styles.container}>
            <Text>
                {data.index}
            </Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container:{
        //elevation: 1,
        width: "100%",
        height: "95%", 
        borderRadius:20,
        borderColor: "#000",
        backgroundColor: "#F0F0F0",
        marginVertical: 20
    }
})