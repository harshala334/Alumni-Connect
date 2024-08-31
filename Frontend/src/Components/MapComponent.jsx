import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import FilterPopup from './FlterPopup';

//import 'bootstrap/dist/css/bootstrap.min.css';

// Fix icon issues with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = () => {
  const [showFilters, setShowFilters] = React.useState(false);

  const handleFilterClick = () => {
    setShowFilters(true);
  };

  const handleClose = () => {
    setShowFilters(false);
  };

  return (
    <div>
      <button onClick={handleFilterClick} style={{ position: 'absolute', top: '140px', left: '60px', zIndex: 1000 }}>
        Apply Filters
      </button>
     
      <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add markers here */}
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A sample popup.
          </Popup>
        </Marker>
      </MapContainer>

      <FilterPopup show={showFilters} handleClose={handleClose} />
    </div>
  );
}

export default MapComponent;