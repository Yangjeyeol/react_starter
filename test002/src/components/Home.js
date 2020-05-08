import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
    return (
        <Layout>
            <p>안녕하세요. 리엑트를 위한 웹펙4입니다.</p>
            <p>
                <Link to="/dynamic">Dynamic Page로 이동</Link>
            </p>
        </Layout>
    );
};

export default Home;