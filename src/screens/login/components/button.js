import React from 'react'

function Button(props){
    return(
        <button type="submit" class="purp-button btn my-4">
            {props.nameOfTheButton}
        </button>
    )
}

export default Button;