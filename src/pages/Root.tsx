import { Outlet } from "react-router"
import { TopBar } from "../components/TopBar"

export const Root = () => (
    <div className="flex flex-col bg-background min-h-screen">
        {/* <TopBar /> */}
        <div className="">
            <Outlet />
        </div>
    </div>
)