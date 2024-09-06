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
    { label: "Kazakhstan", lat: 48.0196, lng: 66.9237 },
    { label: "China", lat: 35.8617, lng: 104.1954 },
    { label: "Mongolia", lat: 46.8625, lng: 103.8467 },
    { label: "Cyprus", lat: 35.126388, lng: 17.86331 },
  ];

  // Determine zoom level based on screen width
  const zoomLevel = window.innerWidth < 640 ? 2 : 3;

  return (
    <MapContainer
      center={[35, 50]}
      zoom={zoomLevel}
      dragging={false}
      zoomControl={false}
      scrollWheelZoom={false}
      className="h-[200px] sm:h-[300px] md:h-[300px] lg:h-[400px] xl:h-[400px]"
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
  );
};

export default Map;
