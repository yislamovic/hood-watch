import ReactMapGL, { Marker, Popup } from "react-map-gl"
import React, { useState, useEffect } from "react";
import * as parkData from "../data/Skateboard_Parks.json"
import Image from "../assets/map-pin.svg"
import "../styles/Map.css"
import axios from "axios";
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

function MapComponent(props) {

  const [viewport, setViewport] = useState({
    latitude: 43.6532,
    longitude: -79.3832,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  const [selected, setSelected] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const reports = [];
    axios.get(`http://localhost:8000/map`)
      .then((res) => {
        const dataWithGeometry = res.data.map(report => {
          axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${report.report_address}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN} `)
            .then((res) => {
              const assign = Object.assign(report, res.data.features[0])
              reports.push(assign)
            })
        })
      })
      console.log(reports)
      setData(reports)
  }, []);
  console.log('this is data from useState',data)
  return (
    <div id='map_id'>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoieWF5YWkiLCJhIjoiY2t1YnlnOWxsMHZmMjJucWxwc3IyemRyaCJ9._WmqyZnJMcswY8ns46KEAQ"}
        mapStyle="mapbox://styles/yayai/cku67dk643aw417l4lihf6ueq"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}>
        {data && data.map((report) => (
          <Marker
            key={report.id}
            latitude={report.center[1]}
            longitude={report.center[0]}>
            <a
              className="button-pin"
              onClick={e => {
                e.preventDefault();
                setSelected(report)
              }}>
              <img src={Image} alt="pin" />
            </a>
          </Marker>
        ))}
        {selected &&
          <Popup latitude={selected.center[1]}
            longitude={selected.center[0]}
            onClose={() => {
              setSelected(null)
            }}
          >
            <div>
              <h2>{`Poster: ${selected.first_name}`}</h2>
              <p>{`Post Category: ${selected.category}`}</p>
              <p>{`Title: ${selected.title}`}</p>
            </div>
          </Popup>
        }
      </ReactMapGL>
    </div>
  );
}
export default MapComponent;

