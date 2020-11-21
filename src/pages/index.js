import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Snheidert Smalbach" />
    <h1>Hi people</h1>
    <p>Welcome to your my new site.</p>
    <p>I ll build something great...</p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
