import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import AppLayout from './AppLayout';
import RadioGroup from './radioGroup';

function App() {
    const options = [{label: 'Standard Edition', value: '$120'}, {label: 'Enterprise Edition.', value: '$999'}];

    return (
        <AppLayout>
            <RadioGroup options={options}/>
        </AppLayout>
    );
}

export default App;
