import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const ContactPageTemplate = ({
  title,
  body

}) => (
    <div>
      <section className="section section--gradient">
        <div className="container">
          {body}
        </div>
      </section>
    </div>
  )

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.markdownRemark
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        body={frontmatter.body}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const pageQuery = graphql`
query ContactPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}) {
      frontmatter {
        body
      }
    }
  }
`
