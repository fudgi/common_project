import React from 'react'

function Input(props) {
    return(
    <div class="form-group">
        <small id={props.nameOfHelper} class="form-text text-muted invisible">
            {props.placeholder}
        </small>
        <input type={props.name} name={props.name} aria-describedby={props.nameOfHelper} class="form-control font-weight-light" placeholder={props.placeholder} required/>
        <div class="invalid-feedback">
            Введите {props.placeholder}
        </div>
    </div>
    )
}
export default Input;