import { Outlet } from "react-router"
import { TopBar } from "../components/TopBar"

export const Root = () => (
    <div className="flex flex-col bg-background h-screen">
        {/* <TopBar /> */}
        <div className="flex-1 overflow-auto">
            <Outlet />
        </div>
    </div>
)