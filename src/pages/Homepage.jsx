import React from "react";
import { Layout, Button, Row, Col, Card, Typography } from "antd";
import herobg2 from "../assets/herobg2.jpg";
import Headers from "../components/Header";
import Footers from "../components/Footer";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Homepage = () => {
  const reviews = [
    { user: "user 1" },
    { user: "user 2" },
    { user: "user 3" },
  ];
  return (
    <Layout>
      {/* navigation bar */}
      <Headers />

      {/* hero section */}
      <Content
        style={{
          backgroundImage: `url(${herobg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#3372c7b5", // Blue overlay
            zIndex: 1,
          }}
        ></div>

        <div style={{ zIndex: 2, position: "relative" }}>
          <Title level={1} style={{ color: "#fff", fontSize: "80px" }}>
            Welcome to Internship Pakistan
          </Title>

          <Paragraph style={{ color: "#fff", fontSize: "24px" }}>
            Explore oppertunities and kickstart your career with top
            internships.
          </Paragraph>

          <Button
            size="large"
            style={{
              backgroundColor: "#054dae",
              color: "#fff",
              border: "#054dae",
            }}
          >
            <Link to="/internships">Explore Internships</Link>
          </Button>
        </div>

      </Content>

      {/* featured internships section */}

      <Content style={{ padding: "50px" }}>
        <Title level={2}>Featured Internships</Title>
        <Row gutter={[16, 16]}>
          {[
            "Frontend Development",
            "Backend Development",
            "Graphic Designing",
          ].map((internship) => (
            <Col xs={24} sm={12} lg={8} key={internship}>
              <Card title={internship} bordered>
                <p>
                  Focused on internships for students and freshers. Offers free
                  and premium plans for users. Provides training and skill
                  development courses.
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      {/* testimonial section */}

      <Content style={{ padding: "50px" }}>
        <Title level={2}>Reviews</Title>
        <Row gutter={[16, 16]}>
          {reviews.map(({ user }) => (
            <Col xs={24} sm={12} lg={8} key={user}>
              <Card title={user}>
                <p>
                  Great experience with Internship Pakistan. Real-world
                  experience with coding and problem-solving. Exposure to tools
                  and frameworks (e.g., React, Python, etc.). Great mentorship
                  in startups and MNCs.
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
      
      {/* footer */}
      <Footers />
    </Layout>
  );
};
export default Homepage;
