import React from "react";
import {Radio} from 'antd';
const RadioGroup = (props) => {
    const {options, optionValue, setOptionValue} = props;
    const radioStyle = {
        display: "block",
        height: "30px",
        lineHeight: "30px"
    };
    const onChange = (e) => {
        setOptionValue(e.target.value);

    };

    return (

        <Radio.Group value={optionValue} onChange={onChange}>


            {options.map((option, key) =>
                <Radio key={key} value={option.value} style={radioStyle}>
                    {option.label}
                </Radio>
            )}

        </Radio.Group>


    );

};

export default RadioGroup;