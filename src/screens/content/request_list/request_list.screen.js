import React from 'react'

import Category from './category'
import Filter from './filter_top'
import RequestComponent from './request_component'
import Loading from '../../common_components/loading'
import Fetch from '../../service/fetch'

import '../../../css/simple-sidebar.css';

class RequestList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selected_category:"1",
            error: null,
            isLoaded: false,
            items: []
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
        else if(this.props.screen_id != prevProps.screen_id){
            this.HandleNetworkUpdate();
        }
    }

    //для связи с БД и обновления списка
    HandleNetworkUpdate(){
        let path;
        switch (this.props.screen_id){
            case "0":
                path='react-app-07/src/screens/content/request_list/php/requests.php';
                break;
            case "1":
                path='react-app-07/src/screens/content/request_list/php/myRequests.php';
                break;
            case "2":
                path='react-app-07/src/screens/content/request_list/php/myResponds.php';
                break;
        }
        Fetch.getData(path, {user_id: this.props.user_id, selected_category:this.state.selected_category})
        .then((result) => this.setState({isLoaded: true, items: result, error: null}))
        .catch((error) => this.setState({isLoaded: true, error}))
    }
    
    render() {
        let Sidebar, filter;
        if(this.props.screen_id == "0"){
            Sidebar = <Category categoryChange={this.categoryChange} selected_category={this.state.selected_category}/>
            filter  = <Filter />;
        }

        const { error, isLoaded } = this.state;
        if (error) {
            return <div className="d-flex justify-content-center mt-3">Отсутствуют данные для отображения</div>;
        } 
        else if (!isLoaded) {
            return <Loading />
        }
        else {
            return (
                <main className="mt-2" id="wrapper">
                    {Sidebar}
                    <div id="page-content-wrapper" className="d-flex">
                        <div className="center-field flex-fill">
                            {filter}
                            <div className="request-list">
                                {this.state.items.map(item => {
                                    return <RequestComponent key={item.request_id} type={this.props.screen_id}  data={item} respondingChange={this.props.respondingChange}/>
                                })}
                            </div>
                        </div>  
                        <div className="right-side d-none d-xl-block" style={{minWidth: 250}}></div>
                    </div>
                </main>
            )
        }
    }
}

export default RequestList