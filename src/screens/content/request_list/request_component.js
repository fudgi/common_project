import React from 'react'

import logo from '../../../img/logoSingle.svg';
import marker from '../../../img/marker.svg';

import UserBrief from '../../common_components/user_brief';

class RequestComponent extends React.Component {
    constructor(props){
        super(props);
        this.requestButtonClick = this.requestButtonClick.bind(this);
        }

    requestButtonClick(e) {
        this.props.respondingChange({responding:true, request_id: e.target.dataset.id});
    }

    render() {
        // let whenDate = this.props.data.request_whenDate;
        // let tillDate = this.props.data.request_tillDate;
        // tillDate = tillDate.getDate() + "/" + (tillDate.getMonth()+1) + "/" + tillDate.getFullYear();

        let RequesterRatingBar = <UserBrief username={this.props.data.username} photo={this.props.data.photo}/>
        this.button = {};
        switch (this.props.type) {
            case "0":
                this.button = {color: "btn purp-button", text: "Откликнуться"};
                break;
            case "1":
                this.button = {color: "btn orange-button", text: "Просмотреть"};
                RequesterRatingBar=<div></div>
                break;
            case "2":
                this.button = {color: "btn decline-button", text: "Посмотреть"};
                break;
        }
        return (
            <div className="container-fluid rounded bg-white shade p-4 mt-3">
                
                <div className="d-flex flex-column flex-sm-row justify-content-sm-between">
                    <div className="LT-side d-flex flex-column align-items-center align-items-sm-start">
                        <h5 className="text-center">{this.props.data.request_title}</h5>
                        <div className="">
                            <img src={marker} className="rounded-circle" style={{width:20, height: 20}} alt="marker"/>
                            <span className="text-muted">{this.props.data.request_location}</span>
                        </div>
                    </div>
                    <div className="RT-side d-flex flex-column align-items-center align-items-sm-end mt-3 mt-sm-0">
                        <span className="mr-sm-0">{this.props.data.request_whenDate} - {this.props.data.request_tillDate}</span>
                        <div className="">
                            <img src={logo} className="rounded-circle" alt="logo" width="20" height="20"/>
                            <span className="text-muted">рекомендует: </span>
                            <span>{this.props.data.request_price}Р</span>
                        </div>
                    </div>
                </div>
            
                <div className="d-flex flex-column flex-sm-row justify-content-sm-between mt-4">
                    {RequesterRatingBar}
                    <div className="RB d-flex align-items-center justify-content-center justify-content-sm-end mt-3 mt-sm-0">
                        <button className={this.button.color} onClick={this.requestButtonClick} data-id={this.props.data.request_id}>{this.button.text}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestComponent;
