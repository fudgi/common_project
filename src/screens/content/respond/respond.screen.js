import React from 'react'

import RespondTop from './respond_top'
import MyAnswerBottom from './respond_bottom/myAnswer'
import AnswersToMeBottom from './respond_bottom/answersToMe'
import MyRespondChanger from './respond_bottom/respondChanger'
import Loading from '../../common_components/loading'

import Fetch from '../../service/fetch'

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
        switch(this.props.screen_id){
            case "0":
                path = 'react-app-07/src/screens/content/respond/php/myAnswerLoad.php';
                break;
            case "1":
                path = 'react-app-07/src/screens/content/respond/php/answerToMeLoad.php';
                break;
            case "2":
                path = 'react-app-07/src/screens/content/respond/php/respondChangeLoad.php'
                break;
        }
        Fetch.getData(path, {request_id: this.props.request_id, user_id: this.props.user_id})
            .then((result) => this.setState({isLoaded: true,items: result, error: null}),
                  (error) => this.setState({isLoaded: true, error}))
    }

    componentDidMount() {
       this.updateComponentHandle();
    }

    componentDidUpdate(prevProps) {
        if(this.props.screen_id != prevProps.screen_id){
            this.updateComponentHandle();
        }
    }

    render(){
        const {error, isLoaded} = this.state;
        let bottomPart;
        switch(this.props.screen_id){
            case "0":
                bottomPart = <MyAnswerBottom 
                                user_id={this.props.user_id} 
                                request_id={this.props.request_id} 
                                respondingChange={this.props.respondingChange}/>
                break;
            case "1":
                if(this.state.items.length >=2){
                    bottomPart = <AnswersToMeBottom 
                                user_id={this.props.user_id} 
                                request_id={this.props.request_id} 
                                items={this.state.items[1]} 
                                respondingChange={this.props.respondingChange}/>
                }
                break;
            case "2":
                if(this.state.items.length ==2){
                    bottomPart = <MyRespondChanger  
                                user_id={this.props.user_id} 
                                request_id={this.props.request_id} 
                                items={this.state.items[1]} 
                                respondingChange={this.props.respondingChange} />
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
                    <RespondTop screen_id={this.props.screen_id} data={this.state.items[0]}/>
                    {bottomPart}
                </React.Fragment>
            )
        }
    }
}

export default RespondScreen