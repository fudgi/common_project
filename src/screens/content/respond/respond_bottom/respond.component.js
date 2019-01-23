import React from 'react'

import UserBrief from '../../../common_components/user_brief'
import Fetch from '../../../service/fetch'

import phone from '../../../../img/phone-call.svg'
import marker from '../../../../img/marker.svg'

class RespondComponent extends React.Component {
    constructor(props){
        super(props);
        this.DeclineButton = this.DeclineButton.bind(this);
        this.ConfirmButton = this.ConfirmButton.bind(this);
    }
    DeclineButton(e){
        alert("Отказать");
        //отправка отказа по фетч respond_id
        // Fetch.getData(path,{respond_id:this.props.items.respond_id, state: 0})
        // .this(() => this.props.updateHandle())
        // .catch(() => alert("Ошибка удаления"))
    }

    ConfirmButton(e){
        alert("Подтвердить");
        //отправка согласия по фетч respond_id
        // Fetch.getData(path,{respond_id:this.props.items.respond_id, state: 1})
        // .this(() => this.props.updateHandle())
        // .catch(() => alert("Ошибка подтверждения"))
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
                                <img src={phone} width="15"/>
                                <a href="$" className="ml-2">{this.props.item.telephone}</a>
                            </div>
                            <div>
                                <img src={marker} width="15"/>
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