// MapComponent.jsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Google Maps API kalitini o'zgaruvchi sifatida saqlang
const API_KEY = "AIzaSyDJc_k-ML_Zs8NRlK6ryKdSs8fd5qIB4E0";

const containerStyle = {
  width: "400px",
  height: "300px",
};

const center = {
  lat: 40.537249526257874, // Ko'rsatiladigan joyning latitude koordinatasi
  lng: 70.98774546730127, // Ko'rsatiladigan joyning longitude koordinatasi
};

function Map() {
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
