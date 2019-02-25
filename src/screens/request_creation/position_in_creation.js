import React from 'react'
import {category_icons} from '../../icon_paths'

class Position extends React.Component {
    render(){
        let parameters, dueDate;
        let line=["gap","gap"];
        switch(this.props.position){
            case 0:
                parameters = category_icons.Parameters0;
                dueDate = category_icons.DueDate0;
                break;
            case 1:
                parameters = category_icons.Parameters1;
                dueDate = category_icons.DueDate0;
                line[0]="purp-gap";
                break;
            case 2:
                parameters = category_icons.Parameters1;
                dueDate = category_icons.DueDate1;
                line = ["purp-gap","purp-gap"];
                break;
        }
        
        return(
            <React.Fragment>
                <div className="d-flex justify-content-around mx-auto col-10 col-md-8 pt-5">
                    <a href="#">
                        <img src={category_icons.Category} width="50"/>
                    </a>

                    <div className={"container d-flex flex-column justify-content-center m-0 p-0 " + line[0]}>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>

                    <a href="#">
                        <img src={parameters} width="50"/>
                    </a>

                    <div className={"container d-flex flex-column justify-content-center m-0 p-0 " + line[1]}>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>

                    <a href="#">
                        <img src={dueDate} width="50"/>
                    </a>
                </div>
                <div className="row col-12 mx-auto flex-nowrap mt-2">
                    <a href="" className="col-3 col-md-5 text-center">Категории</a>
                    {this.props.position >= 1 ? <a href="" className="col-6 col-md-2 text-center">Параметры</a> : <span href="" className="col-6 col-md-2 text-center">Параметры</span> }
                    {this.props.position >= 2 ? <a href="" className="col-3 col-md-5 text-center">Контакты и сроки</a> : <span href="" className="col-3 col-md-5 text-center">Контакты и сроки</span>}
                </div>
            </React.Fragment>
        )
    }
}

export default Position