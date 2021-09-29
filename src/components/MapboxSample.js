import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'css/MapboxSample.scss';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Component(props) {
    const mapContainer = useRef(null);
    const map = useRef(null);

    let lt = 1.2732453356833786;// getRandomInRange(-90, 90, 4);
    console.log('lt : ',lt);
    let lg = 103.8428075269891; //getRandomInRange(-90, 90, 4);
    console.log('lg : ',lg);

    const [lng, setLng] = useState(lg);
    // const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(lt);
    // const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(17);

    function getRandomInRange(from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
        // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

    useEffect(() => {
        if (map.current) return; // initialize map only once
        console.log('map.current ',lng, lat);
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });        
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });    
        
        map.current.on('load', () => {
            console.log('loaded map...');
            // new mapboxgl.Marker(
            //     <div
            //       style={{
            //         width: '5rem',
            //         height: '5rem',
            //         borderRadius: '50%',
            //         cursor: 'pointer',
            //       }} />
            //     )
            //     .setLngLat([30.5, 50.5])
            //     .addTo(map.current);

            // Create a new marker.
            const marker = new mapboxgl.Marker()
            .setLngLat([30.5, 50.5])
            .addTo(map.current);
        });
    });

    return (
        <div className="map-background">
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

const MapboxSample = Component;
// MapboxSample.defaultProps = {
//     type: "Puff",
//     color: "#00BFFF",
//     height: "100",
//     width: "100"
// };

export default MapboxSample;