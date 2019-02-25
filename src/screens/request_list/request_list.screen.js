import React from 'react'

import Category from './category'
import Filter from './filter_top'
import RequestComponent from './request_component'
import Loading from '../common_components/loading'
import Fetch from '../service/fetch'

import '../../css/simple-sidebar.css';

class RequestList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
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
        Fetch.getData(path, {user_id: this.props.user_id, selected_category:this.state.selected_category})
        .then((result) => this.setState({isLoaded: true, items: result, error: null}))
        .catch((error) => this.setState({isLoaded: true, error}))
    }
    
    render() {
        let Sidebar, filter;
        const { error, isLoaded } = this.state;

        if(this.props.location.pathname == "/all_requests"){
            Sidebar = <Category 
                        user_id={this.props.user_id} 
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
            return <div className="d-flex justify-content-center mt-3">Отсутствуют данные для отображения</div>;
        } 
        else if (!isLoaded) {
            return <Loading />
        }
        else {
            let categoryToggled = "mt-2";
            if(this.state.categorySelectorOpened == true) {
                categoryToggled = "mt-2 toggled";
            }
            return (
                <main className={categoryToggled} id="wrapper">
                    {Sidebar}
                    <div id="page-content-wrapper" className="d-flex">
                        <div className="center-field flex-fill">
                            {filter}
                            <div className="request-list">
                                {this.state.items.map(item => {
                                    return <RequestComponent key={item.request_id} type={this.props.location.pathname}  data={item}/>
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

export default RequestList