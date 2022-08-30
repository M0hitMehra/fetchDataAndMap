import React, { useState, Fragment } from "react";
 import { useJsApiLoader, GoogleMap,Marker } from "@react-google-maps/api";


 const containerStyle = {
  height: "70vh",
            width: "100%"
};




const Mapple = ({pos}) => {
  
console.log(pos);
  const center = pos
  
  const position = pos

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAunJaX39Mrt763S-_guD_CfyU19gfVmU4"
  })
  // <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAunJaX39Mrt763S-_guD_CfyU19gfVmU4&callback=initMap"></script>

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
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
          <Marker
       
      position={position}
    />
      </GoogleMap>
  ) : <></>
}

export default Mapple