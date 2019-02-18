import React from 'react';

import star from '../../img/star.svg';
import halfStar from '../../img/star_half.svg';

class UserBrief extends React.Component {
    render(){
        return (
            <div className="LB-side d-flex justify-content-center">
                <img src={this.props.photo} className="rounded-circle" width="50" height="50"/>
                <div className="ml-3 d-flex flex-column justify-content-center">
                    <span>{this.props.username}</span>
                    <div className="rating-bar text-center">
                        <span className="mr-2 align-middle">4,3</span>
                        <img src={star}  width="15"/>
                        <img src={star}  width="15"/>
                        <img src={star}  width="15"/>
                        <img src={star}  width="15"/>
                        <img src={halfStar}  width="15"/>
                        <span className="text-muted">(126)</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserBrief;