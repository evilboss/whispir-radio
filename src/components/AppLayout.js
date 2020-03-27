import React from "react";
import {Layout, Menu} from 'antd';
import PropTypes from 'prop-types';

const {Header, Content} = Layout;

const AppLayout = props => {
    const {children} = props;
    return (
        <Layout className="layout">
            <Header style={{backgroundColor: '#1976d2'}}
            >
                <div className="logo" style={{color: 'white'}}>Whispir-radio</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                </Menu>
            </Header>
            <Content style={{padding: '0 50px', height: '90vh'}}>
                <div className="site-layout-content">
                    {children}
                </div>
            </Content>
        </Layout>

    );
};
AppLayout.propTypes = {
    options: PropTypes.node.isRequired
};

export default AppLayout;