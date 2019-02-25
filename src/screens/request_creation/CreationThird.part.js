import React from 'react'
import PositionInCreaton from './position_in_creation'
import $ from'jquery'
import 'bootstrap-datepicker'
import './custom-datepicker.css'
import './request_creation.css'
import {category_icons} from '../../icon_paths'

class RequestCreation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            whenButtonId: "",
            tillButtonId: "",
            location: ""
        }
        this.whenDateSelected = React.createRef();
        this.tillDateSelected = React.createRef();
        this.location = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.whenChoose = this.whenChoose.bind(this);
        this.tillChoose = this.tillChoose.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        if (this.state.whenButtonId != "" && this.state.tillButtonId != "" && this.location.current.value != "") {
            let whenDate=new Date();
            let tillDate=new Date();
            let nowDate = new Date();
            nowDate.setHours(0,0,0,0)

            // get whenDate
            switch(this.state.whenButtonId){
                case "0":
                    whenDate = new Date();
                    break;
                case "1":
                    whenDate.setDate(new Date().getDate() + 1);
                    break;
                case "2":
                    let selectedDate = this.whenDateSelected.current.value;
                    if(selectedDate == ""){
                        alert("Выберите даты");
                        return;
                    }
                    let array = selectedDate.split("/");
                    whenDate = new Date(array[2],array[1]-1,array[0]);

                    if(whenDate < nowDate) {
                        alert ("Установлена дата раньше текущей");
                        return;
                    }
                    break;
            }

            switch(this.state.tillButtonId){
                case "0":
                    tillDate.setDate(whenDate.getDate() + 1);
                    break;
                case "1":
                    tillDate.setDate(whenDate.getDate() + 7);
                    break;
                case "2":
                    let selectedDate = this.tillDateSelected.current.value;
                    if(selectedDate == ""){
                        alert("Выберите даты");
                        return;
                    }
                    let array = selectedDate.split("/");
                    tillDate = new Date(array[2],array[1]-1,array[0]);

                    if(tillDate <= whenDate){
                        alert("Установлены противоречивые даты");
                        return;
                    }
                    break;
            }
            tillDate = tillDate.getFullYear() + "-" + (tillDate.getMonth()+1) + "-" + tillDate.getDate() + " 00:00:00";
            whenDate = whenDate.getFullYear() + "-" + (whenDate.getMonth()+1) + "-" + whenDate.getDate() + " 00:00:00";
            
            this.props.onDateSelect(whenDate, tillDate, this.location.current.value);
        }

        else alert("Заполните все поля");
    }
    
    whenChoose(e) {
        let target = e.target;
        if (target.tagName == "BUTTON") {
            this.setState({whenButtonId: target.dataset.id})
        }
    }

    tillChoose(e) {
        let target = e.target;
        if (target.tagName == "BUTTON") {
            this.setState({tillButtonId: target.dataset.id})
        }
    }

    render(){
        let whenDatePicker, tillDatePicker;
        let whenButtonSelected = ["","",""];
        whenButtonSelected[this.state.whenButtonId] = 'selected-menu';

        let tillButtonSelected = ["","",""];
        tillButtonSelected[this.state.tillButtonId] = 'selected-menu';
        
        if(this.state.whenButtonId == "2"){
            whenDatePicker = 
                <div className="date input-hollow col-3 ml-3 d-flex justify-content-center px-2" data-provide="datepicker" data-date-format="dd/mm/yyyy">
                    <input type="text" className="col-9 text-center" ref={this.whenDateSelected}/>
                    <img src={category_icons.calendar}/>
                    <span className="input-group-addon"></span>
                </div>
        }
        if(this.state.tillButtonId == "2"){
            tillDatePicker = 
                <div className="date input-hollow col-3 ml-3 d-flex justify-content-center px-2" data-provide="datepicker" data-date-format="dd/mm/yyyy">
                    <input type="text" className="col-9 text-center" ref={this.tillDateSelected}/>
                    <img src={category_icons.calendar}/>
                    <span className="input-group-addon"></span>
                </div>
        }

        return(
            <main className="d-flex flex-column col-12 col-md-8 my-3 mx-auto">

                <PositionInCreaton position={2} />

                <h5 className="category-list mt-5 ml-4">Контакты и сроки:</h5>
                <div className="d-flex flex-column сol-10 px-4 pt-3 pb-5 bg-white rounded shade">
                    <p>Когда?</p>
                    <div className="d-flex mb-5" id="whenDateGroup" onClick={this.whenChoose}>
                        <button className={"btn hollow col-2 " + (whenButtonSelected[0])} data-id="0">Сегодня</button>
                        <button className={"btn hollow col-2 ml-3 " + (whenButtonSelected[1])} data-id="1">Завтра</button>
                        <button className={"btn hollow col-3 ml-3 " + (whenButtonSelected[2])} data-id="2">Указать дату</button>
                        {whenDatePicker}
                    </div>

                    <p>На сколько?</p>
                    <div className="d-flex mb-5" id="tillDateGroup" onClick={this.tillChoose}>
                        <button className={"btn hollow col-2 " + (tillButtonSelected[0])} data-id="0">На день</button>
                        <button className={"btn hollow col-2 ml-3 " + (tillButtonSelected[1])} data-id="1">На неделю</button>
                        <button className={"btn hollow col-3 ml-3 " + (tillButtonSelected[2])} data-id="2">Указать дату</button>
                        {tillDatePicker}
                    </div>

                    <p>Где?</p>
                    <input type="text" className="searchbar" id="location" placeholder="Укажите адрес" ref={this.location}/>
                </div>
                <button className="btn purp-button mt-3 ml-md-auto px-4" onClick={this.handleChange}>Разместить</button>
            </main>
        )
    }
}

export default RequestCreation