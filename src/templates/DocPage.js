//import lib
import * as React from "react"
import { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

//import styles
import '../styles/styles.scss'

//import components
import Event from '../components/event'
import Logo from '../components/logo'

const DocPage = ({
    data: {
        gcms: { article },
        },
    }) => {
        const [active, setActive] = useState(true)

        useEffect(() => {
            if (window.outerWidth < 1025) {
                setActive(false)
            }
        }, [])

        return (
            <div className="page__wrapper">
                <Helmet>
                    <title>{'hicathon docs | ' + article.name }</title>
                </Helmet>
                <div className={active ? 'page__menu__active' : 'page__menu'}>
                <Logo />
                <div className={active ? 'logo__trigger' : 'trigger__active'} onClick={() => setActive(!active)}>
                    {active ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
                    )}
                </div>
                {active && (
                    <div className="page__menu__content">
                        <Event />
                    </div>  
                )}                  
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
        )
}

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