import * as React from 'react';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapDisplay(props) {
  return (
    <Map
      initialViewState={{
        longitude: props.longitude,
        latitude: props.latitude,
        zoom: props.zoom
      }}
      style={{width: 600, height: 400}}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    />
  );
}

//export default MapDisplay;