import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import React from "react";
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  { key: "title", label: "Dashboard" },
  { key: "title1", label: "Dashboard 2" },
  {
    key: "title2",
    label: "Dashboard 3",
    children: [
      { key: "title11", label: "Dashboard" },
      {
        key: "title12",
        label: "Dashboard 12",
        children: [
          { key: "title21", label: "Dashboard" },
          { key: "title22", label: "Dashboard 2" },
        ],
      },
      { key: "title13", label: "Dashboard 13" },
    ],
  },
];

const MainLayout = () => {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div
            style={{
              color: "whitesmoke",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Ph Uni</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <h1>Our main content is here.</h1>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
