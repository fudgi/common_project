import React from 'react'

import Fetch from '../../../service/fetch'
import ruble from '../../../../img/ruble_sign.svg'
import crop from '../../../../img/crop_original.svg'

class Respond_Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.getBackOnRequestList = this.getBackOnRequestList.bind(this);
        this.saveAnswer = this.saveAnswer.bind(this);
    }
    
    getBackOnRequestList(e){
        e.preventDefault();
        this.props.respondingChange({responding:false});
    }
    
    saveAnswer() {
        let price = document.getElementById('answer_price');
        let description = document.getElementById('answer_description');
        let data = {responder_id:this.props.user_id, request_id:this.props.request_id, price: price.value, description:description.value};
        
        Fetch.getData("react-app-07/src/screens/content/respond/php/myAnswerSave.php", data)
            .then((result)=>{
                this.props.respondingChange({screen_id:'2'}); //возвращает request_id записи
            })
            // .catch((error)=>alert("Ошибка записи отклика на запрос"));
        
    }

    render() {
        return(
            <React.Fragment>
                <main className="d-flex flex-column mx-auto col-8 p-0  rounded bg-white">
                    <form className="d-flex flex-column col-12 p-5">
                        <span className="mb-2">Цена:</span>
                        <div className="mb-4">
                            <input type="number" className="searchbar" placeholder="1000" id="answer_price"/>
                            <img src={ruble}/>
                        </div>

                        <span className="mb-2">Описание:</span>
                        <textarea name="description" id="answer_description" className="textarea mb-4 rounded p-3" rows="5" placeholder="Платье шуруповерт супер"></textarea>

                        <span className="mb-2">Фото:</span>
                        <div className="drag d-flex flex-column align-items-center justify-content-center rounded">
                            <p className="text-muted mb-3">Добавить фотографии</p>
                            <img src={crop}/>
                        </div>
                    </form>
                </main>

                <div className="d-flex justify-content-end offset-7 col-3 py-4 pr-0">
                    <a href="#" className="my-auto mr-4 refs" onClick={this.getBackOnRequestList}>Отменить</a>
                    <button className="purp-button btn p-2 px-5" onClick={this.saveAnswer}>Откликнуться</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Respond_Bottom