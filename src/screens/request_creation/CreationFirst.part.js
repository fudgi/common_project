import React from 'react'

import './request_creation.css'

//-----pics
import category from './img/Category.svg'
import parameters from './img/Parameters0.svg'
import dueDate from './img/DueDate0.svg'
import armchair from './img/armchair.svg'
import backpack from './img/backpack.svg'
import camera from './img/camera.svg'
import car from './img/car.svg'
import headphones from './img/headphones.svg'
import hobby from './img/hobby.svg'
import imac from './img/imac.svg'
import magician from './img/magician.svg'
import microwave from './img/microwave.svg'
//-----end of pics


class RequestCreation extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        let target = e.target;
        if(target.tagName == "A") {
            this.props.onCategorySelect(target.dataset.id, target.dataset.category);
        }
    }

    render(){
        return(
            <main className="d-flex flex-column col-12 col-md-8 my-3 mx-auto">

                <div className="d-flex justify-content-around mx-auto col-10 col-md-8 pt-5">
                    <a href="#">
                        <img src={category} width="50"/>
                    </a>

                    <div className="container d-flex gap flex-column justify-content-center m-0 p-0">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>

                    <img src={parameters} width="50"/>

                    <div className="container d-flex gap flex-column justify-content-center m-0 p-0">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>

                    <img src={dueDate} width="50"/>
                </div>

                <div className="category-names row col-12 mx-auto flex-nowrap mt-2">
                    <a href="#" className="col-3 col-md-5 text-center">Категории</a>
                    <span className="col-6 col-md-2 text-center">Параметры</span>
                    <span className="col-3 col-md-5 text-center">Контакты и сроки</span>
                </div>


                <h5 className="category-list mt-5">Выберите категорию:</h5>
                <div className="d-flex flex-column сol-10 p-4 bg-white rounded shade" id="category-selector" onClick={this.handleChange}>
                    <div className="row mx-auto category-list flex-column flex-md-row">
                        <a href="#" className="mt-3" data-id="2" data-category="transport">
                            <img src={car}/> Транспорт
                        </a>
                        <a href="#" className="mt-3" data-id="3" data-category="electronic">
                            <img src={microwave}/> Бытовая электроника
                        </a>
                        <a href="#" className="mt-3" data-id="4" data-category="audioVideo">
                            <img src={headphones}/> Аудио и видео
                        </a>
                        <a href="#" className="mt-3" data-id="5" data-category="personal">
                            <img src={backpack}/> Личные вещи
                        </a>
                        <a href="#" className="mt-3" data-id="6" data-category="hobby">
                            <img src={hobby}/> Хобби и отдых
                        </a>
                        <a href="#" className="mt-3" data-id="7" data-category="photo">
                            <img src={camera}/> Фототехника
                        </a>
                        <a href="#" className="mt-3" data-id="8" data-category="home">
                            <img src={armchair}/> Для дома и дачи
                        </a>
                        <a href="#" className="mt-3" data-id="9" data-category="computer">
                            <img src={imac}/> Товары для компьютера
                        </a>
                        <a href="#" className="mt-3" data-id="10" data-category="stuff">
                            <img src={magician}/> Разное
                        </a>
                    </div>
                    <a href="#" className="no-category mt-5 ml-md-auto p-0 p-md-2"  data-id="1" data-category="no_category">
                        Не могу определить категорию
                    </a>
                </div>
            </main>
        )
    }
}

export default RequestCreation