import { Outlet } from "react-router"
import { TopBar } from "../components/TopBar"

export const Root = () => (
    <div className="flex flex-col bg-gray-950">
        <TopBar />
        <div className="flex min-w-screen min-h-screen">
            <Outlet />
        </div>
    </div>
)