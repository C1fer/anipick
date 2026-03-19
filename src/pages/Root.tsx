import { Outlet } from "react-router"

export const Root = () => (
    <div id="router-root" className="flex flex-col bg-background h-dvh w-dvw overflow-hidden">
        <Outlet />
    </div>
)