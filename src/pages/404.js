import * as React from "react"
import { Helmet } from "react-helmet"

import '../styles/styles.scss'
import '../styles/404.scss'

const NotFoundPage = () => (
  <div className="page__wrapper">
    <Helmet>
      <title>hicathon docs | 404</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Helmet>
    <div className="page__content">
      <div className="content__404">
        <p alt="404 page, an error occured">❌ An error occurred.</p>
      </div>
    </div>
  </div>
)

export default NotFoundPage
