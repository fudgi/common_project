import React from 'react'
import { withRouter } from 'react-router-dom'

import RespondComponent from './respond.component'

class Respond_Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.getBackOnRequestList = this.getBackOnRequestList.bind(this);
    }
    
    getBackOnRequestList(){
        this.props.history.push("/my_requests")
    }

    render() {
        let content;
        let respondersData = this.props.items;
        if(respondersData == "0"){
            content=(<div className="d-flex flex-column align-items-center mt-4">
                        <h5>Пока никто не откликнулся на ваш запрос :(</h5>
                        <p className="text-muted m-0 my-2">Зайдите немного позже, и кто-нибудь вам точно поможет</p>
                        <button className="mx-auto purp-button btn p-2 px-5" onClick={this.getBackOnRequestList}>К списку запросов</button>
                    </div>)
        }
        else{
            //Выбран ли ответчик
            if(respondersData[0].state=="1"){ 
               content = <React.Fragment>
                            <h3 className="my-4 offset-2">Вы выбрали</h3>
                            <RespondComponent type="0" item={respondersData[0]} updateComponentHandle={this.props.updateComponentHandle} />
                         </React.Fragment>
            }
            else content =   <React.Fragment>
                                <h3 className="my-4 offset-2">Эти люди готовы помочь вам</h3>
                                {respondersData.map(item => {
                                    return <RespondComponent 
                                                type="1" 
                                                item={item} 
                                                user_id={this.props.user_id}
                                                updateComponentHandle={this.props.updateComponentHandle}/>
                                })}
                            </React.Fragment>
        }

        return(
            <React.Fragment>
                {content}   
            </React.Fragment>
        )
    }
}

export default withRouter(Respond_Bottom)
