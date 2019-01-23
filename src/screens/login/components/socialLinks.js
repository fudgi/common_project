import React from 'react'

import SubtitleTextTemplate from './subtitleText'
import SVG from './svg'

function SocialLinks() {
    return(
        <React.Fragment>
            <SubtitleTextTemplate text="С ПОМОЩЬЮ"/>
            <div class = 'd-flex justify-content-center px-2 py-4'>
                <SVG nameOfSVG="../../../img/vk.svg" referenceToSite="https://vk.com/" />
                <SVG nameOfSVG="../../../img/fb.svg" referenceToSite="https://facebook.com/" />
                <SVG nameOfSVG="../../../img/gmail.svg" referenceToSite="https://gmail.com/" />
            </div>
            <hr class='mx-auto col-4' />
            <SubtitleTextTemplate text="ИЛИ ИСПОЛЬЗУЯ EMAIL"/>
        </React.Fragment>
    )
}

export default SocialLinks