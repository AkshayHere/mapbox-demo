import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "css/MapboxSample.scss";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Component(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  let lt = 1.2732453356833786; // getRandomInRange(-90, 90, 4);
  let lg = 103.8428075269891; //getRandomInRange(-90, 90, 4);

  const [lng, setLng] = useState(lg);
  const [lat, setLat] = useState(lt);
  const [zoom, setZoom] = useState(17);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    console.log("map.current ", lng, lat);
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    // const test = atlas.getPopular();
    // console.log('test', test);
    map.current.on("load", () => {
        console.log("loaded map...");
        // Create a new marker.
        const marker = new mapboxgl.Marker()
          .setLngLat([lng, lt])
          .addTo(map.current);
      });
  }, [])

  return (
    <div className="map-background">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

const MapboxSample = Component;
export default MapboxSample;
