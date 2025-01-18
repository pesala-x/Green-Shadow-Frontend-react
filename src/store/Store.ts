import {configureStore} from "@reduxjs/toolkit";
import {StaffSlice} from "../reducers/StaffSlice.tsx";

export const store = configureStore({
    reducer: {
        staff: StaffSlice,
    }
});