import React, {useState} from "react";
import PropTypes from 'prop-types';

import {Card, Typography, Row, Col, Divider} from "antd";
import RadioGroup from './radioGroup';

const {Text} = Typography;

const Product = (props) => {
    const {options} = props;
    let [optionValue, setOptionValue] = useState('$120');

    return (
        <div>
            <Divider orientation="left">

            </Divider>
            <Row gutter={16}>
                <Col className="gutter-row" span={1}>
                </Col>
                <Col className="gutter-row" span={22}>
                    <Card title="Product tiers" bordered={false} style={{width: '100%'}}>
                        <RadioGroup options={options} optionValue={optionValue} setOptionValue={setOptionValue}/>
                        <p>Total Price</p>
                        <Text code>
                            {optionValue} per month
                        </Text>
                    </Card>
                </Col>

                <Col className="gutter-row" span={1}>
                </Col>
            </Row>



        </div>
    );
};
Product.propTypes = {
    options: PropTypes.array.isRequired
};


export default Product;