import React, {useState} from "react";
import {Card, Typography} from "antd";
import RadioGroup from './radioGroup';

const {Text} = Typography;

const Product = (props) => {
    const {options} = props;
    let [optionValue, setOptionValue] = useState('$120');
    return (
        <Card title="Product tiers" bordered={false} style={{width: 300}}>
            <RadioGroup options={options} optionValue={optionValue} setOptionValue={setOptionValue}/>
            <p>Total Price</p>
            <Text code>
                {optionValue} per month
            </Text>
        </Card>);
};


export default Product;