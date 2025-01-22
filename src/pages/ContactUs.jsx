import React from "react";
import {
  Layout,
  Form,
  Button,
  Input,
  Row,
  Col,
  Card,
} from "antd";
import Headers from "../components/Header";
import Footers from "../components/Footer";

const { Content } = Layout;
const { TextArea } = Input;

const ContactUs = () => {

  const onFinish = (values) => {
    console.log("Form Values:", values);
    //handle form submission here
  };

  return (
    <Layout>
      <Headers />

      <Content>
        <div style={{ padding: "20px" }}>
          <h1 style={{ textAlign: "center" }}>Contact Us</h1>
          <Row gutter={[16, 16]} justify="center">
            {/* contact form */}
            <Col xs={24} md={12}>
              <Card title="Send us a message" bordered>
                <Form name="contactform" layout="vertical" onFinish={onFinish}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <Input placeholder="your name" />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter a valid email address",
                      },
                    ]}
                  >
                    <Input placeholder="Your Email" />
                  </Form.Item>
                  <Form.Item
                    label="Subject"
                    name="subject"
                    rules={[
                      { required: true, message: "Please enter a subject" },
                    ]}
                  >
                    <Input placeholder="Subject" />
                  </Form.Item>
                  <Form.Item
                    label="Message"
                    name="message"
                    rules={[
                      { required: true, message: "Please enter your message" },
                    ]}
                  >
                    <TextArea rows={4} placeholder="Your Message" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" block  style={{
              backgroundColor: "#054dae",
              color: "#fff",
              border: "#054dae",
            }}>
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>

            {/* contact information */}
            <Col xs={24} md={12}>
              <Card title="Contact Information" bordered>
                <p>
                  <strong>Email:</strong> internshipPakistan.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 234 567 890
                </p>
                <p>
                  <strong>Address:</strong> abc street , Karachi , Pakistan.
                </p>
                <div style={{ marginTop: "20px" }}>
                  <iframe
                    title="location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.9537353156168!3d-37.81627974202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57726c9e7a398c9!2sVictoria%20State%20Library%20of%20Victoria!5e0!3m2!1sen!2sau!4v1697364322278!5m2!1sen!2sau"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>

      <Footers />
    </Layout>
  );
};

export default ContactUs;
