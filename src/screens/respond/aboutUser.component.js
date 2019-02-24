import React from 'react'

import UserBrief from '../common_components/user_brief'
import {icons} from '../../icon_paths'

class AboutUser extends React.Component{
    render(){
        return (
            <div className="d-flex flex-column flex-md-row justify-content-md-between my-4">
                <UserBrief username={this.props.username} photo={this.props.photo}/>
                <div className="R-side d-flex flex-column align-content">
                    <div className="mx-auto">
                        <img src={icons.phone_call} width="15" alt="phone number"/>
                        <a href="" className="ml-2">{this.props.phone}</a>
                    </div>
                    <div className="mx-auto">
                        <img src={icons.marker} width="15" alt="placemarker"/>
                        <span className="text-muted ml-2">{this.props.location}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUser