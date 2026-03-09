import { Outlet } from "react-router"

export const Root = () => (
    <div className="flex flex-col bg-background h-dvh overflow-hidden">
        <Outlet />
    </div>
)