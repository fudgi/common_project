import React from 'react'
import { withRouter } from 'react-router-dom'

import CommentBlock from '../../../common_components/commentBlock'
import Gallery from '../../../common_components/gallery'
import Fetch from '../../../service/fetch'
import ruble from '../../../../img/ruble_sign.svg'

class Respond_Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.cancelAnswer = this.cancelAnswer.bind(this);
        this.getBackOnRequestList = this.getBackOnRequestList.bind(this);
    }
    
    getBackOnRequestList(e){
        e.preventDefault();
        this.props.history.push("/my_responds");
    }

    cancelAnswer() {
        //Восстановить
        let data = {user_id:this.props.user_id, request_id:this.props.request_id, respond_id: this.props.items[0].id};
        
        Fetch.getData('http://localhost:3000/react-app-07/src/screens/content/respond/php/respondDelete.php', data)
            .then(()=>this.props.history.push("/my_responds"))
            .catch(()=>alert("Ошибка удаления отклика на запрос"));
    }

    render() {
        let content, thumbs;
        if(this.props.items[1] != undefined){
            let arrayOfImageURL = this.props.items[1].map(item => item.imageURL);
            thumbs = 
                <React.Fragment>
                    <span className="mb-2 text-muted">Фото:</span>
                    <Gallery images={arrayOfImageURL} />
                </React.Fragment>
        }
        if(this.props.items[0].state == 0){
            content =   
                <section className="d-flex flex-column mx-auto align-items-center mt-4 col-8">
                    <h5>Пользователь отклонил ваше предложение :(</h5>
                    <button className="mt-2 purp-button btn col-6 p-2 px-5" onClick={this.getBackOnRequestList}>К списку запросов</button>
                </section>
        }
        else {
            let message;
            if(this.props.items[0].state==1) message = "Пользователь принял ваше предложение";
            
            content =   
                <React.Fragment>
                    <h5 className="mt-4 mx-auto col-8">
                        {message}
                    </h5>
                    <section className="mx-auto col-8 p-2  mt-3 rounded bg-white">
                        <form className="d-flex flex-column col-12 p-5">
                            <h4>Ваше предложение: </h4>
                            <div className="row">
                                <div className="d-flex flex-column col-6">
                                    <span className="my-2 text-muted">Цена:</span>
                                    <div className="mb-4 d-flex">
                                        <h3>{this.props.items[0].price}</h3>
                                        <img src={ruble}/>
                                    </div>
                                </div>

                                <div className="d-flex flex-column col-6">
                                    {thumbs}
                                </div>
                            </div>
                            
                            <span className="mb-2 text-muted">Описание:</span>
                            <p>{this.props.items[0].respond_text}</p>

                            <CommentBlock />

                        </form>
                    </section>
                    <aside className="d-flex justify-content-center justify-content-md-end  mx-auto col-8 py-4 pr-0">
                        <button className="orange-button btn p-2 px-5" onClick={this.cancelAnswer}>Отказаться</button>
                    </aside>
                </React.Fragment>
        }
        return <React.Fragment>{content}</React.Fragment>;
    }
}

export default withRouter(Respond_Bottom)