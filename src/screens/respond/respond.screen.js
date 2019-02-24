import React from 'react'

import RespondTop from './respond_top'
import MyAnswerBottom from './respond_bottom/myAnswer'
import AnswersToMeBottom from './respond_bottom/answersToMe'
import MyRespondChanger from './respond_bottom/respondChanger'
import Loading from '../common_components/loading'

import Fetch from '../service/fetch'

class RespondScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            error: null,
            isLoaded: false,
            items: []
        };
        this.updateComponentHandle = this.updateComponentHandle.bind(this);
    }

    updateComponentHandle(){
        this.setState({isLoaded: false,items: [], error: null})
        let path;
        switch(window.location.pathname.split('/')[1]){
            case "all_requests":
                path = '/react-app-07/src/php/respond/myAnswerLoad.php';
                break;
            case "my_requests":
                path = '/react-app-07/src/php/respond/answerToMeLoad.php';
                break;
            case "my_responds":
                path = '/react-app-07/src/php/respond/respondChangeLoad.php'
                break;
        }
        Fetch.getData(path, {request_id: this.props.match.params.id, user_id: this.props.user_id})
            .then((result) => this.setState({isLoaded: true,items: result, error: null}),
                  (error) => this.setState({isLoaded: true, error}))
    }

    componentDidMount() {
       this.updateComponentHandle();
    }

    componentDidUpdate(prevProps) {
        if(this.props.location.pathname != prevProps.location.pathname){
            this.updateComponentHandle();
        }
    }

    render(){
        let URLpath = window.location.pathname.split('/')[1];
        let request_id = this.props.match.params.id;
        const {error, isLoaded} = this.state;
        let bottomPart;
        switch(URLpath){
            case "all_requests":
                bottomPart = <MyAnswerBottom 
                                user_id={this.props.user_id} 
                                request_id={request_id}
                             />
                break;
            case "my_requests":
                if(this.state.items.length >=2){
                    bottomPart = <AnswersToMeBottom 
                                user_id={this.props.user_id} 
                                request_id={request_id} 
                                items={this.state.items[1]} 
                                respondingChange={this.props.respondingChange}
                                updateComponentHandle={this.updateComponentHandle}/>
                }
                break;
            case "my_responds": 
                if(this.state.items.length ==2){
                    bottomPart = <MyRespondChanger  
                                    user_id={this.props.user_id} 
                                    request_id={request_id} 
                                    items={this.state.items[1]} 
                                 />
                }
                break;
        }
        
        if (error) {
            return <div className="mx-auto mt-3">Ошибка: {error.message}</div>;
        } 
        else if (!isLoaded) {
            return <Loading />
        }
        else {
            return( 
                <React.Fragment>
                    <RespondTop URLpath={URLpath} data={this.state.items[0]}/>
                    {bottomPart}
                </React.Fragment>
            )
        }
    }
}

export default RespondScreen