import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Field} from "../../models/field";
import {FieldTableComponent} from "./FieldTableComponent.tsx";
import {addField, deleteField, updateField} from "../../reducers/FieldSlice.tsx";

export const FieldFormComponent = () => {
    const dispatch = useDispatch();

    const fields = useSelector((state) => state.field);

    const [fieldCode, setFieldCode] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [location, setLocation] = useState("");
    const [fieldSize, setFieldSize] = useState<number | "">("");
    const [fieldImage1, setFieldImage1] = useState<File | null>(null);
    const [fieldImage2, setFieldImage2] = useState<File | null>(null);
    const [previewImage1, setPreviewImage1] = useState<string | null>(null);
    const [previewImage2, setPreviewImage2] = useState<string | null>(null);

    const handleFieldOperation = (type: string) => {
        if (!fieldCode || !fieldName || !location || !fieldSize) {
            alert("Please fill out all required fields.");
            return;
        }

        const newField: Field = {
            field_code: fieldCode,
            field_name: fieldName,
            location,
            field_size: Number(fieldSize),
            field_image1: previewImage1 || "",
            field_image2: previewImage2 || "",
        };

        switch (type) {
            case "ADD_FIELD":
                dispatch(addField(newField));
                clearForm();
                break;
            case "UPDATE_FIELD":
                dispatch(updateField(newField));
                clearForm();
                break;
            case "DELETE_FIELD":
                dispatch(deleteField(fieldCode));
                clearForm();
                break;
            default:
                break;
        }
    };

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setImage: React.Dispatch<React.SetStateAction<File | null>>,
        setPreview: React.Dispatch<React.SetStateAction<string | null>>
    ) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const clearForm = () => {
        setFieldCode("");
        setFieldName("");
        setLocation("");
        setFieldSize("");
        setFieldImage1(null);
        setFieldImage2(null);
        setPreviewImage1(null);
        setPreviewImage2(null);
    };

    const handleFieldCodeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const field = fields.find((f: Field) => f.field_code === fieldCode);
            if (field) {
                setFieldName(field.field_name);
                setLocation(field.location);
                setFieldSize(field.field_size);
                setPreviewImage1(field.field_image1 || null);
                setPreviewImage2(field.field_image2 || null);
            } else {
                alert("Field not found.");
            }
        }
    };

    return (
        <>
            <form className="mx-2 mt-4 p-4">
                <div className="grid gap-6 mb-6 grid-cols-1 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="field_code"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Field Code
                        </label>
                        <input
                            type="text"
                            id="field_code"
                            value={fieldCode}
                            onChange={(e) => setFieldCode(e.target.value)}
                            onKeyDown={handleFieldCodeEnter}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="F123"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="field_name"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Field Name
                        </label>
                        <input
                            type="text"
                            id="field_name"
                            value={fieldName}
                            onChange={(e) => setFieldName(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="Main Field"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="location"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="City"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="field_size"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Field Size
                        </label>
                        <input
                            type="number"
                            id="field_size"
                            value={fieldSize}
                            onChange={(e) => setFieldSize(Number(e.target.value))}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="100"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="field_image1"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Field Image 1
                        </label>
                        <input
                            type="file"
                            id="field_image1"
                            onChange={(e) => handleImageChange(e, setFieldImage1, setPreviewImage1)}
                            className="w-full p-2 border rounded border-gray-300 text-blue-700"
                            accept="image/*"
                        />
                        {previewImage1 && (
                            <img src={previewImage1} alt="Preview 1" className="mt-2 h-20"/>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="field_image2"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Field Image 2
                        </label>
                        <input
                            type="file"
                            id="field_image2"
                            onChange={(e) => handleImageChange(e, setFieldImage2, setPreviewImage2)}
                            className="w-full p-2 border rounded border-gray-300 text-blue-700"
                            accept="image/*"
                        />
                        {previewImage2 && (
                            <img src={previewImage2} alt="Preview 2" className="mt-2 h-20"/>
                        )}
                    </div>
                </div>

                <div className="flex gap-4 justify-start mx-2 mt-8">
                    <button
                        type="button"
                        onClick={() => handleFieldOperation("ADD_FIELD")}
                        className="px-5 py-2 text-sm font-medium text-gray-800 bg-yellow-200 rounded-lg shadow-md border border-yellow-400 hover:bg-yellow-300"
                    >
                        Add Field
                    </button>
                    <button
                        type="button"
                        onClick={() => handleFieldOperation("UPDATE_FIELD")}
                        className="px-5 py-2 text-sm font-medium text-gray-800 bg-green-200 rounded-lg shadow-md border border-green-400 hover:bg-green-300"
                    >
                        Update Field
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
                        onClick={() => handleFieldOperation("DELETE_FIELD")}
                        className="px-5 py-2 text-sm font-medium text-gray-800 bg-red-200 rounded-lg shadow-md border border-red-400 hover:bg-red-300"
                    >
                        Delete Field
                    </button>
                </div>
            </form>
            <FieldTableComponent fields={fields}/>
        </>
    );
};
