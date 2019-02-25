import React from 'react'
import PositionInCreaton from './position_in_creation'
import './request_creation.css'
import {category_icons} from '../../icon_paths'


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

                <PositionInCreaton position={0} />
                
                <h5 className="category-list mt-5">Выберите категорию:</h5>
                <div className="d-flex flex-column сol-10 p-4 bg-white rounded shade" id="category-selector" onClick={this.handleChange}>
                    <div className="row mx-auto category-list flex-column flex-md-row">
                        <a href="#" className="mt-3" data-id="2" data-category="transport">
                            <img src={category_icons.car}/> Транспорт
                        </a>
                        <a href="#" className="mt-3" data-id="3" data-category="electronic">
                            <img src={category_icons.microwave}/> Бытовая электроника
                        </a>
                        <a href="#" className="mt-3" data-id="4" data-category="audioVideo">
                            <img src={category_icons.headphones}/> Аудио и видео
                        </a>
                        <a href="#" className="mt-3" data-id="5" data-category="personal">
                            <img src={category_icons.backpack}/> Личные вещи
                        </a>
                        <a href="#" className="mt-3" data-id="6" data-category="hobby">
                            <img src={category_icons.hobby}/> Хобби и отдых
                        </a>
                        <a href="#" className="mt-3" data-id="7" data-category="photo">
                            <img src={category_icons.camera}/> Фототехника
                        </a>
                        <a href="#" className="mt-3" data-id="8" data-category="home">
                            <img src={category_icons.armchair}/> Для дома и дачи
                        </a>
                        <a href="#" className="mt-3" data-id="9" data-category="computer">
                            <img src={category_icons.imac}/> Товары для компьютера
                        </a>
                        <a href="#" className="mt-3" data-id="10" data-category="stuff">
                            <img src={category_icons.magician}/> Разное
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