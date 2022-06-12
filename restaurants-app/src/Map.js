import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Marker from './Marker'
import FoodTags from './FoodTags'

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 32.08561244111458,
  lng: 34.78274973139516
};

const data = [
  {
    id: 1,
    name: "Taqueria",
    address: 'Levontin Street 28, Tel Aviv',
    tags: [FoodTags.Mexican, FoodTags.Meat, FoodTags.Vegeterian]
  },
  {
    id: 2,
    name: "Pasta via",
    address: 'Shlomo Ibn Gabirol Street 142, Tel Aviv',
    tags: [FoodTags.Italian, FoodTags.Dairy, FoodTags.Vegeterian]
  },
];

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCIGaA2feYzIjPaFAzuqZvbjU-kxlNMwQw"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        {/* {data.map((restaurant) => <Marker o ={restaurant.address}/>)} */}
        <div
                  lat={32.08120012296513}
                  lng={34.781306284673015}
                />
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)