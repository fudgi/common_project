import React from 'react'
import SubtitleTextTemplate from './subtitleText'
import SVG from './svg'
import {icons} from '../../../icon_paths'

function SocialLinks() {
    return(
        <React.Fragment>
            <SubtitleTextTemplate text="С ПОМОЩЬЮ"/>
            <div class = 'd-flex justify-content-center px-2 py-3'>
                <SVG nameOfSVG={icons.vk_logo} referenceToSite="https://vk.com/" />
                <SVG nameOfSVG={icons.facebook_logo} referenceToSite="https://facebook.com/" />
                <SVG nameOfSVG={icons.gmail_logo} referenceToSite="https://gmail.com/" />
            </div>
            <hr class='mx-auto col-4' />
            <SubtitleTextTemplate text="ИЛИ ИСПОЛЬЗУЯ EMAIL"/>
        </React.Fragment>
    )
}

export default SocialLinks