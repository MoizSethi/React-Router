import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Headers/Header'; // Add this line
import Footer from './components/Footers/Footer'; // Ensure Footer is also imported

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
