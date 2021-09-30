import ReactMapGL, { Marker, Popup } from "react-map-gl"
import React, { useState } from "react";
import * as parkData from "../data/Skateboard_Parks.json"
import Image from "../assets/map-pin.svg"
import "../styles/Map.css"
function MapComponent(props){
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "75vw",
    height: "75vh",
    zoom: 10
  });
  const [selected, setSelected] = useState(null);
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
            <a 
            className="button-pin"
            onClick={e => {
              e.preventDefault();
              setSelected(park)
            }}>
              <img src={Image} alt="pin" />
            </a>
          </Marker>
        ))}
        {selected && 
        <Popup latitude={selected.geometry.coordinates[1]} 
               longitude={selected.geometry.coordinates[0]}
               onClose={() =>{
                 setSelected(null)
               }}
               >
          <div>
            <h2>{selected.properties.NAME}</h2>
            <p>{selected.properties.DESCRIPTION}</p>
          </div>
        </Popup>
        }
      </ReactMapGL>
    </div>
  );
}
export default MapComponent;