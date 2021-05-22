import * as React from "react"
import { Helmet } from "gatsby"

// styles
import '../styles/styles.scss'
import '../styles/construction.scss'


const IndexPage = () => (
  <div className="page__wrapper">
    <Helmet>
      <title>hicathon docs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Helmet>
    <div className="page__content">
      <div className="content__construction">
        <p>🛠️ This website is currently under construction.</p>
      </div>
    </div>
  </div>
)

export default IndexPage
