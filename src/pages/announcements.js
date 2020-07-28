import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const announcements = [
      {
        id: 1,
        title: "Hey Marine!",
        publishDate: "April 1st",
        description: "I eat ephemoral staging environments for breakfast."
      },
      {
        id: 2,
        title: "Two hotdogs, One Bun",
        publishDate: "June 6",
        description: "Does this look right to you?"
      },
      {
        id: 3,
        title: "Build or Buy?",
        publishDate: "Nov 10",
        description: "That is the question!"
      },
      {
        id: 4,
        title: "Static Builds Rule!",
        publishDate: "July 19",
        description: "Make your life easier with our new feature."
      },
    ]
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          {/* <Hero data={author.node} /> */}
          <div className="wrapper">
            <h1 className="section-headline">Latest Announcements</h1>
            <ul className="announcement-list">
              {announcements.map(node => {
                return (
                  <li key={node.id}>
                    <div className="announcement"> 
                      <h3>{node.title}</h3>
                      <p>{"-"}</p>
                      <p>{node.description}</p>
                      <p><i>~{" "}{node.publishDate}</i></p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
