import { Layout } from 'antd'
import React from 'react'

const { Footer } = Layout

const Footers = () => {
  return (
    <Layout>
        <Footer
        style={{
          textAlign: "center",
        }}
      >
        Internship Pakistan ©{new Date().getFullYear()} Created by Atrooba
      </Footer>
    </Layout>
  )
}

export default Footers;