import React from 'react'

import Category from './category'
import Filter from './filter_top'
import Component_AR from './components_in_list/component_AR'
import Component_MRQ from './components_in_list/component_MRQ'
import Component_MRS from './components_in_list/component_MRS'
import Loading from '../common_components/loading'
import Fetch from '../service/fetch'
import { withRouter } from 'react-router-dom'
import '../../css/simple-sidebar.css';

class RequestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_category:"1",
            error: null,
            isLoaded: false,
            items: [],
            categorySelectorOpened: false
        };
        this.categoryChange = this.categoryChange.bind(this);
        this.HandleNetworkUpdate = this.HandleNetworkUpdate.bind(this);
    }

    categoryChange(data){
        this.setState(data);
    }
    
    componentDidMount() {
        this.HandleNetworkUpdate();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.selected_category != prevState.selected_category){
            this.HandleNetworkUpdate();
        }
        else if(this.props.location.pathname != prevProps.location.pathname){
            this.HandleNetworkUpdate();
        }
    }

    //для связи с БД и обновления списка
    HandleNetworkUpdate(){
        let path;
        switch (this.props.location.pathname){
            case "/all_requests":
                path='/react-app-07/src/php/request_list/allRequests.php';
                break;
            case "/my_requests":
                path='/react-app-07/src/php/request_list/myRequests.php';
                break;
            case "/my_responds":
                path='/react-app-07/src/php/request_list/myResponds.php';
                break;
        }
        Fetch.getData(path, {selected_category:this.state.selected_category})
        .then((result) => this.setState({isLoaded: true, items: result, error: null}))
        .catch((error) => {
            error(this)
            this.setState({isLoaded: true, error: true})
        })
    }
    
    render() {
        let Sidebar, filter;
        let path = this.props.location.pathname;
        const { error, isLoaded } = this.state;
        
        if(path == "/all_requests"){
            Sidebar = <Category 
                        categoryChange={this.categoryChange} 
                        selected_category={this.state.selected_category}
                        categorySelectorOpened={this.state.categorySelectorOpened}
                      />
            filter  = <Filter 
                        categoryChange={this.categoryChange} 
                        categorySelectorOpened={this.state.categorySelectorOpened}
                      />;
        }

        if (error) {
            let text;
            switch(path){
                case "/all_requests":
                    text = "Нет запросов для отображения";
                    break;
                case "/my_requests":
                    text = "Вы пока не добавили ни одного запроса";
                    break;
                case "/my_responds":
                    text = "Вы пока что не откликнулись ни на один запрос";
                    break;
            }
            return <div className="d-flex justify-content-center mt-3">{text}</div>;
        } 
        else if (!isLoaded) {
            return <Loading />
        }
        else {
            let categoryToggled = this.state.categorySelectorOpened == true? "mt-2 toggled":"mt-2";
            return (
                <main className={categoryToggled} id="wrapper">
                    {Sidebar}
                    <div id="page-content-wrapper" className="d-flex">
                        <div className="center-field flex-fill">
                            {filter}
                            <div className="request-list">
                                {this.state.items.map(item => {
                                    switch(path){
                                        case "/all_requests":
                                            return <Component_AR key={item.request_id} type={this.props.location.pathname}  data={item}/>
                                        case "/my_requests":
                                            return <Component_MRQ key={item.request_id} type={this.props.location.pathname}  data={item}/>
                                        case "/my_responds":
                                            return <Component_MRS key={item.request_id} type={this.props.location.pathname}  data={item}/>
                                    }
                                })}
                            </div>
                        </div>  
                        <div className="right-side d-none d-lg-block" style={{minWidth: 250}}></div>
                    </div>
                </main>
            )
        }
    }
}

export default withRouter(RequestList)