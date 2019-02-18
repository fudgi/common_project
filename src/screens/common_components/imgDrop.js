import React from 'react'
import Dropzone from 'react-dropzone';
import crop from './../../img/crop_original.svg'

const imageMaxSize = 10000000; //bytes
const baseStyle = {
    borderWidth: 1,
    borderColor: '#666',
    borderStyle: 'dashed',
    borderRadius: 5
  };
  const activeStyle = {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#6c6',
    backgroundColor: '#eee'
  };

class ImgDrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          files: []
        };
    }

    onDrop = (acceptedFiles, rejectedFiles) => {
        if(rejectedFiles && rejectedFiles.length > 0){
            let errorText = "";
            const currentRejectedFile = rejectedFiles[0];
            if(currentRejectedFile.size > imageMaxSize){
                errorText += "Слишком большой размер файл. ";
            }
            if(currentRejectedFile.type != "image/*"){
                errorText += "Неверное разрешение файла";
            }
            alert(errorText);
        }
        this.props.imageFilesGetCallback(acceptedFiles);
    }

    render() {
        const {files} = this.props;
        const thumbs = files.map(file => (
            <div className="thumb mr-2 mb-2" key={file.name}>
                <div className="thumbInner">
                    <img src={file.preview} className="img"/>
                </div>
            </div>
        ));
        return (
            <React.Fragment>
                <Dropzone
                    accept="image/*"
                    maxSize={imageMaxSize}
                    onDrop={this.onDrop.bind(this)}
                    multiple={true}
                >
                    {({getRootProps, getInputProps, isDragActive}) => {
                        let preview = this.props.files.length?
                            <aside className="thumbsContainer mt-2">
                                {thumbs}
                            </aside>
                            :
                            <img src={crop} className="py-2"/>

                        let styles = isDragActive ? activeStyle : baseStyle;
                            
                        return (
                            <div {...getRootProps()} style={styles} className="text-muted rounded d-flex flex-column align-items-center p-2 mb-3 no-focus">
                                <span className="text-muted">Добавить фотографии</span>
                                {preview}
                                <input {...getInputProps()} />
                                <span>Вы можете загрузить изображение в формате JPG или PNG.</span>
                                <span>Если у Вас возникают проблемы с загрузкой, попробуйте выбрать фотографию меньшего размера</span>
                            </div>
                    )}}
                </Dropzone>
            </React.Fragment>
        )
    }
}

export default ImgDrop