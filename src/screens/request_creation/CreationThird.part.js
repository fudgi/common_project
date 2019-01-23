import React from 'react'

import $ from'jquery'
import 'bootstrap-datepicker'
import './custom-datepicker.css'
import './request_creation.css'
import category from './img/Category.svg'
import parameters from './img/Parameters1.svg'
import dueDate from './img/DueDate1.svg'
import calendar from './img/calendar.svg'

class RequestCreation extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        let firstSelection = document.querySelector("#whenDateGroup .selected-menu");
        let secondSelection = document.querySelector("#tillDateGroup .selected-menu");
        let location = document.getElementById('location');
        if (firstSelection && secondSelection && (location.value != '')) {
            let whenDate=new Date();
            let tillDate=new Date();
            let nowDate = new Date();
            nowDate.setHours(0,0,0,0)

            // get whenDate
            if(firstSelection.dataset.id != "2") {
                if(firstSelection.dataset.id == "0") whenDate = new Date();
                else whenDate.setDate(new Date().getDate() + 1);
            }
            else {
                let selectedDate = document.querySelector("#whenDateGroup div input").value;
                let array = selectedDate.split("/");
                whenDate = new Date(array[2],array[1]-1,array[0]);

                if(whenDate < nowDate) {
                    alert ("Установлена дата раньше текущей");
                    return;
                }
            }
            //get tillDate
            if(secondSelection.dataset.id != "2") {
                if(secondSelection.dataset.id == "0") tillDate.setDate(whenDate.getDate() + 1);
                else tillDate.setDate(whenDate.getDate() + 7);
            }
            else {
                let selectedDate = document.querySelector("#tillDateGroup div input").value;
                let array = selectedDate.split("/");
                tillDate = new Date(array[2],array[1]-1,array[0]);

                if(tillDate <= whenDate){
                    alert("Установлены противоречивые даты");
                    return;
                }
            }
            tillDate = tillDate.getFullYear() + "-" + (tillDate.getMonth()+1) + "-" + tillDate.getDate() + " 00:00:00";
            whenDate = whenDate.getFullYear() + "-" + (whenDate.getMonth()+1) + "-" + whenDate.getDate() + " 00:00:00";
            
            this.props.onDateSelect(whenDate, tillDate, location.value);
            
            // tillDate = tillDate.getDate() + "-" + (tillDate.getMonth()+1) + "-" + tillDate.getFullYear();
            // whenDate = whenDate.getDate() + "-" + (whenDate.getMonth()+1) + "-" + whenDate.getFullYear();
        }

        else alert("Заполните все поля");
    }
    
    whenChoose(e) {
        let target = e.target;
        if (target.tagName == "BUTTON") {
            let prevButton = target.parentNode.querySelector('.selected-menu');
            if(prevButton) {
                prevButton.classList.toggle('selected-menu');
                if(prevButton.id == "whenDateSelectBtn") {
                    document.querySelectorAll(".date")[0].classList.toggle('invisible');
                }
            }
            target.classList.toggle('selected-menu')
            if(target.id == "whenDateSelectBtn") {
                document.querySelectorAll(".date")[0].classList.toggle('invisible');
            }
        }
    }

    tillChoose(e) {
        let target = e.target;
            if (target.tagName == "BUTTON") {
                let prevButton = target.parentNode.querySelector('.selected-menu');
                if(prevButton) {
                    prevButton.classList.toggle('selected-menu');
                    if(prevButton.id == "tillDateSelectBtn") {
                        document.querySelectorAll(".date")[1].classList.toggle('invisible');
                    }
                }
                target.classList.toggle('selected-menu')
                if(target.id == "tillDateSelectBtn") {
                    document.querySelectorAll(".date")[1].classList.toggle('invisible');
                }
        }
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

                    <div className="container d-flex purp-gap flex-column justify-content-center m-0 p-0">
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
                    <a href="#"  className="col-3 col-md-5 text-center">Контакты и сроки</a>
                </div>

                <h5 className="category-list mt-5 ml-4">Контакты и сроки:</h5>
                <div className="d-flex flex-column сol-10 px-4 pt-3 pb-5 bg-white rounded shade">
                    <p>Когда?</p>
                    <div className="d-flex mb-5" id="whenDateGroup" onClick={this.whenChoose}>
                        <button className="btn hollow col-2" data-id="0">Сегодня</button>
                        <button className="btn hollow col-2 ml-3" data-id="1">Завтра</button>
                        <button className="btn hollow col-3 ml-3" data-id="2" id="whenDateSelectBtn">Указать дату</button>
                        <div className="date input-hollow col-3 ml-3 d-flex justify-content-center px-2 invisible" data-provide="datepicker" data-date-format="dd/mm/yyyy">
                                <input type="text" className="col-9 text-center"/>
                                <img src={calendar}/>
                                <span className="input-group-addon"></span>
                        </div>
                    </div>

                    <p>На сколько?</p>
                    <div className="d-flex mb-5" id="tillDateGroup" onClick={this.tillChoose}>
                        <button className="btn hollow col-2" data-id="0">На день</button>
                        <button className="btn hollow col-2 ml-3" data-id="1">На неделю</button>
                        <button className="btn hollow col-3 ml-3" data-id="2" id="tillDateSelectBtn">Указать дату</button>
                        <div className="date input-hollow col-3 ml-3 d-flex justify-content-center px-2 invisible" data-provide="datepicker" data-date-format="dd/mm/yyyy">
                                <input type="text" className="col-9 text-center"/>
                                <img src={calendar}/>
                                <span className="input-group-addon"></span>
                        </div>
                    </div>

                    <p>Где?</p>
                    <input type="text" className="searchbar" id="location" placeholder="Укажите адрес"/>
                </div>
                <button className="btn purp-button mt-3 ml-md-auto px-4" onClick={this.handleChange}>Разместить</button>
            </main>
        )
    }
}

export default RequestCreation