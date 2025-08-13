import React from 'react'
import LocationsClient from './clientSideComponents/LocationsClient'
interface LocationData {
    lat: number;
    lng: number;
    name: string;
    contact: string;
  }
const myData: LocationData[] = [
    {
      lat: 51.5074,
      lng: -0.1278,
      name: "United Kingdom",
      contact: "uk@example.com",
    },
    { lat: 41.8719, lng: 12.5674, name: "Italy", contact: "italy@example.com" },
    {
      lat: 23.4241,
      lng: 53.8478,
      name: "United Arab Emirates",
      contact: "uae@example.com",
    },
    {
      lat: 30.3753,
      lng: 69.3451,
      name: "Pakistan",
      contact: "pakistan@example.com",
    },
  ];

export default function LocationsServer() {
  return <LocationsClient myData={myData}/>
}
