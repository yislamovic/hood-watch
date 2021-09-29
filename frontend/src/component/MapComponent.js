import ReactMapGL from "react-map-gl"
import React, { useState } from "react";
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
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}>
      </ReactMapGL>
    </div>
  );
}
export default MapComponent;