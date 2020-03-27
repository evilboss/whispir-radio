import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import AppLayout from './AppLayout';
import Product from "./Product";

const App = () => {
    const options = [{label: 'Standard Edition', value: '$120'}, {label: 'Enterprise Edition.', value: '$999'}];

    return (
        <AppLayout>
            <Product options={options}/>
        </AppLayout>
    );
};

export default App;
