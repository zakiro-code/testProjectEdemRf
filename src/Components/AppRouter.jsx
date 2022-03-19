import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/" element={<Posts />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default AppRouter;