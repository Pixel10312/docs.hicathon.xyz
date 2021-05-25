<<<<<<< Updated upstream
import * as React from "react"
import { Helmet } from "gatsby"
=======
//import lib
import React, { useState } from "react"
import { useStaticQuery, Link} from "gatsby"
import { Helmet } from "react-helmet"
>>>>>>> Stashed changes

//import components
import Logo from '../components/logo'
import Event from '../components/event'
import Timeline from '../components/timeline'
import Press from '../components/press'
import Popup from '../components/popup'

//import styles
import '../styles/styles.scss'

const IndexPage = () => {
    const [buttonPopup, setButtonPopup] = useState(true);

    return (
        <div className="page__wrapper">
            <Helmet>
                <title>hicathon docs</title>
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
                <h1>📕 Hicathon Docs</h1>
                <hr></hr><br></br>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam quam, sollicitudin sit amet est ut, dignissim venenatis nisi. Quisque semper semper risus, ac commodo odio tempor ut. Nulla commodo tempus varius. Nulla facilisi. Duis eget venenatis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros neque, commodo sit amet blandit vitae, molestie et metus. Suspendisse rhoncus sagittis lectus ut suscipit. Suspendisse ac est pulvinar, semper nunc non, porta nisl. Quisque pulvinar, velit eget imperdiet cursus, leo lacus volutpat dolor, vel sollicitudin mauris eros sed eros. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis arcu ex, sit amet efficitur augue lobortis et. Maecenas a tincidunt turpis, eget convallis felis. Sed scelerisque lobortis volutpat.

        Morbi quam ex, pretium quis felis ut, posuere consequat arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In suscipit metus sit amet mauris hendrerit finibus. Nunc at tortor ut est fermentum mollis. Duis accumsan turpis id suscipit scelerisque. Phasellus odio nunc, molestie in sodales sed, pellentesque ut lectus. Suspendisse rhoncus lacus non nulla congue dictum. Phasellus non felis gravida, laoreet metus a, tempor ligula. Sed volutpat metus vehicula lorem porttitor, quis luctus sapien vehicula. Donec quis mauris at neque blandit vulputate sed lacinia turpis. Praesent varius at elit at luctus. Aenean feugiat vel lorem vel commodo. Nulla facilisi.

        Aenean auctor tellus eros, vitae semper metus sodales non. Maecenas ultricies diam tincidunt risus blandit, ac accumsan tortor sagittis. Pellentesque ut blandit velit. Sed aliquam leo vel est tempus ornare. Integer id facilisis eros. Aliquam egestas feugiat nulla. Fusce sit amet ligula ac velit suscipit elementum. Proin pharetra cursus ultrices. Nunc sit amet feugiat sapien. Sed quis tellus mattis, pharetra tellus eu, pharetra felis. Etiam et rhoncus augue. Fusce gravida elit porta ultricies porta.

        Aliquam erat volutpat. Cras nec lectus suscipit, tincidunt augue ut, pretium felis. Nulla volutpat erat ac justo fermentum tincidunt. Praesent vel venenatis dui, et pharetra tellus. Ut placerat aliquam consectetur. Aliquam varius, ante vitae laoreet aliquam, sapien nisl pretium turpis, vitae interdum ligula leo ac tortor. Fusce iaculis dolor mi, ac scelerisque quam pellentesque id. Sed eleifend maximus consequat. In bibendum vulputate est eu varius. Nulla suscipit elit a semper fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce quis velit lorem. Donec faucibus dolor finibus dolor efficitur, sed congue nulla aliquam.

        Aliquam vel sapien a enim egestas vulputate. Pellentesque congue enim et massa vulputate pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec gravida bibendum vulputate. Nulla ipsum mauris, tincidunt ut dui ultricies, mattis pellentesque orci. Nullam non auctor dolor. Etiam varius elit id nisl aliquet, vitae lacinia mi ullamcorper. Curabitur mauris nulla, bibendum eget viverra id, convallis ut orci. Duis et est sed sem sollicitudin gravida.

        Fusce sit amet malesuada eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis ultrices nulla, lobortis laoreet tellus. Cras facilisis risus dignissim interdum placerat. Mauris in elit at orci rutrum vestibulum et a mi. Vestibulum ullamcorper ligula id libero posuere lacinia. Etiam scelerisque lacus diam, nec tincidunt nibh pharetra ac. In blandit justo fermentum nunc sagittis, sit amet molestie purus ullamcorper. Cras vitae rhoncus mi. Aliquam et dignissim turpis.

        Etiam auctor tempor mollis. Fusce tempus at magna et tempor. Cras at auctor risus. Nam eget pellentesque nibh. Mauris velit arcu, vulputate id volutpat a, vehicula at quam. Duis ullamcorper sapien at sodales tincidunt. Morbi et rutrum dolor. Curabitur eu ullamcorper mi.

        Fusce rhoncus lobortis purus, in tempor velit maximus dictum. Nam tellus leo, lacinia a ex pretium, egestas dictum nulla. Curabitur vulputate sit amet elit quis pellentesque. Aliquam non maximus erat. Proin pharetra, quam eget pulvinar maximus, massa leo posuere urna, at pretium mauris libero a ex. Integer blandit dolor neque, ac porta tellus consectetur sed. Curabitur viverra et ipsum at fermentum. Curabitur vel felis hendrerit leo malesuada sollicitudin id eu justo. Mauris quis elit nec turpis suscipit euismod at sed nibh.

        Duis nec mattis diam. Morbi dignissim tincidunt pellentesque. Fusce vestibulum maximus dolor, eu ornare mauris pharetra sed. Sed sed orci maximus, hendrerit diam ac, bibendum tortor. Suspendisse ornare, orci eget volutpat bibendum, ligula velit venenatis ligula, quis cursus dolor massa a arcu. Integer accumsan ac nisi eu iaculis. Mauris et nulla tincidunt, hendrerit massa ut, semper ipsum. Etiam ac est sit amet ligula vulputate maximus sed nec urna. Ut malesuada euismod erat, non bibendum velit efficitur in.

        Sed nec ligula sed nibh condimentum porttitor. Praesent vulputate lacinia bibendum. Pellentesque a interdum erat. Quisque gravida quis orci nec consectetur. Integer ut interdum velit. Morbi libero ipsum, interdum et vulputate in, tincidunt sit amet nisi. Pellentesque facilisis blandit lorem, ultrices tincidunt metus vestibulum viverra. Donec euismod, enim tempus vulputate auctor, dui purus tincidunt est, et convallis nulla est at metus. Donec interdum efficitur tortor sed pellentesque. Nulla imperdiet, ex in dapibus feugiat, tortor metus placerat erat, a faucibus orci ipsum vitae est. Proin sagittis tellus magna, et tincidunt orci finibus sit amet. Vestibulum justo tortor, imperdiet vel orci vitae, dignissim posuere quam. Suspendisse cursus ante sit amet ultricies ornare. Sed felis sem, vestibulum ut magna eget, porta egestas ipsum. Integer eu vestibulum enim. Curabitur elementum rhoncus nibh, porta consequat diam maximus a.</div>
                </div>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <div>Before we Continue:</div><hr></hr>
                    <div className="items">
                        <div>Please note that this website is experimental, everything is subject to change. Feedback is much appreciated, feel free to give some in <a href="https://discord.gg/TFjNVBCbdU">the Discord.</a></div>
                    </div>
                </Popup>
            </div>
    );
    
}

export default IndexPage;