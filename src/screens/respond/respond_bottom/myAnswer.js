import React from 'react'
import { withRouter } from 'react-router-dom'

import ImgDrop from '../../common_components/imgDrop'
import {icons} from '../../../icon_paths'


class Respond_Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
        this.saveAnswer = this.saveAnswer.bind(this);
        this.imageFilesGetCallback = this.imageFilesGetCallback.bind(this);
    }
    
    saveAnswer() {
        let price = document.getElementById('answer_price');
        let description = document.getElementById('answer_description');
        if(price.value=="" || description.value==""){
            alert("Заполните все поля");
            return;
        }
        let formData = new FormData();
        formData.append("request_id", this.props.request_id);
        formData.append("price", price.value);
        formData.append("description", description.value);
        this.state.files.forEach(function(file, i) {
            formData.append('image_' + i, file);
        });

        let dataToSend ={
            method: "POST",
            body:formData
        };

        fetch("/react-app-07/src/php/respond/myAnswerSave.php", dataToSend)
            .then(res => res.json())
            .then(res => {
                if(res.status == "OK") return res.data
                else throw res.data
            })
            .catch((error) => {
                if(error == "not logged in") throw function (putContext){putContext.props.history.push("/login")};
                else throw () => alert(error)
            })
            .then((res) => this.props.history.push("/my_responds/" + this.props.request_id))
            .catch((error) => error(this))
    }

    imageFilesGetCallback(acceptedFiles){
        this.setState({
            files: this.state.files.concat(
                acceptedFiles.map(file => Object.assign(file, {preview: URL.createObjectURL(file)})))
          });
    }

    render() {
        return(
            <React.Fragment>
                <main className="d-flex flex-column mx-auto col-8 p-0  rounded bg-white">
                    <form className="d-flex flex-column col-12 p-5">
                        <span className="mb-2">Цена:</span>
                        <div className="mb-4">
                            <input type="number" className="searchbar" placeholder="1000" id="answer_price"/>
                            <img src={icons.ruble_sign}/>
                        </div>

                        <span className="mb-2">Описание:</span>
                        <textarea name="description" id="answer_description" className="textarea mb-4 rounded p-3" rows="5" placeholder="Платье шуруповерт супер"></textarea>

                        <span className="mb-2">Фото:</span>
                        <ImgDrop files={this.state.files} imageFilesGetCallback={this.imageFilesGetCallback}/>
                    </form>
                </main>

                <div className="d-flex justify-content-end offset-7 col-3 py-4 pr-0">
                    <a href="/all_requests" className="my-auto mr-4 refs">Отменить</a>
                    <button className="purp-button btn p-2 px-5" onClick={this.saveAnswer}>Откликнуться</button>
                </div>
            </React.Fragment>
        )
    }

    componentWillUnmount() {
        //to avoid memory leaks
        this.state.files.forEach(file => URL.revokeObjectURL(file.preview))
    }
}

export default withRouter(Respond_Bottom)