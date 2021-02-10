import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Head from './Pages/Head'
import Body from './Pages/Body'
import './css/index.css'

function AppRouter() {
    return (
        <div>
            <Head />
            <Body />
        </div>
    );
}

export default AppRouter;