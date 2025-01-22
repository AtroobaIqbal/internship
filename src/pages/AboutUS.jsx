import React from "react";
import {
  Timeline,
  Typography,
  Layout,
  Row,
  Col,
  Card,
} from "antd";
import Headers from "../components/Header";
import Footers from "../components/Footer";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const AboutUs = () => {

  return (
    <Layout>
      <Headers />

      <Content>
        <div style={{ padding: "20px" }}>
          <Title level={2} style={{ textAlign: "center" }}>
            About Us
          </Title>

          {/* mission section */}
          <Row justify="center" style={{ marginBottom: "30px" }}>
            <Col xs={24} md={18}>
              <Card bordered>
                <Title level={3}>Our Mission</Title>
                <Paragraph>
                  Our platform is dedicated to connecting talented individuals
                  with career-defining opportunities. We aim to bridge the gap
                  between job seekers and employers by providing a user-friendly
                  interface and curated listings.
                </Paragraph>
              </Card>
            </Col>
          </Row>

          {/* team section */}
          <Row justify="center" style={{ marginBottom: "30px" }}>
            <Col xs={24} md={18}>
              <Card bordered>
                <Title level={3}>Meet The Team</Title>
                <Paragraph>
                  Our team is a diverse group of professionals committed to
                  building an inclusive and innovative platform:
                </Paragraph>
                <ul>
                  <li>
                    <strong>Jane Doe:</strong> Founder & CEO
                  </li>
                  <li>
                    <strong>John Smith:</strong> Chief Technology Officer
                  </li>
                  <li>
                    <strong>Sarah Johnson:</strong> Marketing Lead
                  </li>
                  <li>
                        <strong>Michael Brown:</strong> Product Manager
                    </li>
                </ul>
              </Card>
            </Col>
          </Row>

          {/* timeline section */}

          <Row justify="center">
            <Col xs={24} md={18}>
            <Card bordered>
                <Title level={3}>Our History</Title>
                <Paragraph>Here’s a brief timeline of how our platform evolved:</Paragraph>
                <Timeline>
                    <Timeline.Item color="green">
                        <strong>2020:</strong> Platform founded with a mission to simplify job search.
                    </Timeline.Item>
                    <Timeline.Item color="blue">
                        <strong>2021:</strong> Reached 10,000 active users and launched mobile app.
                    </Timeline.Item>
                    <Timeline.Item color="red">
                        <strong>2022:</strong> Expanded to international markets.
                    </Timeline.Item>
                    <Timeline.Item color="purple">
                        <strong>2023:</strong> Introduced AI-based job recommendations.
                    </Timeline.Item>
                </Timeline>
            </Card>
            </Col>
          </Row>
        </div>
      </Content>

      <Footers />
    </Layout>
  );
};

export default AboutUs;
