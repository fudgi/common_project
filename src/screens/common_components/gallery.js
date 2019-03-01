import React from 'react'
import '../../css/gallery.css'

class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: this.props.images,
            showing: "false"
        } 
        this.showPreview = this.showPreview.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
    }

    closeModal(e){
        if(e.target.id=="myModal" || e.target.classList.contains('abandon')){
            this.setState({showing: "false"});
        }
    }

    plusSlides(number){
        let newNumber = number + Number(this.state.showing);
        if(newNumber > (this.state.images.length-1)) newNumber = 0;
        if(newNumber < 0) newNumber = this.state.images.length-1;
        this.setState({showing:newNumber});
    }

    showPreview(e){
        e.stopPropagation();
        this.setState({showing:e.target.dataset.id });
    }

    render(){
        let previews, images, dots=[];
        previews = this.state.images.map((image, index) => (
            <div className="thumb mr-2 mb-2" key={index}>
                <div className="thumbInner">
                    <img src={image} className="img" onClick={this.showPreview} data-id={index}/>
                </div>
            </div>
        ))
        if(this.state.showing !== "false"){
            images = 
                <div class="mySlides noselect">
                    <div class='bounding-box' style={{backgroundImage:"url("+this.state.images[this.state.showing]+")"}}></div>
                </div>
            
            for(let i=0;i<this.state.images.length;i++){
                if(i == this.state.showing){
                    dots.push(<span class="dot active" key={i} onClick={this.showPreview} data-id={i}></span>)
                }
                else dots.push(<span class="dot" key={i} onClick={this.showPreview} data-id={i}></span>)
            }
        }
        return(
            <React.Fragment>
                <aside className="thumbsContainer mt-2">
                    {previews}
                </aside>
                <div id="myModal" class="modal" onClick={this.closeModal} style={{display:(this.state.showing!="false")? "block" : "none"}}>
                    <span class="abandon">&times;</span> 
                    <div class="modal-content">
                        <div class="slideshow-container">
                            {images}
                            <div class="prev noselect" onClick={()=>this.plusSlides(-1)}>&#10094;</div>
                            <div class="next noselect" onClick={()=>this.plusSlides(1)}>&#10095;</div>
                        </div>
                        <div class="dots">
                            {dots}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Gallery