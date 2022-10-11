import {Marker, Popup} from "react-leaflet";
import L from "leaflet";

export const ParkingLotsMarker = ({parkingLot}) => {

    const lat = parkingLot.attributes.latitude;
    const lng = parkingLot.attributes.longitude;

    const openGoogleMaps = () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`);
    }

    function newIcon () {
        return L.icon({
            iconUrl: "https://s3.sa-east-1.amazonaws.com/dev.se360.co/parking-sign-2526.png",
            iconSize: 40
        })
    }
    return(
        <Marker position={[lat, lng]} icon={newIcon()}>
            <Popup>
                <div className="flex flex-col items-center hover:cursor-pointer">
                    {parkingLot.attributes.name}
                    <button onClick={openGoogleMaps}>Click to go</button>
                </div>
            </Popup>
        </Marker>
    )
}