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
                    {article.article2 && article.link && (
                        <div className="page__menu__jump">
                            {article.article3 && (
                                <a href="#full">Jump to the Full Report</a>
                            )}
                            {article.articlecontent && (
                                <a href="#may">Jump to the May Summary</a>
                            )}
                            {article.article2 && (
                                <a href="#sept">Jump to the Sept. Summary</a>
                            )}
                            <a href={article.link}>Jump to the WG's doc!</a>
                        </div>
                    )}
                    <React.Fragment>
                        <h1 className="article__title" id={article.article3 && "full"}>{article.name}</h1>

                        {article.article3 && (<>
                            <hr></hr>
                            <div className="article__tags">
                                {article.name !== 'Press Release' ? (
                                    <h3>Read the story of {article.name} from May to September 2021, written by <a href={"https://twitter.com/" + article.author3}>{article.author3}</a></h3>
                                ) : (
                                    <h3>Written by <a href={"https://twitter.com/" + article.author3}>{article.author3}</a></h3>
                                )}
                            </div>
                        
                            <div className="article__parse__string" dangerouslySetInnerHTML={{__html: article.article3.html }}></div>
                            <br />                     
                        </>)}

                        {article.articlecontent && (<>
                            <hr id="may"/>
                            <div className="article__tags">
                                <h3>Summary from the hicathon (May 2021), written by <a href={"https://twitter.com/" + article.author1}>{article.author1}</a></h3>
                            </div>
                        
                            <div className="article__parse__string" dangerouslySetInnerHTML={{__html: article.articlecontent.html }}></div>                        
                        </>)}

                        {article.article2 && (<>
                            <br />
                            <hr id="sept"/>
                            <div className="article__tags">
                                <h3>Summary from the post-hicathon (September 2021), written by <a href={"https://twitter.com/" + article.author2}>{article.author2}</a></h3>
                            </div>
                            
                            <div className="article__parse__string" dangerouslySetInnerHTML={{__html: article.article2.html }}></div>

                        </>)}

                        {article.link && (<>
                            <hr />
                            <a href={article.link} className="article__link">View the work that {article.name} accomplished over hicathon!</a>
                        </>)}
                    </React.Fragment>
                </div>
            </div>
        )
}

export const docQuery = graphql`
    query docPageQuery($id: ID!) {
        gcms {
            article(where: { id: $id }) {
                date
                name
                articlecontent {
                    html
                }
                article2 {
                    html
                }
                article3 {
                    html
                }
                link

                author1
                author2
                author3
            }
        }
    }
`;

export default DocPage