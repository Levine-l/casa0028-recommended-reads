import * as React from 'react';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapDisplay(props) {
  return (
    <div style={{width: '100%', height: 600}}>
      <Map
        initialViewState={{
          longitude: props.longitude,
          latitude: props.latitude,
          zoom: props.zoom
        }}
        style={{width: '100%', height: '100%'}}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      />
    </div>
  );
}

//export default MapDisplay;