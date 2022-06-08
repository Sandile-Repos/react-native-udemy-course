import { StyleSheet, Text, View , Alert} from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import MapView, {Marker} from 'react-native-maps'
import IconButton from '../components/UI/IconButton'

const Map = ({navigation,route}) => {
    const initialLocation = route.params && {
        lat: route.params.initialLat,
        lng: route.params.initialLng,
    }

    const [selectedLocation, setSelectedLocation] = useState(initialLocation)


    const region ={
        latitude: initialLocation ? initialLocation.lat : -29.8579,
        longitude: initialLocation ? initialLocation.lng :31.0182,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const selectLocationHandler = (event) => {
        if (initialLocation){
            return
        }
        
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
        if (initialLocation) {
            return;
        }
        navigation.setOptions({
            headerRight:({tintcolor}) => (<IconButton  icon="save" size={24} color={tintcolor} onPress={savedPickedLocationHandler}/>)
        })
    }, [navigation, savedPickedLocationHandler, initialLocation])

 

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