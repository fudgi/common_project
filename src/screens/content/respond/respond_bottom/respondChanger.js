import React from 'react'

import CommentBlock from '../../../common_components/commentBlock'
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
        this.props.respondingChange({responding:false});
    }

    cancelAnswer() {
        //Восстановить
        let data = {user_id:this.props.user_id, request_id:this.props.request_id};
        
        Fetch.getData('react-app-07/src/screens/content/respond/php/respondDelete.php', data)
            .then((result)=>this.props.respondingChange({responding: false}))
            .catch((error)=>alert("Ошибка удаления отклика на запрос"));
    }

    render() {
        let content;
        if(this.props.items.state == 0){
            content =   <div className="d-flex flex-column mt-4 mx-auto col-8">
                            <h5 className='mx-auto'>Пользователь отклонил ваше предложение :(</h5>
                            <button className="mt-2 purp-button btn p-2 px-5" onClick={this.getBackOnRequestList}>К списку запросов</button>
                        </div>
        }
        else {
            let message=<div></div>;
            if(this.props.items.state==1) message = "Пользователь принял ваше предложение";
            content =   <React.Fragment>
                            <h5 className="mt-4 mx-auto col-8">
                                {message}
                            </h5>
                            <main className="d-flex flex-column mx-auto col-8 p-2  mt-3 rounded bg-white">
                                <form className="d-flex flex-column col-12 p-5">
                                    <h4>Ваше предложение: </h4>
                                    <span className="my-2 text-muted">Цена:</span>
                                    <div className="mb-4 d-flex">
                                        <h3>{this.props.items.price}</h3>
                                        <img src={ruble}/>
                                    </div>
                                    
                                    <span className="mb-2 text-muted">Описание:</span>
                                    <p>{this.props.items.respond_text}</p>

                                    <span className="mb-2 text-muted">Фото:</span>
                                    <CommentBlock />

                                </form>
                            </main>
                            <div className="d-flex justify-content-center justify-content-md-end  mx-auto col-8 py-4 pr-0">
                                <button className="orange-button btn p-2 px-5" onClick={this.cancelAnswer}>Отказаться</button>
                            </div>
                        </React.Fragment>
        }
        return <React.Fragment>{content}</React.Fragment>;
    }
}

export default Respond_Bottom