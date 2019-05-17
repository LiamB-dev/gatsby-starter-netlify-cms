import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  heading1,
  body1,
  heading2,
  body2,
  heading3,
  body3,
  heading4,
  body4,
}) => (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp
              ? image.childImageSharp.fluid.src
              : image
            })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column'
        }}>
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              backgroundColor: 'rgb(255, 68, 0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em'
            }}
          >
            {title}
          </h1>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <div className="tile">
                    <div>
                      <h1>{heading1}</h1>
                      {body1}
                    </div>
                    <div>
                      <h1>{heading2}</h1>
                      {body2}
                    </div>
                  </div>
                  <div className="tile">
                    <div>
                      <h1>{heading3}</h1>
                      {body3}
                    </div>
                    <div>
                      <h1>{heading4}</h1>
                      {body4}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading1: PropTypes.markdownRemark,
  body1: PropTypes.markdownRemark,
  heading2: PropTypes.markdownRemark,
  body2: PropTypes.markdownRemark,
  heading3: PropTypes.markdownRemark,
  body3: PropTypes.markdownRemark,
  heading4: PropTypes.markdownRemark,
  body4: PropTypes.shape
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading1={frontmatter.heading1}
        body1={frontmatter.body1}
        heading2={frontmatter.heading2}
        body2={frontmatter.body2}
        heading3={frontmatter.heading3}
        body3={frontmatter.body3}
        heading4={frontmatter.heading4}
        body4={frontmatter.body4}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading1
        body1
        heading2
        body2
        heading3
        body3
        heading4
        body4
      }
    }
  }
`
