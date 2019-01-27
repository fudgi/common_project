import React from 'react'

function BottomPart (props) {
    return(
        <div class="text-center text-wrap py-4">
            {props.LeftSideText}
            <a href={props.href} id={props.id} class="ml-2" onClick={this.props.func}>{props.refText}</a>
        </div>
    )
}

export default BottomPart