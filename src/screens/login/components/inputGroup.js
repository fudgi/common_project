import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props);
    }

    focused(e){
        e.target.previousSibling.classList.remove('invisible');
    }
    
    render(){
        return(
            <div class="form-group">
                <small id={props.nameOfHelper} class="form-text text-muted invisible">
                    {props.placeholder}
                </small>
                <input type={props.name} name={props.name} aria-describedby={props.nameOfHelper} class="form-control font-weight-light" placeholder={props.placeholder}  required 
                onChange={this.props.func} onFocus={this.focused}/>
                <div class="invalid-feedback">
                    Введите {props.placeholder}
                </div>
            </div>
        )
    }
}
export default Input;