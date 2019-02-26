import React from 'react'

function BottomPart (props) {
    return(
        <div class="text-center text-wrap py-3">
            {props.leftSideText}
            <a href={props.href} id={props.id} class="ml-2" onClick={props.func}>{props.refText}</a>
        </div>
    )
}

export default BottomPart