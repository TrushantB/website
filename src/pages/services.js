import React from "react"
import { Link } from "gatsby"
import Slide from 'react-reveal/Slide';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

class Services extends React.Component{
    render() {
        const service = this.props.data.allContentfulAllServices.edges;
return(
  <Layout>
      <SEO title="Services" />
      <div className="wrapper">
          <div className="pagebanner">
                  <div className="pagebannerMax">
                      <h1 className="white">{service[0].node.title}</h1>
                  </div>
          </div>
          <div className="whatWeSection pt-5">
              <div className="container">
                  <h2 className="mb-4">{service[0].node.tagline}</h2>
                  {console.log(service)}
                  <div className="row">
                      {
                        service[0].node.services.map((item,index) => {
                            return(
                              <Slide bottom key={index}>
                                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                                        <Link to={`/services/${item.slug}`} >
                                              <div className="card border-0 h-100">
                                                  <div className="card-body">
                                                      <div className="mb-3">
                                                          <img src={item.icon && item.icon.file.url} title={item.title} alt={item.title} height="50px"/>
                                                      </div>
                                                      <h5 className="card-title">{item.title}</h5>
                                                      <p className="small">{item.tool}</p>
                                                      <p className="card-text">{item.tagline}</p>
                                                      <p className="card-text"><small className="text-muted">
                                                      <Link to={`/services/${item.slug}`} >Read More...</Link>
                                                      </small></p>
                                                  </div>
                                              </div>
                                       </Link>
                                  </div>
                              </Slide>
                            )
                        })
                      }
                  </div>
              </div>
          </div>
    </div>
  </Layout>
)
}
}
export default Services;

export const pageQuery = graphql`
  query Services {
    allContentfulAllServices{
      edges{
        node{
          title
          slug
          tagline
           services{
            title
            tool
            tagline
            slug
            icon{
              file{
                url
              }
            }
          }
        }
      }
    }
  }`
