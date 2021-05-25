//import lib
import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

//import styles
import '../styles/styles.scss'

//import components
import Timeline from '../components/timeline'
import Event from '../components/event'
import Press from '../components/press'
import Logo from '../components/logo'

const DocPage = ({
    data: {
        gcms: { article },
        },
    }) => (
    <div className="page__wrapper">
        <Helmet>
            <title>{'hicathon docs | ' + article.name }</title>
        </Helmet>
        <div className="page__menu">
            <Logo />
            <div className="page__menu__content">
                <Event />
                <Timeline />
                <Press />
            </div>
        </div>
        <div className="page__content">
            <React.Fragment>
                <h1 className="article__title">{article.name}</h1>
                <hr></hr>
                <div className="article__tags">
                    <h3>WG {article.wgNumber} | {article.name}</h3>
                </div>
                
                <div className="article__parse__string" dangerouslySetInnerHTML={{__html: article.articlecontent.html }}></div>
            </React.Fragment>
        </div>
    </div>
    
);

export const docQuery = graphql`
    query docPageQuery($id: ID!) {
        gcms {
            article(where: { id: $id }) {
                wgNumber
                name
                articlecontent {
                    html
                }
            }
        }
    }
`;

export default DocPage