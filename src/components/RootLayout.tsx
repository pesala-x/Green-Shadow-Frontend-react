import {Outlet} from "react-router-dom";
import {SideBar} from "./dashboard/SideBar.tsx";

export const RootLayout = () => {
    return (
        <>
            <SideBar></SideBar>
            <Outlet></Outlet>
        </>
    );
};