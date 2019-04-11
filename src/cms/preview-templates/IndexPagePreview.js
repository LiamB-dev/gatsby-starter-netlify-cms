import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry}) => {

  return (
    <IndexPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading1={entry.getIn(['data', 'title'])}
      body1={entry.getIn(['data', 'title'])}
      heading2={entry.getIn(['data', 'title'])}
      body2={entry.getIn(['data', 'title'])}
      heading3={entry.getIn(['data', 'title'])}
      body3={entry.getIn(['data', 'title'])}
      heading4={entry.getIn(['data', 'title'])}
      body4={entry.getIn(['data', 'title'])}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
