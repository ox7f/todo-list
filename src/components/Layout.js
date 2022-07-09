import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="app-container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
