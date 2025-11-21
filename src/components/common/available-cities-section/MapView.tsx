import * as React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

export function MapView() {
  const mapRef = React.useRef<import("leaflet").Map>(null);
  const [currentPos, setCurrentPos] = React.useState<[number, number] | null>(
    null
  );

  React.useEffect(() => {
    navigator.geolocation.watchPosition(
      ({ coords }) => {
        const latLng: [number, number] = [coords.latitude, coords.longitude];
        if (!mapRef.current) return;
        mapRef.current.setView(latLng);
        setCurrentPos(latLng);
      },
      null,
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className="relative mx-auto border-gray-800 bg-base border-[8px] rounded-[2.5rem] h-[520px] w-[242px]">
      <div className="absolute -start-[13px] top-[124px] space-y-2">
        <div className="h-[50px] w-[5px] bg-gray-800 rounded-s-lg" />
        <div className="h-[50px] w-[5px] bg-gray-800 rounded-s-lg" />
      </div>
      <div className="h-[64px] w-[5px] bg-gray-800 absolute -end-[13px] top-[142px] rounded-e-lg" />
      <MapContainer
        zoom={1000}
        ref={mapRef}
        center={[21.731, 85.326]}
        attributionControl={false}
        className="rounded-[2rem] overflow-hidden size-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {currentPos ? <Marker position={currentPos}></Marker> : null}
      </MapContainer>
    </div>
  );
}
