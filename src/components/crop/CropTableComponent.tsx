import {Crop} from "../../models/crop.ts";

export const CropTableComponent = ({crops = []}: { crops?: Crop[] }) => {
    return (
        <div className="overflow-x-auto mx-2 mt-7 bg-gray-50 p-4 rounded-lg shadow-lg">
            <table className="w-full border-collapse bg-white text-sm text-gray-800 shadow-md sm:rounded-lg">
                <thead>
                <tr className="bg-light-blue-200 text-gray-700 text-base font-semibold uppercase tracking-wide border-b border-dashed">
                    <th className="px-6 py-4 text-left">Crop Code</th>
                    <th className="px-6 py-4 text-left">Common Name</th>
                    <th className="px-6 py-4 text-left">Scientific Name</th>
                    <th className="px-6 py-4 text-left">Category</th>
                    <th className="px-6 py-4 text-left">Season</th>
                    <th className="px-6 py-4 text-left">Field Code</th>
                    <th className="px-6 py-4 text-left">Crop Image</th>
                </tr>
                </thead>
                <tbody>
                {crops.length > 0 ? (
                    crops.map((crop: Crop, index: number) => (
                        <tr
                            key={index}
                            className="even:bg-gray-50 odd:bg-white hover:bg-light-blue-50 transition duration-200 border-b border-dashed"
                        >
                            <td className="px-6 py-4 text-sm">{crop.crop_code}</td>
                            <td className="px-6 py-4 text-sm">{crop.common_name}</td>
                            <td className="px-6 py-4 text-sm">{crop.scientific_name}</td>
                            <td className="px-6 py-4 text-sm">{crop.category}</td>
                            <td className="px-6 py-4 text-sm">{crop.season}</td>
                            <td className="px-6 py-4 text-sm">{crop.field_code}</td>
                            <td className="px-6 py-4 text-sm">
                                {crop.crop_image ? (
                                    <img
                                        src={crop.crop_image}
                                        alt="Crop Image"
                                        className="h-16 w-16 object-cover rounded"
                                    />
                                ) : (
                                    "No Image"
                                )}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr className="border-b border-dashed">
                        <td colSpan={7} className="text-center py-6 text-gray-500 text-base">
                            No crops available.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
