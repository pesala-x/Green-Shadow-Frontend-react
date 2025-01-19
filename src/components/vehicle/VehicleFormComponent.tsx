import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Vehicle} from "../../models/vehicle.ts";
import {addVehicle, deleteVehicle, updateVehicle} from "../../reducers/VehicleSlice.tsx";
import {VehicleTableComponent} from "./VehicleTableComponent";

export const VehicleFormComponent = () => {
    const dispatch = useDispatch();

    const vehicles = useSelector((state) => state.vehicle);

    const [vehicleCode, setVehicleCode] = useState("");
    const [licensePlate, setLicensePlate] = useState("");
    const [category, setCategory] = useState("");
    const [fuel, setFuel] = useState("");
    const [status, setStatus] = useState("");
    const [remarks, setRemarks] = useState("");

    const handleVehicleOperation = (type: string) => {
        if (!vehicleCode || !licensePlate || !category || !fuel || !status) {
            alert("Please fill out all required fields.");
            return;
        }

        const newVehicle: Vehicle = {
            vehicle_code: vehicleCode,
            license_plate: licensePlate,
            category,
            fuel,
            status,
            remarks,
        };

        switch (type) {
            case "ADD_VEHICLE":
                dispatch(addVehicle(newVehicle));
                clearForm();
                break;
            case "UPDATE_VEHICLE":
                dispatch(updateVehicle(newVehicle));
                clearForm();
                break;
            case "DELETE_VEHICLE":
                dispatch(deleteVehicle(vehicleCode));
                clearForm();
                break;
            default:
                break;
        }
    };

    const clearForm = () => {
        setVehicleCode("");
        setLicensePlate("");
        setCategory("");
        setFuel("");
        setStatus("");
        setRemarks("");
    };

    const handleSearchByCode = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const foundVehicle = vehicles.find(
                (vehicle: Vehicle) => vehicle.vehicle_code === vehicleCode
            );
            if (foundVehicle) {
                setLicensePlate(foundVehicle.license_plate);
                setCategory(foundVehicle.category);
                setFuel(foundVehicle.fuel);
                setStatus(foundVehicle.status);
                setRemarks(foundVehicle.remarks);
            } else {
                alert("Vehicle not found");
            }
        }
    };

    return (
        <>
            <form className="mx-2 mt-4 p-4">
                <div className="grid gap-6 mb-6 grid-cols-1 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="vehicle_code"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Vehicle Code
                        </label>
                        <input
                            type="text"
                            id="vehicle_code"
                            value={vehicleCode}
                            onChange={(e) => setVehicleCode(e.target.value)}
                            onKeyDown={handleSearchByCode}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="V123"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="license_plate"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            License Plate
                        </label>
                        <input
                            type="text"
                            id="license_plate"
                            value={licensePlate}
                            onChange={(e) => setLicensePlate(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="ABC-1234"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="category"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            required
                        >
                            <option value="" disabled>
                                Select Vehicle Category
                            </option>
                            <option value="Car">Car</option>
                            <option value="Van">Van</option>
                            <option value="Motorbikes">Motorbikes</option>
                            <option value="Tractors-Land masters">Tractors-Land masters</option>
                            <option value="Tractors-4WD">Tractors-4WD</option>
                            <option value="Tankers truck">Tankers truck</option>
                            <option value="Land vehicles">Land vehicles</option>
                            <option value="Lorry">Lorry</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="fuel"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Fuel Type
                        </label>
                        <select
                            id="fuel"
                            value={fuel}
                            onChange={(e) => setFuel(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            required
                        >
                            <option value="" disabled>
                                Select Fuel Type
                            </option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Kerosene">Kerosene</option>
                            <option value="Fuel oil">Fuel oil</option>
                            <option value="Bitumen">Bitumen</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="status"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Status
                        </label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            required
                        >
                            <option value="" disabled>
                                Select Status
                            </option>
                            <option value="Available">Available</option>
                            <option value="Out of Service">Out of Service</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="remarks"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Remarks
                        </label>
                        <input
                            type="text"
                            id="remarks"
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="Good Condition"
                        />
                    </div>
                </div>

                <div className="flex gap-4 justify-start mx-2 mt-8">
                    <button
                        type="button"
                        onClick={() => handleVehicleOperation("ADD_VEHICLE")}
                        className="px-5 py-2 text-sm font-medium text-gray-800 bg-yellow-200 rounded-lg shadow-md border border-yellow-400 hover:bg-yellow-300"
                    >
                        Add Vehicle
                    </button>
                    <button
                        type="button"
                        onClick={() => handleVehicleOperation("UPDATE_VEHICLE")}
                        className="px-5 py-2 text-sm font-medium text-gray-800 bg-green-200 rounded-lg shadow-md border border-green-400 hover:bg-green-300"
                    >
                        Update Vehicle
                    </button>
                    <button
                        type="button"
                        onClick={() => clearForm()}
                        className="px-5 py-2 text-sm font-medium text-gray-800 bg-orange-200 rounded-lg shadow-md border border-orange-400 hover:bg-orange-300"
                    >
                        Clear
                    </button>
                    <button
                        type="button"
                        onClick={() => handleVehicleOperation("DELETE_VEHICLE")}
                        className="px-5 py-2 text-sm font-medium text-gray-800 bg-red-200 rounded-lg shadow-md border border-red-400 hover:bg-red-300"
                    >
                        Delete Vehicle
                    </button>
                </div>
            </form>
            <VehicleTableComponent vehicles={vehicles}/>
        </>
    );
};
