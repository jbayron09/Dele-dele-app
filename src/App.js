import './App.css';
import {AiFillCar} from "react-icons/ai";
import {FaMotorcycle} from "react-icons/fa";
import {MapView} from "./componets/MapView";
import {useState} from "react";
import deleDele from "./imagenes/logo/Dele-Letras.png";

function App() {
    const [vehicleType, setVehicleType] = useState(undefined)
    const handleSelectCar = () =>{
        if(vehicleType==='car'){
            setVehicleType(undefined);
        } else{
            setVehicleType('car')
        }
    }

    const handleSelectMotorcycle = () =>{
        if(vehicleType==='motorcycle'){
            setVehicleType(undefined);
        } else{
            setVehicleType('motorcycle')
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-between items-center">
            <header className="flex bg-amber-500 text-white w-3/12 h-20 items-center text-center px-8 mt-4 rounded-3xl z-30">
                <img src={deleDele} alt="logo" className="w-10 h-10 mr-4"/>
                <p>Encuentra los parqueaderos mas cercanos y evita multas</p>
            </header>
            <div className="w-3/12 h-11 rounded-full flex justify-around mb-6 bg-gray-200 overflow-hidden z-30">
                <button onClick={handleSelectCar} className="w-1/2 hover:bg-gray-300 flex items-center justify-center">
                    <AiFillCar className="mr-4"/>
                    Carros
                </button>
                <button onClick={handleSelectMotorcycle} className="w-1/2 hover:bg-gray-300 flex items-center justify-center">
                    Motos
                    <FaMotorcycle className="ml-4"/>
                </button>
            </div>
            <MapView vehicleType={vehicleType}/>
        </div>
    );
}

export default App;
