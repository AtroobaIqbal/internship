import React from "react";
import { Link , useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import { Layout , Menu } from "antd";

const { Header } = Layout;

const Headers = () => {
    const navigate = useNavigate();
  const items = [
    { key: "1", label: <Link to="/">Home</Link> },
    { key: "2", label: <Link to="/internships">Internships</Link> },
    { key: "3", label: <Link to="/aboutus">About Us</Link> },
    { key: "4", label: <Link to="/contactus">Contact Us</Link> },
  ];

  const handleClick = (e) => {
    const clickedItem = items.find((item)=> item.key === e.key);
    if (clickedItem) {
        navigate(clickedItem.path)
    } }

  return (
    <Layout>
    <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff", // custom color
        }}
      >

        {/* navigation links */}
        
        <div
          stle={{
            margin: "16px",
            flex: 1,
            minWidth: 0,
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              height: "60px",
              width: "60px",
              marginTop: "20px",
            }}
          />
        </div>

        <div className="demo-logo" />
        <Menu
          mode="horizontal"
          items={items}
          onClick={(e) => e.domEvent.preventDefault() && console.log("clicked item" , e)}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
    </Layout>
  );
};

export default Headers;
