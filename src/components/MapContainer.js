import React from 'react'
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api"

// googleMap it allow us to render google map on any react app
// LoadScripts -loads the google maps api script
//  marker identifies a location on a map



const MapContainer = () => {
const item = {
    name: "gomycodeNG",
    location: {
        lat : 6.499169134899384,
        lng : 3.378715306912699,
    
    }

}



const mapStyles = {
    height: "400px",
    width: "100%",
}

const defaultCenter = {
    lat : 6.499169134899384,
    lng : 3.378715306912699,

}


  return (
    <div>
      <LoadScript googleMapsApiKey='AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE'>
        <GoogleMap mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}>
        <Marker key={item.name} position={item.location} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapContainer;
