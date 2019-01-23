import React from 'react'

function SVG(props){
    return(
        <a href={props.ref} class="mx-3">
                <img src={props.img}/>
        </a>
    )
}

export default SVG;