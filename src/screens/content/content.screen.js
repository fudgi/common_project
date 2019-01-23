import React from 'react'

import RequestList from './request_list/request_list.screen'
import Respond from './respond/respond.screen'

class Content extends React.Component {
    constructor(props){
        super(props);
        this.request_id = "";
        this.respondingChange = this.respondingChange.bind(this);
    }

    respondingChange(data, request_id) {
        if(request_id != undefined)this.request_id = request_id;
        this.props.stateChanger(data);
    }

    render(){
        let content = this.props.responding ? 
            <Respond  
                screen_id={this.props.screen_id}
                request_id={this.request_id}  
                user_id={this.props.user_id}
                respondingChange={this.respondingChange}/>
            :
            <RequestList
                screen_id={this.props.screen_id}
                user_id={this.props.user_id}
                respondingChange={this.respondingChange}/>;

        return <React.Fragment>{content}</React.Fragment>
    }
}

export default Content;