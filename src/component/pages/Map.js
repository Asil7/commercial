import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = () => {
  const customMarkerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const locations = [
    { label: "Germany", lat: 51.1657, lng: 10.4515 },
    { label: "China", lat: 35.8617, lng: 104.1954 },
    { label: "India", lat: 20.5937, lng: 78.9629 },
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-12">
      <MapContainer
        center={[35, 50]}
        zoom={3}
        style={{ height: "400px", width: "100%", borderRadius: "8px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]}
            icon={customMarkerIcon}
          >
            <Popup>{location.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
