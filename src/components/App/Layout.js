import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="app-container flex flex-col h-screen">
            <Header />

            <div className="flex-grow">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}
