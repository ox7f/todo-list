import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}
