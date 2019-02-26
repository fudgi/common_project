import React from 'react'

function Button(props){
    return(
        <button type="submit" class="purp-button btn btn-block my-4" onClick={props.func}>
            {props.nameOfTheButton}
        </button>
    )
}

export default Button;