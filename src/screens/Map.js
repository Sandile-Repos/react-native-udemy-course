import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView, {Marker} from 'react-native-maps'

const Map = () => {
    const [selectedLocation, setSelectedLocation] = useState()
    const region ={
        latitude: -29.8579,
        longitude: 31.0182,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const selectLocationHandler = (event) => {
        const lat =  event.nativeEvent.coordinate.latitude
        const lng =  event.nativeEvent.coordinate.longitude
        setSelectedLocation({
            lat:lat, lng:lng
        })
    }

  return (
    <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler} >
        {
            selectedLocation &&
        <Marker title='Picked Location' coordinate={{latitude:selectedLocation.lat, longitude:selectedLocation.lng}} />
        }
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({
    map: {
      flex: 1,
  }});