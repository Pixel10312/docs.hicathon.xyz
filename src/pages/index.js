//import lib
import React, { useEffect, useState } from "react"
import { useStaticQuery, Link} from "gatsby"
import { Helmet } from "react-helmet"

//import components
import Logo from '../components/logo'
import Event from '../components/event'
import Cards from '../components/cards'

//import styles
import '../styles/styles.scss'

const IndexPage = () => {
    const [active, setActive] = useState(true)

    useEffect(() => {
        if (window.outerWidth < 1025) {
            setActive(false)
        }
    }, [])

    return (
        <div className="page__wrapper">
            <Helmet>
                <title>hicathon docs</title>
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
                <h1>📕 Hicathon Docs</h1>
                <hr></hr><br></br>
                <div>At the intersection of crypto, art, and technology, Hic Et Nunc (HEN), the first Tezos-based NFT marketplace, has undoubtedly left an indelible mark on the metaverse as a bohemian and decentralised movement.

While yet in its nascent stage, 150 volunteers from 77 countries banded together to be a part of the first hackathon, or “hicathon”, from May 22nd to 23rd in a purely community-led and volunteer-driven manner to support and accelerate the platform’s development further. Afterwards, 7 teams met again during September 2021 to transform their prototypes into functioning products ready to be implemented or to be used. 

The following is a comprehensive summary of the journey done by the Working Groups (WG) during the hicathon, from May to September 2021, and provides a succinct understanding of the core issues they tackled, their journey, and their accomplishments:
            </div>
                <Cards />
                </div>
            </div>
    );
    
}

export default IndexPage;
