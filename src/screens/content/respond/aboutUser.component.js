import React from 'react'

import UserBrief from '../../common_components/user_brief'
import phone from '../../../img/phone-call.svg'
import marker from '../../../img/marker.svg'

class AboutUser extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="d-flex flex-sm-row justify-content-between my-4">
                <UserBrief username={this.props.username} photo={this.props.photo}/>
                <div className="R-side d-flex flex-column justify-content-between">
                    <div>
                        <img src={phone} width="15" alt="phone number"/>
                        <a href="$" className="ml-2">{this.props.phone}</a>
                    </div>
                    <div>
                        <img src={marker} width="15" alt="placemarker"/>
                        <span className="text-muted ml-2">{this.props.location}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUser