import React from 'react'
import { withRouter } from 'react-router-dom'
import {icons} from '../../icon_paths'
import Time from '../service/time';
import UserBrief from '../common_components/user_brief';

class RequestComponent extends React.Component {
    constructor(props){
        super(props);
        this.requestButtonClick = this.requestButtonClick.bind(this);
        this.respondButtonClick = this.respondButtonClick.bind(this);
    }

    requestButtonClick(e) {
        let newURL = window.location.pathname + "/" + e.target.dataset.id;
        this.props.history.push(newURL);
    }

    respondButtonClick(e){
        let newURL = "/my_responds/" + e.target.dataset.id;
        this.props.history.push(newURL);
    }

    render() {
        let requestBottom;
        let button = {color: "btn decline-button", text: "Посмотреть", funcOnClick: this.respondButtonClick}
        switch (this.props.type) {

            case "/all_requests":
                if(this.props.data.has_respond != 1){
                    button = {color: "btn purp-button", text: "Откликнуться", funcOnClick: this.requestButtonClick};
                }
            case "/my_responds":
                requestBottom = 
                    <section className="d-flex flex-column flex-sm-row justify-content-sm-between mt-4">
                        <UserBrief username={this.props.data.username} photo={this.props.data.photo}/>
                        <div className="RB d-flex align-items-center justify-content-center justify-content-sm-end mt-3 mt-sm-0">
                            <button className={button.color} onClick={button.funcOnClick} data-id={this.props.data.request_id}>
                                {button.text}
                            </button>
                        </div>
                    </section>
                break;

            case "/my_requests":
                let buttonImage;
                if(this.props.data.answer_count > 0 && this.props.data.state != 1) buttonImage = <img src={icons.comment_alert} width="40" onClick={this.requestButtonClick} data-id={this.props.data.request_id}/>
                else buttonImage = <img src={icons.comment} width="30" onClick={this.requestButtonClick} data-id={this.props.data.request_id}/>

                let responderChoosen;
                if(this.props.data.state == 1) 
                    responderChoosen = 
                        <React.Fragment>
                            Вы уже выбрали отклик
                            <img src={icons.ok} className="ml-2" width="20"/>
                        </React.Fragment>
                else 
                    responderChoosen = 
                        <React.Fragment>
                            Количество откликнувшихся: {this.props.data.answer_count}
                        </React.Fragment>

                requestBottom = 
                    <React.Fragment>
                    <hr />
                    <section className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center mt-2 px-4">
                        <div className="LB-side text-muted d-flex justify-content-center align-items-center">
                            {responderChoosen}
                        </div>
                        <div className="RB d-flex align-items-center justify-content-center justify-content-sm-end mt-3 mt-sm-0">
                            <a href="">
                                {buttonImage}
                            </a>
                        </div>
                    </section>
                    </React.Fragment>
                break;
        }
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

                {requestBottom}

            </article>
        );
    }
}

export default withRouter(RequestComponent);
