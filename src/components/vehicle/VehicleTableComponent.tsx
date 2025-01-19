import {Vehicle} from "../../models/vehicle.ts";

export const VehicleTableComponent = ({vehicles = []}: { vehicles?: Vehicle[] }) => {
    return (
        <div className="overflow-x-auto mx-2 mt-7 bg-gray-50 p-4 rounded-lg shadow-lg">
            <table className="w-full border-collapse bg-white text-sm text-gray-800 shadow-md sm:rounded-lg">
                <thead>
                <tr className="bg-light-blue-200 text-gray-700 text-base font-semibold uppercase tracking-wide border-b border-dashed">
                    <th className="px-6 py-4 text-left">Vehicle Code</th>
                    <th className="px-6 py-4 text-left">License Plate</th>
                    <th className="px-6 py-4 text-left">Category</th>
                    <th className="px-6 py-4 text-left">Fuel</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    <th className="px-6 py-4 text-left">Remarks</th>
                </tr>
                </thead>
                <tbody>
                {vehicles.length > 0 ? (
                    vehicles.map((vehicle: Vehicle, index: number) => (
                        <tr
                            key={index}
                            className="even:bg-gray-50 odd:bg-white hover:bg-light-blue-50 transition duration-200 border-b border-dashed"
                        >
                            <td className="px-6 py-4 text-sm">{vehicle.vehicle_code}</td>
                            <td className="px-6 py-4 text-sm">{vehicle.license_plate}</td>
                            <td className="px-6 py-4 text-sm">{vehicle.category}</td>
                            <td className="px-6 py-4 text-sm">{vehicle.fuel}</td>
                            <td className="px-6 py-4 text-sm">{vehicle.status}</td>
                            <td className="px-6 py-4 text-sm">{vehicle.remarks}</td>
                        </tr>
                    ))
                ) : (
                    <tr className="border-b border-dashed">
                        <td colSpan={6} className="text-center py-6 text-gray-500 text-base">
                            No vehicles available.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};