import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const Map = () => {
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  return (
    <div>
         <LoadScript
       googleMapsApiKey='AIzaSyBmsS3i6cSGWj5cvvq1d8coGCAsFImQRNw'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
    </div>
  );
};

export default Map;