//import lib
import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

//import styles
import '../styles/styles.scss'

const pageQuery = graphql`
    {
        gcms {
            events {
                eventName
                articles {
                    name
                    slug
                }
            }
        }
    }
`


const Cards = () => {
    const {
        gcms: { events },
    } = useStaticQuery(pageQuery);

    return (
        events.map(({ ...event }) => (
            <div className="card__menu__component">
                <ul>
                {event.articles.map(({ slug, ...article }) => (
                    <div className="card__component__wrap">
                        <li>
                            <Link key={slug} to={`/${slug}`}>
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

export default Cards;