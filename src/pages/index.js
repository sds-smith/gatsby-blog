import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #646db5;
`

const IndexPage = ({data}) => {
  return (
    <Layout>
      <div>
        <h1>Counterpoint Musings</h1>
        <h4>{`Total Posts: ${data.allMarkdownRemark.totalCount}`}</h4>
        {
          data.allMarkdownRemark.edges.map(({node}) => (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
              </BlogLink>
              <p>{node.excerpt}</p>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`