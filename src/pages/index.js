import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Fatime Rrahmani"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `psychology`, `research`, `writing`]}
        />
        <img style={{ margin: 0 }} src="/M1e9pDF.png/" alt="fatime rrahmani" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my personal blog</p>
        <p>
          I am a  young researcher and enthusiastic writer. A lover of philosophy, literature, art and psychology
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
