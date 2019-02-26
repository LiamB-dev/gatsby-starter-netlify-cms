import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import PleinDag from '../../components/PleinDag'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            <div>
                
                <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  Algemene info
                </h1>
              </div>
            </div>
              <BlogRoll />
            </div>    
        </section>
        <section className="section">
            <div className="container">
            <div className="content">
            <div>
                
                <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  Een dag op het speelplein
                </h1>
              </div>
            </div>
              <PleinDag />
            </div>
        </section>
      </Layout>
    )
  }
}
