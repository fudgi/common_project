import React from 'react'
import {icons} from '../../icon_paths';

import Fetch from '../service/fetch'

class SortCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.SideBarClose = this.SideBarClose.bind(this);
        this.SiderBarCategoryClick = this.SiderBarCategoryClick.bind(this);
    }

    SideBarClose(e) {
        e.preventDefault();
        this.props.categoryChange({categorySelectorOpened: false});
    }

    SiderBarCategoryClick(e) {
        e.preventDefault();
        let target = e.target;
        if(target.tagName == "SPAN"){
                this.props.categoryChange({selected_category:target.dataset.id})
        }
    }

    componentDidMount() {
        Fetch.getData('/react-app-07/src/php/request_list/category.php',"")
            .then((result) => this.setState({items: result}))
            .catch((error) => alert(error));
    }

    render() {
        let categoryCloser = "";
        if (this.props.categorySelectorOpened == true){
            categoryCloser = 
                    <a href="#" className="btn d-md-none mt-3 d-flex justify-content-end" id="in-menu-toggle"  onClick={this.SideBarClose}>
                        <img src= {icons.close} width="20" height="20" id="in-menu-toggle" alt="category-open"/>
                    </a>
        }
        return (
            <div id="sidebar-wrapper" onClick={this.SiderBarCategoryClick}> 
                <ul className="sidebar-nav">
                    <li>
                        {categoryCloser}
                    </li>
                    <li className="sidebar-brand">
                        Категории:
                    </li>
                    <li>
                        <ul className="accordion m-0 p-0" id="accordionExample">
                            <li>
                                <span className={this.props.selected_category=="1"? "choosen":""} data-id="1">Все</span>
                            </li>
                            {this.state.items.map(item => {
                                return (
                                    <li>
                                        <span className={item.category_id == this.props.selected_category? "choosen":""} data-id={item.category_id}>{item.category_name}</span>
                                    </li>
                                )  
                            })}
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SortCategory