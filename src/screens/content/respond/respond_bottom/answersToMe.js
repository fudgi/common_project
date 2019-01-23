import React from 'react'

import RespondComponent from './respond.component'

class Respond_Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.getBackOnRequestList = this.getBackOnRequestList.bind(this);
    }
    
    getBackOnRequestList(e){
        this.props.respondingChange({responding:false});
    }

    render() {
        let content;
        let respondersData = this.props.items;
        if(respondersData == "no answers"){
            content = <div className="d-flex flex-column align-items-center mt-4">
                        <h5>Пока никто не откликнулся на ваш запрос :(</h5>
                        <p className="text-muted m-0 my-2">Зайдите немного позже, и кто-нибудь вам точно поможет</p>
                        <button className="mx-auto purp-button btn p-2 px-5" onClick={this.getBackOnRequestList}>К списку запросов</button>
                      </div>
        }
        // else if(respondersData.length > 0){
        //     alert('in2')
            // if(respondersData.length==1 && respondersData[0].request_responder!=undefined){ //Выбран ли ответчик
            //    content = <RespondComponent type="0" item={this.props.items[0]} respondingChange={this.props.respondingChange} />
            // }
        else 
            content = (
                    <React.Fragment>
                        <h3 className="my-4 offset-2">Эти люди готовы помочь вам</h3>
                        {respondersData.map(item => {
                            return <RespondComponent 
                                        type="1" 
                                        item={item} 
                                        user_id={this.props.user_id}
                                        updateHandle={this.props.updateHandle}/>
                        })}
                    </React.Fragment>)
        // }

        return(
            <React.Fragment>
                {content}   
            </React.Fragment>
        )
    }
}

export default Respond_Bottom
