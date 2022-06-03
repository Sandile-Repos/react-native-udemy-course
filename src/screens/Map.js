import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView, {Marker} from 'react-native-maps'

const Map = () => {
    const region ={
        latitude: -29.8579,
        longitude: 31.0182,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

   
    

  return (
    <MapView style={styles.map} initialRegion={region} ></MapView>
  )
}

export default Map

const styles = StyleSheet.create({
    map: {
      flex: 1,
  }});