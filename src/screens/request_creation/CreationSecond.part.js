import React from 'react'

import './request_creation.css'
import category from './img/Category.svg'
import parameters from './img/Parameters1.svg'
import dueDate from './img/DueDate0.svg'
import excalamation from './img/excalamation_mark.svg'
import ruble from '../../img/ruble_sign.svg'

class RequestCreation extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        let requestTitle = document.getElementById('request-title');
        let requestDescription = document.getElementById('request-description');
        let requestPrice = document.getElementById('request-price');
        if (requestTitle.value != '' && requestDescription.value != '' && requestPrice.value != ''){
            this.props.onTitleSelect(requestTitle.value, requestDescription.value, requestPrice.value);
        }
        else alert("Заполните все поля");
    }

    render(){
        return(
            <main className="d-flex flex-column col-12 col-md-8 my-3 mx-auto">

                <div className="d-flex justify-content-around mx-auto col-10 col-md-8 pt-5">
                    <a href="#">
                        <img src={category} width="50"/>
                    </a>
        
                    <div className="container d-flex purp-gap flex-column justify-content-center m-0 p-0">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>
        
                    <a href="#">
                        <img src={parameters} width="50"/>
                    </a>
        
                    <div className="container d-flex gap flex-column justify-content-center m-0 p-0">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>
        
                    <a href="#">
                        <img src={dueDate} width="50"/>
                    </a>
                </div>
                <div className="category-names row col-12 mx-auto flex-nowrap mt-2">
                    <a href="#" className="col-3 col-md-5 text-center">Категории</a>
                    <a href="#" className="col-6 col-md-2 text-center">Параметры</a>
                    <span className="col-3 col-md-5 text-center">Контакты и сроки</span>
                </div>


                <h5 className="category-list mt-5 ml-4">Параметры:</h5>
                <div className="d-flex flex-column сol-10 p-4 bg-white rounded shade">
                    <label for="request-title">Что?</label>
                    <input type="text" className="searchbar mb-4" id="request-title" placeholder="Платье в пол красного цвета"/>

                    <label for="request-price">Цена:</label>

                    <div>
                        <input type="number" className="searchbar" placeholder="1000" id="request-price"/>
                        <img src={ruble}/>
                    </div>

                    <label for="request-description" className="mb-2 mt-5">Описание:</label>
                    <textarea name="description" id="request-description" className="textarea mb-4 rounded p-3" rows="5" placeholder="Платье шуруповерт супер"></textarea>


                <div className="mt-2 d-flex align-items-center">
                    <img src={excalamation} width="20"/>
                    <span className="small ml-2">Не пишите в названии и описании контактную информацию - для этого есть отдельные поля на вкладке "Контакты и сроки"</span>
                </div>
                </div>
                <button className="btn purp-button mt-3 ml-md-auto px-4" onClick={this.handleChange}>Далее</button>
            </main>
        )
    }
}

export default RequestCreation