import ReactMapGL, { Marker } from "react-map-gl"
import React, { useState } from "react";
import * as parkData from "../data/Skateboard_Parks.json"
function MapComponent(props){
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vw",
    zoom: 10
  });
  return(
    <div id='map_id'>
      <ReactMapGL 
      {...viewport} 
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/yayai/cku67dk643aw417l4lihf6ueq"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}>
        {parkData.features.map((park) => (
          <Marker 
          key={park.properties.PARK_ID} 
          latitude={park.geometry.coordinates[1]} 
          longitude={park.geometry.coordinates[0]}>
            <div>SKATE</div>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}
export default MapComponent;