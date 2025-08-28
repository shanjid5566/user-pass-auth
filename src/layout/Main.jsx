import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;