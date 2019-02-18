import React from 'react'
import {Link} from "react-router-dom"

import search from '../../../img/search.svg'
import plus from '../../../img/plus.svg'
import sidebarOpen from '../../../img/arrowBack.svg'

class FilterTop extends React.Component {
    constructor(props){
        super(props);
        this.sideBarOpener = this.sideBarOpener.bind(this);
    }

    sideBarOpener(e) {
        e.preventDefault();
        document.getElementById("wrapper").classList.toggle('toggled');
        document.getElementById("menu-toggle").classList.toggle('invisible');
    }
    
    render(){
        return(
            <React.Fragment>
                <a href="#" class="btn d-md-none" id="menu-toggle" onClick={this.sideBarOpener}>
                    <img src={sidebarOpen} width="10" className="d-md-none" id="menu-toggle"/>
                </a>
                <section className="sort-top">
                    <div className="d-flex flex-column flex-sm-row  align-items-center justify-content-sm-between">
                        <div className="searchbar col-10 col-sm-4 d-flex pl-0 mb-2 mb-sm-0">
                            <input type="text" className="col-10 p-0 m-0" placeholder="Поиск"/>
                            <button type="button" className="btn">
                                <img src={search}/>
                            </button>
                        </div>

                        <Link className="purp-button col-10 col-sm-4 btn" to="/request_creation">
                            <img src={plus} className="mr-2"/>
                            Добавить запрос
                        </Link>
                    </div>

                    <p className="text-muted my-2">Сортировать по:</p>
                    
                    <div className="d-flex flex-wrap my-2">
                        <p className="selected-position dropdown-toggle mr-4"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Новизна</span>
                        </p>

                        <p className="dropdown-toggle mr-4"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Цена</span>
                        </p>

                        <p className="dropdown-toggle"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Местоположения</span>
                        </p>
                    </div>
                    <div className="row">
                        <span className="display-sort-date mx-auto">15 апреля</span>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default FilterTop