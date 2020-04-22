import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 2000,
    // fade:true,
    autoplaySpeed:5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
class WebApp extends React.Component {
    render() {
        const post = this.props.data.contentfulServices;
        return  (
        <Layout>
        <SEO title="Web Application" keywords={[`gatsby`, `application`, `react`]} />
            <Fade>
                <div className="wrapper">
                    <div className="pagebanner pagebannerLess">
                        <div className="pagebannerMax">
                            <h1 className="white">{post.title} </h1>
                            <h3 className="white mb-3">{post.tagline}</h3> 
                            <div className="banner-icons" >
                                {post.icons &&
                                    post.icons.map((item,index) => {
                                        return(
                                        <Img fixed={item.fixed} alt={item.title} width="40" className="mr-1" key={index}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="whatWeSection pb-5">
                        <div className="container container-less">
                            <div className="row mt-3">
                                <div className="col-12">
                                    <nav aria-label="breadcrumb ">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/services/">Services</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{post.title} </li>
                                    </ol>
                                    </nav>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="bg-white shadow-1 brb4 p-5 ">
                                        { post.tool &&
                                            <div className="row mb-3">
                                                <div className="col-12">
                                                    <strong>Tools:- </strong> 
                                                    {post.tool}
                                                </div>    
                                            </div>
                                        }
                                        <div className="row">
                                            <div className="col-12 font-large" >
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                    __html: post.shortBio.childMarkdownRemark.html,
                                                    }}
                                                />
                                            </div>    
                                        </div>

                                    {
                                      post.slider &&  <Slider {...settings}   >
                                          {
                                              post.slider.map((item) => {
                                                  return (
                                                        <div className="container2">
                                                            <Img className="img-responsive img-fluid" alt={item.title} sizes={item.sizes} />
                                                     <h2>{item.title}</h2>
                                                     <div className="top-left">{item.description}</div>
                                                  </div>
                                                  )
                                              })
                                          }
                                       </Slider> 
                                    }

                                        {/* paragraphHeading 1 for jam */}
                                        { post.slug==="jam-development" && post.paragraphHeading &&
                                            <div className="mt-4"> 
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h3> {post.paragraphHeading} </h3>          
                                                    </div>    
                                                </div>
                                                <div className="row">
                                                    { post.cardPost.filter(data => data.categories==="what")
                                                    .map((item,index) => {
                                                        return(
                                                        <div className="col-md-4  mt-3" key={index}>
                                                            <div className="h-100   layout-border p-3 br10 ">
                                                                <h5> {item.title} </h5>          
                                                                <p
                                                                    dangerouslySetInnerHTML={{
                                                                    __html: item.content.childMarkdownRemark.html,
                                                                    }}
                                                                />
                                                            </div>    
                                                        </div>
                                                        )
                                                    })
                                                    }
                                                </div>
                                            </div>
                                        }
                                        {/* paragraphHeading2 for jam */}
                                        { post.slug==="jam-development" && post.paragraphHeading2 &&
                                            <div className="mt-4"> 
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h3> {post.paragraphHeading2} </h3>          
                                                    </div>    
                                                </div>
                                                <div className="row">
                                                    { post.cardPost.filter(data => data.categories==="why")
                                                        .map((item,index) => {
                                                            return(
                                                            <div className="col-md-6  mt-3" key={index}>
                                                                <div className="h-100   layout-border p-3 br10 ">
                                                                    <h5> {item.title} </h5>          
                                                                    <p
                                                                        dangerouslySetInnerHTML={{
                                                                        __html: item.content.childMarkdownRemark.html,
                                                                        }}
                                                                    />
                                                                </div>    
                                                            </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        }
                                        { post.slug!=="jam-development" &&
                                            <div className="mt-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h3> {post.paragraphHeading}</h3>          
                                                    </div>    
                                                </div>
                                                <div className="row">
                                                    { post.content && 
                                                        <div className="col-12">
                                                            <p
                                                            dangerouslySetInnerHTML={{
                                                                __html: post.content.childMarkdownRemark.html,
                                                            }}
                                                            />
                                                        </div>
                                                    }
                                                    {
                                                        post.cardPost && 
                                                        post.cardPost.map((item,index) => {
                                                            if(!item.images) {
                                                                return (
                                                                    <div className="col-md-4  mt-3" key={index}>
                                                                        <div className="h-100   layout-border p-3 br10 ">
                                                                            <h5> {item.title} </h5>          
                                                                            <p
                                                                                dangerouslySetInnerHTML={{
                                                                                __html: item.content.childMarkdownRemark.html,
                                                                                }}
                                                                            />
                                                                        </div>    
                                                                    </div>   
                                                                )
                                                            }
                                                            else {
                                                                return(
                                                                    <div className="col-md-6 mt-3" key={index}>
                                                                        <div className="h-100 p-3 layout-border br10" >
                                                                            {
                                                                                item.images.map((image,index) => {
                                                                                    return(
                                                                                        <Img fixed={image.fixed} alt={image.title}  className="mr-1" key={index}/>
                                                                                    )
                                                                                })
                                                                            }
                                                                            <h5> {item.title} </h5>          
                                                                            <p
                                                                                dangerouslySetInnerHTML={{
                                                                                __html: item.content.childMarkdownRemark.html,
                                                                                }}
                                                                            />    
                                                                        </div>    
                                                                    </div>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
            </Fade>
        </Layout>
        )
    }
}
export default WebApp;

export const pageQuery = graphql`
  query ServicesBySlug($slug: String!) {
    contentfulServices(slug: { eq: $slug }) {
        title
        slug
        tagline
        tool
        paragraphHeading
        slider {
            sizes(maxWidth: 1180, background: "rgb:000000") {
                ...GatsbyContentfulSizes_withWebp
              }
            id
            title
            description
            file{
              url
            }
          }
        shortBio{
          childMarkdownRemark{
            html
          }
        }
        content{
          childMarkdownRemark{
            html
          }
        }
        icons{
          fixed(width: 40 ,height:40) {
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
          }
          }
          paragraphHeading2
          cardPost{
            title
            slug
            categories
            content{
              childMarkdownRemark{
                html
              }
            }
            images{
              fixed(width: 40 ,height:40) {
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
              }
              }
              
          }
    }
  }
`