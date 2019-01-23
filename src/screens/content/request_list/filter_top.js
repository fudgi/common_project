import React from 'react'
import search from '../../../img/search.svg'
import plus from '../../../img/plus.svg'
import sidebarOpen from '../../../img/arrowBack.svg'

class FilterTop extends React.Component {
    constructor(props){
        super(props);
        this.RequestCreationCall = this.RequestCreationCall.bind(this);
        this.sideBarOpener = this.sideBarOpener.bind(this);
    }
    RequestCreationCall() {
        this.props.respondingChange({screen_id:"4", responding: "false"});
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
                <div className="sort-top">
                    <div className="d-flex flex-column flex-sm-row  align-items-center justify-content-sm-between">
                        <div className="col-10 col-sm-4 d-flex justify-content-center justify-content-sm-start">
                            <input type="text" className="searchbar  col-10 mb-2 mb-sm-0" placeholder="Поиск"/>
                            <button type="button" className="btn searchbar  mb-2 mb-sm-0">
                                <img src={search}/>
                            </button>
                        </div>

                        <button className="purp-button col-10 col-sm-4 btn" onClick={this.RequestCreationCall}>
                            <img src={plus} className="mr-2"/>
                            Добавить запрос
                        </button>
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
                </div>
            </React.Fragment>
        )
    }
}

export default FilterTop