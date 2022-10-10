import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {useQuery} from "@apollo/client";
import {ParkingLotsQuery} from "../queries/ParkingLotsQuery";
import {ParkingLotsMarker} from "./ParkingLotsMarker";
import {useEffect, useState} from "react";

export const MapView = ({vehicleType}) => {
    const [positionLot, setPositionLot] = useState([4.539158, -75.669212]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (position){
                setPositionLot([position.coords.latitude, position.coords.longitude])
            },
            function (error){
                console.log(error);
            }
        )
    })
    const {loading, error, data} = useQuery(ParkingLotsQuery, {
        variables:{
            vehicleType: vehicleType
        }
    });

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;

    console.log(data);


    return (
        <MapContainer center={positionLot} zoom={15}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.parkingLots.data.map(parkingLot => <ParkingLotsMarker parkingLot={parkingLot} key={parkingLot.id}/>)}
        </MapContainer>
    )
}