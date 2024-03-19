// LayoutMain.jsx
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/next'; // Add the import here

const LayoutMain = () => {
    return (
        <>  
            <Header />
            <SpeedInsights /> 
            <div className='mt-2'> 
                <Outlet />
            </div>
        </>
    );
};

export default LayoutMain;
