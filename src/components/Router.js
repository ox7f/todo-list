import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}></Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
