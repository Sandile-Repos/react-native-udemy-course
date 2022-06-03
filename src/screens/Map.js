import { StyleSheet, Text, View , Alert} from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import MapView, {Marker} from 'react-native-maps'
import IconButton from '../components/UI/IconButton'

const Map = ({navigation}) => {
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
   
 const savedPickedLocationHandler = useCallback(() => {
     if(!selectedLocation){
         Alert.alert(
             'No location picked?!',
             'You have to pick a location (by tapping on the map) first!' 
         )
         return
     }

    navigation.navigate('AddPlace', {
        pickedLat: selectedLocation.lat,
        pickedLng: selectedLocation.lng
    })
},[navigation, selectedLocation])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:({tintcolor}) => (<IconButton  icon="save" size={24} color={tintcolor} onPress={savedPickedLocationHandler}/>)
        })
    }, [navigation, savedPickedLocationHandler])

 

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