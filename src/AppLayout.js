import React from "react";
import {Layout, Menu} from 'antd';

const {Header, Content} = Layout;

const AppLayout = props => {

    const {children} = props;
    return (
        <Layout className="layout">
            <Header>
                <div className="logo"/>
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

export default AppLayout;