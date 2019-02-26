import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props);
        this.blured = this.blured.bind(this);
        this.change = this.change.bind(this);
    }

    blured(e){
        if(e.target.value == "") e.target.previousSibling.classList.add('invisible');
    }
    change(e){
        e.target.previousSibling.classList.remove('invisible');
        this.props.func(e.target.value);
    }
    
    render(){
        return(
            <div class="form-group mt-1">
                <span id={this.props.nameOfHelper} class="form-text text-muted invisible mb-1" style={{paddingLeft:"0.7rem"}}>
                    {this.props.placeholder}
                </span>
                <input type={this.props.name} name={this.props.name} aria-describedby={this.props.nameOfHelper} class="form-control font-weight-light " placeholder={this.props.placeholder}  required 
                onChange={this.change} onBlur={this.blured}/>
                <div class="invalid-feedback">
                    Введите {this.props.placeholder}
                </div>
            </div>
        )
    }
}
export default Input;