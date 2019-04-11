import React from 'react'

import Layout from '../../components/Layout'
import AnimatorRoll from '../../components/AnimatorRoll'

export default class AnimatorIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            </div>
              <AnimatorRoll />
            </div>    
        </section>
      </Layout>
    )
  }
}
