//import lib
import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

//import styles
import '../styles/styles.scss'

const pageQuery = graphql`
    {
        gcms {
            presses {
                pressName
                articles {
                    name
                    slug
                }
            }
        }
    }
`


const Press = () => {
    const {
        gcms: { presses },
    } = useStaticQuery(pageQuery);

    return (
        presses.map(({ ...press }) => (
            <div className="page__menu__component">
                {press.pressName}
                <ul>
                {press.articles.map(({ slug, ...article }) => (
                    <div className="menu__component__wrap">
                        <li>
                            <Link key={slug} to={`/${slug}`} activeClassName="article__menu__active">
                                {article.name} 
                            </Link>
                        </li>
                    </div>
                ))}
                </ul>
            </div>
        )
    ));
};

export default Press;