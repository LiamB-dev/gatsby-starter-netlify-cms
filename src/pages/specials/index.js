import React from 'react'

import Layout from '../../components/Layout'
import SpecialRoll from '../../components/BlogRoll'

export default class SpecialIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            </div>
              <SpecialRoll />
            </div>    
        </section>
      </Layout>
    )
  }
}
