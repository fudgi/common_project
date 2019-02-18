import React from 'react'

import CreationFirstScreen from './CreationFirst.part'
import CreationSecondScreen from './CreationSecond.part'
import CreationThirdScreen from './CreationThird.part'

import Fetch from '../service/fetch'
 
class RequestCreationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.HandleCategorySelect = this.HandleCategorySelect.bind(this);
        this.HandleCategoryTitle = this.HandleCategoryTitle.bind(this);
        this.HandleCategoryDate = this.HandleCategoryDate.bind(this);
        this.state = {
            screen_position: 0,
            user_name: "Миша Смирнов",
            user_location: "Казань"
        };

        this.request= {
            user_id: this.props.user_id,
            category_id: 0,
            category_name: false,
            title: false,
            price: false,
            description: false,
            whenDate: false,
            tillDate: false,
            location: false
        }
    }

    HandleCategorySelect(id, name) {
        this.setState({screen_position: 1});
        this.request.category_id = id;
        this.request.category_name = name;
    }

    HandleCategoryTitle(category_title, category_description, category_price) {
        this.setState({screen_position: 2});
        this.request.title= category_title;
        this.request.price = category_price;
        this.request.description=category_description;
    }

    HandleCategoryDate(category_whenDate, category_tillDate, category_location){
        this.request.whenDate = category_whenDate;
        this.request.tillDate = category_tillDate;
        this.request.location = category_location;
        Fetch.getData("react-app-07/src/screens/request_creation/php/request_creation.php", this.request)
        .then(() => this.props.history.push('/all_requests'))
        .catch(()=> alert("Ошибка создания запроса"))
        
    }

    render() {
        let content;
        switch(this.state.screen_position){
            case 0: 
                content = <CreationFirstScreen onCategorySelect = {this.HandleCategorySelect}/>
                break;
            case 1:
                content = <CreationSecondScreen onTitleSelect = {this.HandleCategoryTitle}/>
                break;
            case 2:
                content = <CreationThirdScreen onDateSelect = {this.HandleCategoryDate}/>
                break;
        }
        return  <React.Fragment>
                    {content}
                </React.Fragment>
    }
}

export default RequestCreationContainer