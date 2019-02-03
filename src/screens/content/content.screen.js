import React from 'react'

import RequestList from './request_list/request_list.screen'
import Respond from './respond/respond.screen'
import Header from '../common_components/header'
import NavBar from '../common_components/navbar'

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state={
            screen_id: props.screen_id || "0",
            responding: props.responding || false,
            request_id: "",
            user_name: "Миша Смирнов",
            user_location: "Казань"
        }
        this.respondingChange = this.respondingChange.bind(this);
    }

    respondingChange(data) {
        this.setState(data);
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.responding==false && this.state.responding && prevState.responding){
            this.setState({responding:false})
        }
    }
    render(){
        let content = this.state.responding ? 
            <Respond  
                screen_id={this.state.screen_id}
                request_id={this.state.request_id}  
                user_id={this.props.user_id}
                respondingChange={this.respondingChange}/>
            :
            <RequestList
                screen_id={this.state.screen_id}
                user_id={this.props.user_id}
                respondingChange={this.respondingChange}/>;

        return <React.Fragment>
                    <Header />
                    <NavBar screen_id={this.state.screen_id} user_name={this.state.user_name} user_location={this.state.user_location} stateChanger={this.respondingChange}/>
                    <div id="content">
                        {content}
                    </div>
                </React.Fragment>
    }
}

export default Content;