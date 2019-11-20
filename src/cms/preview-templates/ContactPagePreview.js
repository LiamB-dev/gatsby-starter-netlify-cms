import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const ContactPagePreview = ({ entry}) => {

  return (
    <ContactPageTemplate
      title={entry.getIn(['data', 'title'])}
      body={entry.getIn(['data', 'title'])}
    />
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContactPagePreview
