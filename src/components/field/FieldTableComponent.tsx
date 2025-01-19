import {Field} from "../../models/field.ts";

export const FieldTableComponent = ({fields = []}: { fields?: Field[] }) => {
    return (
        <div className="overflow-x-auto mx-2 mt-7 bg-gray-50 p-4 rounded-lg shadow-lg">
            <table className="w-full border-collapse bg-white text-sm text-gray-800 shadow-md sm:rounded-lg">
                <thead>
                <tr className="bg-light-blue-200 text-gray-700 text-base font-semibold uppercase tracking-wide border-b border-dashed">
                    <th className="px-6 py-4 text-left">Field Code</th>
                    <th className="px-6 py-4 text-left">Field Name</th>
                    <th className="px-6 py-4 text-left">Location</th>
                    <th className="px-6 py-4 text-left">Field Size</th>
                    <th className="px-6 py-4 text-left">Field Image 1</th>
                    <th className="px-6 py-4 text-left">Field Image 2</th>
                </tr>
                </thead>
                <tbody>
                {fields.length > 0 ? (
                    fields.map((field: Field, index: number) => (
                        <tr
                            key={index}
                            className="even:bg-gray-50 odd:bg-white hover:bg-light-blue-50 transition duration-200 border-b border-dashed"
                        >
                            <td className="px-6 py-4 text-sm">{field.field_code}</td>
                            <td className="px-6 py-4 text-sm">{field.field_name}</td>
                            <td className="px-6 py-4 text-sm">{field.location}</td>
                            <td className="px-6 py-4 text-sm">{field.field_size}</td>
                            <td className="px-6 py-4 text-sm">
                                {field.field_image1 ? (
                                    <img
                                        src={field.field_image1}
                                        alt="Field Image 1"
                                        className="h-16 w-16 object-cover rounded"
                                    />
                                ) : (
                                    "No Image"
                                )}
                            </td>
                            <td className="px-6 py-4 text-sm">
                                {field.field_image2 ? (
                                    <img
                                        src={field.field_image2}
                                        alt="Field Image 2"
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
                        <td colSpan={6} className="text-center py-6 text-gray-500 text-base">
                            No fields available.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
