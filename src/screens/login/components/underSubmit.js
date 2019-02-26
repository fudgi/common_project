import React from 'react'

class UnderSubmit extends React.Component{
    render() {
        return(
            <div class="d-flex justify-content-center justify-content-lg-between flex-wrap my-3">
                <div class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="exampleCheck1"/>
                    <label class="custom-control-label" for="exampleCheck1">Запомнить меня</label>
                </div>
                <a href="" id="refForgetPassword" class="ml-2" onClick={this.props.func}>Забыли пароль?</a>
            </div>
        )
    }
}

export default UnderSubmit;