import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayoutComponent} from "./components/sidebar/RootLayoutComponent.tsx";
import {DashboardPage} from "./pages/DashboardPage.tsx";
import {FieldPage} from "./pages/FieldPage.tsx";
import {VehiclePage} from "./pages/VehiclePage.tsx";
import {CropPage} from "./pages/CropPage.tsx";
import {StaffPage} from "./pages/StaffPage.tsx";
import {EquipmentPage} from "./pages/EquipmentPage.tsx";
import {LogPage} from "./pages/LogPage.tsx";
import {NotFoundPage} from "./pages/NotFoundPage.tsx";


function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element: <RootLayoutComponent/>,
            children: [
                {path: '', element: <DashboardPage/>},
                {path: '/fields', element: <FieldPage/>},
                {path: '/vehicles', element: <VehiclePage/>},
                {path: '/crops', element: <CropPage/>},
                {path: '/staffs', element: <StaffPage/>},
                {path: '/equipments', element: <EquipmentPage/>},
                {path: '/logs', element: <LogPage/>},
            ]
        },
        {
            path: "*",
            element: <NotFoundPage/>
        }
    ])
    return (
        <>
            <RouterProvider router={routes}/>
        </>
    )
}

export default App

