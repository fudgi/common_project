import React from 'react'
import closer from '../../../img/close.png'

import Fetch from '../../service/fetch'

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
        document.getElementById("wrapper").classList.toggle("toggled");
        document.getElementById("menu-toggle").classList.toggle("invisible");
    }

    SiderBarCategoryClick(e) {
        e.preventDefault();
        let target = e.target;
        if(target.tagName == "SPAN"){
                this.props.categoryChange({selected_category:target.dataset.id})
        }
    }

    componentDidMount() {
        Fetch.getData('react-app-07/src/screens/content/request_list/php/category.php',{selected_category: this.props.selected_category})
            .then((result) => this.setState({items: result}))
            .catch((error) => alert(error));
    }

    render() {
            return (
                <div id="sidebar-wrapper" onClick={this.SiderBarCategoryClick}> 
                    <ul className="sidebar-nav">
                        <li>
                            <a href="#" className="btn d-md-none mt-3 d-flex justify-content-end" id="in-menu-toggle"  onClick={this.SideBarClose}>
                                <img src= {closer} width="20" height="20" id="in-menu-toggle" alt="category-open"/>
                            </a>
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