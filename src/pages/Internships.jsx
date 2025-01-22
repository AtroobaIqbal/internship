import React, { useState } from "react";
import { Layout, Button, Input, Select, Row, Col , Card } from "antd";
import Headers from "../components/Header";
import Footers from "../components/Footer";

const { Content } = Layout;
const { Option } = Select;

const InternshipsPage = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterDuration, setFilterDuration] = useState("");

  // Sample internship data
  const internships = [
    {
      key: "1",
      title: "Frontend Development Intern",
      company: "TechCorp",
      location: "New York",
      duration: "3 months",
      type: "Full-time",
    },
    {
      key: "2",
      title: "Backend Development Intern",
      company: "MarketHub",
      location: "San Francisco",
      duration: "6 months",
      type: "Part-time",
    },
    {
      key: "3",
      title: "Graphic Design Intern",
      company: "Designify",
      location: "Los Angeles",
      duration: "3 months",
      type: "Remote",
    },
  ];

  // Filtered data based on user inputs
  const filteredData = internships.filter((item) => {
    return (
      (!searchLocation || item.location.toLowerCase().includes(searchLocation.toLowerCase())) &&
      (!filterType || item.type === filterType) &&
      (!filterDuration || item.duration === filterDuration)
    );
  });

  return (

    <Layout style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh", // Full viewport height
    }}>
      <Headers />
        
     <Content style={{
          flex: 1, // Content area will take remaining space
          padding: "20px", // Add padding to content if needed
        }}>
    <div style={{ padding: "20px" }}>
      <h1>Internships</h1>
      <Row gutter={[16 , 16]} style={{ marginBottom: "20px" }}>
        <Col span={8}>
          <Input
            placeholder="Search by Location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </Col>
        <Col span={8}>
          <Select
            placeholder="Filter by Type"
            style={{ width: "100%" }}
            value={filterType}
            onChange={(value) => setFilterType(value)}
          >
            <Option value="Full-time">Full-time</Option>
            <Option value="Part-time">Part-time</Option>
            <Option value="Remote">Remote</Option>
          </Select>
        </Col>
        <Col span={8}>
          <Select
            placeholder="Filter by Duration"
            style={{ width: "100%" }}
            value={filterDuration}
            onChange={(value) => setFilterDuration(value)}
          >
            <Option value="3 months">3 months</Option>
            <Option value="6 months">6 months</Option>
          </Select>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        {filteredData.map((internship) => (
            <Col xs={24} sm={12} md={8} key={internship.key}>
            <Card
              title={internship.title}
              bordered={true}
              actions={[
                <Button type="primary" key={"apply"}  style={{
                  backgroundColor: "#054dae",
                  color: "#fff",
                  border: "#054dae",
                }}>Apply</Button>,
              ]}
            >
              <p><strong>Company:</strong> {internship.company}</p>
              <p><strong>Location:</strong> {internship.location}</p>
              <p><strong>Duration:</strong> {internship.duration}</p>
              <p><strong>Type:</strong> {internship.type}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </Content>

    <Footers />
    </Layout>
  );
};

export default InternshipsPage;
