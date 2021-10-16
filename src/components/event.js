//import lib
import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

//import styles
import '../styles/styles.scss'

const pageQuery = graphql`
    {
        gcms {
            events(orderBy: eventId_DESC) {
                eventName
                articles {
                    name
                    slug
                }
            }
        }
    }
`


const Event = () => {
    const {
        gcms: { events },
    } = useStaticQuery(pageQuery);

    return (
        events.map(({ ...event }) => (
            <div className="page__menu__component">
                {events.eventName}
                <ul>
                {event.articles.map(({ slug, ...article }) => (
                    <div className="page__component__wrap">
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

export default Event;