import React from "react";
import {Card, Radio, Typography} from 'antd';

const {Text} = Typography;

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionValue: '$120'
        }
    }

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            optionValue: e.target.value,
        });
    };

    render() {
        const {options} = this.props;
        const {optionValue} = this.state;
        const radioStyle = {
            display: "block",
            height: "30px",
            lineHeight: "30px"
        };

        return (
            <div>
                <Card title="   " bordered={false} style={{width: 300}}>

                    <Radio.Group onChange={this.onChange}>
                        {options.map((option, key) =>

                            <Radio key={key} value={option.value} style={radioStyle}>{option.label}</Radio>
                        )}

                    </Radio.Group>
                    <p>Total Price</p>
                    <Text code>
                        {optionValue} per month
                    </Text>
                </Card>

            </div>

        );
    }
}

export default RadioGroup;