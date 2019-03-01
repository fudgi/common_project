import React from 'react'

import UserBrief from '../../common_components/user_brief'
import Fetch from '../../service/fetch'
import {icons} from '../../../icon_paths'

class RespondComponent extends React.Component {
    constructor(props){
        super(props);
        this.DeclineButton = this.DeclineButton.bind(this);
        this.ConfirmButton = this.ConfirmButton.bind(this);
    }
    DeclineButton(e){
        Fetch.getData('/react-app-07/src/php/respond/answerToMeDecline.php',
        {respond_id:this.props.item.id, request_id: this.props.item.request_id})
        .then(() => this.props.updateComponentHandle())
        .catch((error) => error(this))
    }

    ConfirmButton(e){
        Fetch.getData('/react-app-07/src/php/respond/answerToMeApprove.php',
        {respond_id:this.props.item.id,  request_id: this.props.item.request_id})
        .then(() => this.props.updateComponentHandle())
        .catch((error) => error(this))
    }

    render(){
        let buttonBlock;
        if(this.props.type == "0"){
            buttonBlock = (
                <button className="btn p-2 px-5 mr-3 decline-button" onClick={this.DeclineButton}>Отказать</button>
            )
        }
        else buttonBlock = (
            <React.Fragment>
                <button className="btn p-2 px-5 mr-3 decline-button" onClick={this.DeclineButton}>Отказать</button>
                <button className="btn p-2 px-5 purp-button " onClick={this.ConfirmButton}>Выбрать</button>
            </React.Fragment>
            )
        return(
            <main className="d-flex flex-column mx-auto col-8 p-2  mt-3 rounded bg-white shade">
                <div className="mx-auto col-10">

                    <div className="d-flex flex-sm-row justify-content-between my-4">
                        <UserBrief username={this.props.item.username} photo={this.props.item.photo}/>
                        <div className="R-side d-flex flex-column justify-content-between">
                            <div>
                                <img src={icons.phone_call} width="15"/>
                                <a href="$" className="ml-2">{this.props.item.telephone}</a>
                            </div>
                            <div>
                                <img src={icons.marker} width="15"/>
                                <span className="text-muted ml-2">{this.props.item.location}</span>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <p className="text-muted m-0 mt-4">Цена:</p>
                    <h4>{this.props.item.price} Р</h4>
                    <p className="text-muted m-0 mt-4">Описание:</p>
                    <p>{this.props.item.respond_text}</p>
                </div>
                <div className="d-flex justify-content-end pb-2 pr-5" data-id={this.props.item.respond_id}>
                {buttonBlock}
                </div>
            </main>
        )
    }
}

export default RespondComponent;