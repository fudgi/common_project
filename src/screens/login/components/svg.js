import React from 'react'

function SVG(props){
    return(
        <a href={props.referenceToSite} class="mx-3">
                <img src={props.nameOfSVG}/>
        </a>
    )
}

export default SVG;