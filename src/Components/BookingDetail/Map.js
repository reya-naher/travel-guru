import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { ApiKey } from '../Login/firebase.config';
import { location1 } from '../../FakeData/FakeLocation';
import { location2 } from '../../FakeData/FakeLocation';
import { location3 } from '../../FakeData/FakeLocation';

const Map = ({ name }) => {

  const mapStyles = {
    height: "100vh",
    width: "100%"
  }

  const divStyle = {
    background: "white",
    border: "1px solid #ccc"
  }

  const [selected, setSelected] = useState({});

  const onSelect = item => {
    setSelected(item);
  }

  const onLoad = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  }

  const defaultCenter1 = {
    lat: 24.31321, lng: 91.71663
  }
  const defaultCenter2 = {
    lat: 21.42660, lng: 92.00977
  }
  const defaultCenter3 = {
    lat: 22.35352, lng: 91.78005
  }

  return (
    <div>
      <LoadScript
        googleMapsApiKey={ApiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={
            (name === "Sreemangal" && defaultCenter1) ||
            (name === "Cox's Bazar" && defaultCenter2) ||
            (name === "Rangamati" && defaultCenter3)
          }>
          {name === "Sreemangal" && location1.map(item => {
            return (
              <Marker
                key={item.name}
                position={item.location} />
            )
          })
          }
          {name === "Cox's Bazar" && location2.map(item => {
            return (
              <Marker
                key={item.name}
                position={item.location}
                onClick={() => onSelect(item)}
              />
            )
          })
          }
          {
            selected.location &&
            (
              <InfoWindow
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
                <p>{selected.name}</p>
              </InfoWindow>
            )
          }
          {name === "Rangamati" && location3.map(item => {
            return (
              <InfoWindow
                key={item.name}
                onLoad={onLoad}
                position={item.location}>
                <div style={divStyle}>
                  <small>{item.name}</small>
                  <br />
                  <small>{item.price}</small>
                </div>
              </InfoWindow>
            )
          })
          }

        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;