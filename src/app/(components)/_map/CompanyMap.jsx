"use client"; // مهم عشان يتعمل render في الكلاينت

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// أيقونة مخصصة للماركر
const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
});

export default function CompanyMap() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[30.1166, 31.315]} // موقع الزتون، القاهرة
        zoom={14}
        style={{ width: "100%", height: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        <Marker position={[30.1166, 31.315]} icon={markerIcon}>
          <Popup>📍 شركة HRSafPay - الزتون، القاهرة</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
