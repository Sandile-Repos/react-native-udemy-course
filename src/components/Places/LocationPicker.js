import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert, Image, Text } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
  LocationAccuracy
} from "expo-location";
import { useNavigation , useRoute, useIsFocused} from "@react-navigation/native";

import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../../constants/colors";
import { getAddress, getMapPreview } from "../../../util/location";

const LocationPicker = ({onPickLocation}) => {
  const [pickedLocation, setPickedLocation] = useState(null);

  const navigation = useNavigation()
  const route = useRoute()
  const isFocused = useIsFocused()

  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
 
  // const mapPickedLocation = route.params ? {lat:route.params.pickedLat, lng: route.params.pickedLng} : null
  // const mapPickedLocation = route.params && {lat:route.params.pickedLat, lng: route.params.pickedLng}

  // useEffect(() => {
  //   if(mapPickedLocation){
  //     setPickedLocation(mapPickedLocation)
  //   }
  // }, [mapPickedLocation])

  useEffect(() => {
    const mapPickedLocation = route.params && {lat:route.params.pickedLat, lng: route.params.pickedLng}
    if(mapPickedLocation){
      setPickedLocation(mapPickedLocation)
    }
  }, [route, isFocused])

  useEffect(()=> {
    const handleLocation = async () => {

      if(pickedLocation){
       const address = await getAddress(pickedLocation.lat, pickedLocation.lng)
        onPickLocation({...pickedLocation, address:address})
     }
    }
    handleLocation()
  },[pickedLocation, onPickLocation])
  

  const verifyPermissions = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "You need to grant location permissions to use this app"
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync(
      {
        accuracy: LocationAccuracy.Highest ,
        maximumAge: 10000,
        timeout: 5000
      }
    );
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    })
  };
  const pickOnMapHandler = () => {
    navigation.navigate('Map')
  };
  let locationPreview = <Text>No location picked yet..</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }}
      />
    );
  }
  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow:'hidden'
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    // borderRadius:4
  },
});
