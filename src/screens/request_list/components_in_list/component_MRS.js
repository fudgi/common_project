import React from 'react'
import { withRouter } from 'react-router-dom'
import {icons} from '../../../icon_paths'
import Time from '../../service/time';
import UserBrief from '../../common_components/user_brief';

class RequestComponent extends React.Component {
    constructor(props){
        super(props);
        this.requestButtonClick = this.requestButtonClick.bind(this);
    }

    requestButtonClick(e) {
        let newURL = window.location.pathname + "/" + e.target.dataset.id;
        this.props.history.push(newURL);
    }

    render() {
        return (
            <article className="container-fluid bg-white shade radius p-4 mt-3">
                
                <section className="d-flex flex-column flex-sm-row justify-content-sm-between">
                    <div className="LT-side d-flex flex-column align-items-center align-items-sm-start">
                        <h5 className="text-center p-0 m-0">{this.props.data.request_title}</h5>
                        <address className="mt-1">
                            <img src={icons.marker} className="rounded-circle mr-1" style={{width:20, height: 20}} alt="marker"/>
                            <span className="text-muted">{this.props.data.request_location}</span>
                        </address>
                    </div>
                    
                    <div className="RT-side d-flex flex-column align-items-center align-items-sm-end mt-3 mt-sm-0">
                        <span className="mr-sm-0">{Time.format(this.props.data.request_whenDate)} - {Time.format(this.props.data.request_tillDate)}</span>
                        <div className="mt-1">
                            <img src={icons.logoSingle} className="rounded-circle mr-1" alt="logo" width="20" height="20"/>
                            <span className="text-muted">рекомендует: </span>
                            <span>{this.props.data.request_price}Р</span>
                        </div>
                    </div>
                </section>

                <section className="d-flex flex-column flex-sm-row justify-content-sm-between mt-4">
                    <UserBrief username={this.props.data.username} photo={this.props.data.photo}/>
                    <div className="RB d-flex align-items-center justify-content-center justify-content-sm-end mt-3 mt-sm-0">
                        <button className="btn decline-button" onClick={this.respondButtonClick} data-id={this.props.data.request_id}>
                            Посмотреть
                        </button>
                    </div>
                </section>  

            </article>
        );
    }
}

export default withRouter(RequestComponent);
