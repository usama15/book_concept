import React from 'react'
import { Text, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default function Locations() {
    return (
        <View style={styles.container}>
      {/*<BackBar />*/}
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude:25.289388265872006,
          longitude: 55.36994749259537,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude:25.289388265872006,
            longitude: 55.36994749259537,
          }}
          title={'BOOKKONCEPTZ Dubai, United Arab Emirates '}
        />
      </MapView>
    </View>
    )

   
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        // justifyContent: 'flex-end',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
})
