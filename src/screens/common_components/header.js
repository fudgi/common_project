import React from 'react'
import twitter from '../../img/Vector.svg'
import youtube from '../../img/YouTube.svg';
import facebook from '../../img/Vector-2.svg';

function Header() {
    return (
        <header className="text-white">
            <div className="d-flex offset-sm-9 justify-content-end justify-content-sm-start align-items-center">
                <span className="mr-2 small">Подпишись!</span>
                <a href=" " className="mr-2">
                    <img src={twitter}/>
                </a>
                <a href=" " className="mr-2">
                    <img src={youtube}/>
                </a>
                <a href=" " className="mr-2">
                    <img src={facebook}/>
                </a>
            </div>
        </header>
    )
}

export default Header;