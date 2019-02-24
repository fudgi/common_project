import React from 'react'
import {icons} from '../../icon_paths'

function Header() {
    return (
        <header className="text-white">
            <div className="d-flex offset-sm-9 justify-content-end justify-content-sm-start align-items-center">
                <span className="mr-2 small">Подпишись!</span>
                <a href="https://twitter.com" className="mr-2">
                    <img src={icons.twitter_logo}/>
                </a>
                <a href="https://www.youtube.com" className="mr-2">
                    <img src={icons.youtube_logo}/>
                </a>
                <a href="https://ru-ru.facebook.com" className="mr-2">
                    <img src={icons.facebook_logo2}/>
                </a>
            </div>
        </header>
    )
}

export default Header;