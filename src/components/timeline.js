//import lib
import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

//import styles
import '../styles/styles.scss'

const pageQuery = graphql`
    {
        gcms {
            timelines {
                timelineName
                articles {
                    name
                    slug
                }
            }
        }
    }
`


const Timeline = () => {
    const {
        gcms: { timelines },
    } = useStaticQuery(pageQuery);

    return (
        timelines.map(({ ...timeline }) => (
            <div className="page__menu__component">
                {timeline.timelineName}
                <ul>
                {timeline.articles.map(({ slug, ...article }) => (
                    <div>
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

export default Timeline;