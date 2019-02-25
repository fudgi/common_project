import React from 'react'

import AboutUser from './aboutUser.component'
import Map from '../common_components/Map'
import Time from '../service/time'
import {icons} from '../../icon_paths'

class RequestAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapOpened: false
        }
        this.mapOpen = React.createRef();
        this.mapOpenerText = React.createRef();
        this.dropDownNameChange = this.dropDownNameChange.bind(this);
    }

    dropDownNameChange(e){
        e.preventDefault();
        this.setState({mapOpened: !(this.state.mapOpened)});
    }

    render() {
        let hideMap;
        let user_data;
        //На втором экране усеченный верх
        if (this.props.URLpath == "my_requests"){
            hideMap =   <a  href="" data-toggle="collapse" role="button" aria-expanded="false"
                            aria-controls="map" className='container-fluid purp-back text-center py-2'
                            onClick={this.dropDownNameChange} style={{borderBottomRightRadius: "5px", borderBottomLeftRadius: "5px"}}>
                                <span ref={this.mapOpenerText}>{!this.state.mapOpened? "Показать больше" : "Скрыть"}</span>
                                <img className="ml-2" src={icons.arrowDown} style={this.state.mapOpened?{transform: `rotate(180deg)`}:{}}/>
                        </a>

            user_data = <div className="my-3">
                            <img src={icons.marker} width="15"/>
                            <span className="text-muted ml-2">{this.props.data.request_location}</span>
                        </div>
        }
        else user_data = 
                <AboutUser  
                    username={this.props.data.username}
                    photo={this.props.data.photo}
                    phone={this.props.data.telephone}
                    location={this.props.data.request_location}
                />;

        let map;
        if(this.state.mapOpened || this.props.URLpath != "my_requests") {
            map = 
                <div ref={this.mapOpened}>
                    <legend id="map" className="d-block m-0">
                        <Map placemark={[55.7578993,37.6582756]}/>
                    </legend>
                </div>
        }
        return (
            <main className="d-flex flex-column mx-auto col-8 p-0  mt-3 rounded bg-white">
                <a href="#"  className="ml-auto mt-4 mr-4">
                    <img src={icons.properties}/>
                </a>

                <div className="mx-auto col-10">
                    <h5>{this.props.data.request_title}</h5>
                    <p className="text-muted m-0 mt-4">Описание:</p>
                    <p>{this.props.data.request_description}</p>
                    <p className="text-muted m-0 mt-4">Даты:</p>
                    <p className="font-weight-bold">{Time.format(this.props.data.request_whenDate)} - {Time.format(this.props.data.request_tillDate)}</p>
                    <p className="text-muted m-0 mt-4">Рекомендованная цена:</p>
                    <p className="font-weight-bold">{this.props.data.request_price}Р</p>
                    {user_data}
                </div>
                {map}
                {hideMap}
            </main>
        )
    }
}

export default RequestAnswer