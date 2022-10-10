import {Marker, Popup} from "react-leaflet";
import L from "leaflet";

export const ParkingLotsMarker = ({parkingLot}) => {

    function newIcon () {
        return L.icon({
            iconUrl: "https://s3.sa-east-1.amazonaws.com/dev.se360.co/parking-sign-2526.png",
            iconSize: 40
        })
    }
    return(
        <Marker position={[parkingLot.attributes.latitude, parkingLot.attributes.longitude]} icon={newIcon()}>
            <Popup>
                {parkingLot.attributes.name}
            </Popup>
        </Marker>
    )
}