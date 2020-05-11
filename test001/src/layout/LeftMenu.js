import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

const MainLayout = ({ children }) => {
    return (
        <Fragment>
            <div>
                <Header/>
            </div>
            <Menu/>
            <children/>
            <Footer/>
        </Fragment>
    );
};

export default MainLayout;