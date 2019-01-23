import React from 'react'

import CommentBlock from '../../../common_components/commentBlock'
import Fetch from '../../../service/fetch'
import ruble from '../../../../img/ruble_sign.svg'

class Respond_Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.cancelAnswer = this.cancelAnswer.bind(this);
    }
    
    cancelAnswer() {
        //Восстановить
        let data = {user_id:this.props.user_id, request_id:this.props.request_id};
        
        Fetch.getData('react-app-07/src/screens/content/respond/php/respondDelete.php', data)
            .then((result)=>this.props.respondingChange({responding: false}))
            .catch((error)=>alert("Ошибка удаления отклика на запрос"));
    }

    render() {
        return(
            <React.Fragment>
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
                <div className="d-flex justify-content-end offset-7 col-3 py-4 pr-0">
                    <button className="orange-button btn p-2 px-5" onClick={this.cancelAnswer}>Отказаться</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Respond_Bottom