"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

export default function CompanyMap() {
  const cairoCoords = [30.1200, 31.2800];

  return (
    <div className="w-full h-[400px] rounded-xl shadow-lg border border-gray-300">
      <MapContainer
        center={cairoCoords}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-full rounded-xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        <Marker position={cairoCoords} icon={customIcon}>
          <Popup>HRSafPay – الزيتون</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
