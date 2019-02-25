import React from 'react'
import PositionInCreaton from './position_in_creation'
import './request_creation.css'
import {icons, category_icons} from '../../icon_paths'

class RequestCreation extends React.Component{
    constructor(props) {
        super(props);
        this.refTitle = React.createRef();
        this.refDescription = React.createRef();
        this.refPrice = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        let title = this.refTitle.current.value;
        let price = this.refPrice.current.value;
        let description = this.refDescription.current.value;
        if (title!='' && price!='' && description!=''){
            this.props.onTitleSelect(title, description, price);
        }
        else alert("Заполните все поля");
    }

    render(){
        return(
            <main className="d-flex flex-column col-12 col-md-8 my-3 mx-auto">

                <PositionInCreaton position={1} />

                <h5 className="category-list mt-5 ml-4">Параметры:</h5>
                <div className="d-flex flex-column сol-10 p-4 bg-white rounded shade">
                    <label htmlFor="request-title">Что?</label>
                    <input type="text" className="searchbar mb-4" placeholder="Платье в пол красного цвета" ref={this.refTitle}/>

                    <label htmlFor="request-price">Цена:</label>

                    <div>
                        <input type="number" className="searchbar" placeholder="1000" ref={this.refPrice}/>
                        <img src={icons.ruble}/>
                    </div>

                    <label htmlFor="request-description" className="mb-2 mt-5">Описание:</label>
                    <textarea name="description" className="textarea mb-4 rounded p-3" rows="5" placeholder="Платье шуруповерт супер" ref={this.refDescription}></textarea>


                <div className="mt-2 d-flex align-items-center">
                    <img src={category_icons.excalamation_mark} width="20"/>
                    <span className="small ml-2">Не пишите в названии и описании контактную информацию - для этого есть отдельные поля на вкладке "Контакты и сроки"</span>
                </div>
                </div>
                <button className="btn purp-button mt-3 ml-md-auto px-4" onClick={this.handleChange}>Далее</button>
            </main>
        )
    }
}

export default RequestCreation