import React from 'react'

import AboutUser from './aboutUser.component'
import Map from '../../common_components/Map'
import properties from '../../../img/properties.svg'
import downArrow from '../../../img/arrowDown.svg'
import marker from '../../../img/marker.svg'

class RequestAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.dropDownNameChange = this.dropDownNameChange.bind(this);
    }

    dropDownNameChange(e){
        e.preventDefault();
        let text = document.getElementById('dropDownText')
        let showMore = document.getElementById('showMore');
        if(showMore.classList.contains('show')) {
            text.textContent = "Показать больше";
            showMore.classList.toggle('show')
        }
        else {
            text.textContent = "Скрыть";
            showMore.classList.toggle('show');
        }
    }

    render() {
        let hideMap;
        let user_data;
        let show = 'collapse';
        //На втором экране усеченный верх
        if (this.props.screen_id == "1"){
            hideMap =   <a href="#" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="map" className='container-fluid purp-back text-center' onClick={this.dropDownNameChange}>
                            <span id="dropDownText">Показать больше</span>
                            <img className="ml-2" src={downArrow}/>
                        </a>

            user_data = <div className="my-3">
                            <img src={marker} width="15"/>
                            <span className="text-muted ml-2">{this.props.data.request_location}</span>
                        </div>
        }
        else {  user_data= <AboutUser  
                            username={this.props.data.username}
                            photo={this.props.data.photo}
                            phone={this.props.data.telephone}
                            location={this.props.data.request_location}/>
                show = 'collapse show';}
        return (
            <main className="d-flex flex-column mx-auto col-8 p-0  mt-3 rounded bg-white">
                <a href="#"  className="ml-auto mt-4 mr-4">
                    <img src={properties}/>
                </a>

                <div className="mx-auto col-10">
                    <h5>{this.props.data.request_title}</h5>
                    <p className="text-muted m-0 mt-4">Описание:</p>
                    <p>{this.props.data.request_description}</p>
                    <p className="text-muted m-0 mt-4">Даты:</p>
                    <p className="font-weight-bold">{this.props.data.request_whenDate} - {this.props.data.request_tillDate}</p>
                    <p className="text-muted m-0 mt-4">Рекомендованная цена:</p>
                    <p className="font-weight-bold">{this.props.data.request_price}Р</p>
                    {user_data}
                </div>
                <div class={show} id="showMore">
                    <legend id="map" className="d-block m-0">
                        <Map placemark={[55.7578993,37.6582756]}/>
                    </legend>
                </div>
                {hideMap}
            </main>
        )
    }
}

export default RequestAnswer