import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Link to="/">
                <h1>리엑트를 위한 웹팩4</h1>
            </Link>
            {children}
        </Fragment>
    );
};

export default Layout;