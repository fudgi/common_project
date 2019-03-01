import React from 'react'
import '../../css/gallery.css'

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(e){
        if(e.target.id=="myModal" || e.target.classList.contains('abandon')){
            this.props.func({showing: false})
        }
    }

    render(){
        let title, text
        switch (this.props.type) {
            case "politics":
                title = "Политика конфиденциальности";
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nec ullamcorper sit amet risus nullam. Quis hendrerit dolor magna eget est lorem ipsum. Feugiat pretium nibh ipsum consequat nisl vel pretium. In hendrerit gravida rutrum quisque non tellus orci. Tempor id eu nisl nunc. Consectetur purus ut faucibus pulvinar elementum integer. Sem nulla pharetra diam sit. Nisl nisi scelerisque eu ultrices vitae. Feugiat vivamus at augue eget arcu dictum varius duis at. Proin sagittis nisl rhoncus mattis rhoncus urna. Amet purus gravida quis blandit turpis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Viverra mauris in aliquam sem. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. At imperdiet dui accumsan sit amet nulla facilisi. Aliquet lectus proin nibh nisl. Libero enim sed faucibus turpis. Cursus vitae congue mauris rhoncus aenean. Neque convallis a cras semper. Dapibus ultrices in iaculis nunc. Proin sed libero enim sed faucibus. Id aliquet lectus proin nibh nisl condimentum id. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Praesent semper feugiat nibh sed. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Hac habitasse platea dictumst vestibulum. Sed ullamcorper morbi tincidunt ornare massa eget. Vulputate ut pharetra sit amet aliquam. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Tortor consequat id porta nibh venenatis. Ridiculus mus mauris vitae ultricies leo. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Leo vel fringilla est ullamcorper eget. Sed viverra tellus in hac. Rhoncus urna neque viverra justo nec ultrices dui sapien. Urna molestie at elementum eu. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Quis hendrerit dolor magna eget. Amet volutpat consequat mauris nunc congue. A erat nam at lectus urna duis convallis convallis tellus. At tempor commodo ullamcorper a lacus vestibulum. Sed risus ultricies tristique nulla. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Urna cursus eget nunc scelerisque viverra mauris in. Pellentesque sit amet porttitor eget. Adipiscing at in tellus integer feugiat scelerisque. Penatibus et magnis dis parturient. Et malesuada fames ac turpis egestas sed tempus urna. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Justo donec enim diam vulputate ut pharetra sit amet. Nulla facilisi morbi tempus iaculis urna id volutpat. Nisl nisi scelerisque eu ultrices vitae auctor eu. Neque aliquam vestibulum morbi blandit cursus. Enim sit amet venenatis urna cursus. Sed turpis tincidunt id aliquet risus feugiat. Dolor sit amet consectetur adipiscing elit ut. Quisque non tellus orci ac auctor. Semper auctor neque vitae tempus quam pellentesque. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Et leo duis ut diam quam nulla porttitor massa. Sit amet nulla facilisi morbi tempus iaculis urna id. Nibh venenatis cras sed felis eget velit aliquet sagittis. Enim facilisis gravida neque convallis a cras semper auctor. Enim praesent elementum facilisis leo vel. Sollicitudin aliquam ultrices sagittis orci. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Eget sit amet tellus cras adipiscing enim eu. Arcu bibendum at varius vel pharetra vel. Semper quis lectus nulla at volutpat diam ut venenatis. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Tempus imperdiet nulla malesuada pellentesque. Id faucibus nisl tincidunt eget nullam non nisi est sit."
                break;
            case "conditions":
                title = "Условия пользователя";
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Urna porttitor rhoncus dolor purus non enim. Vel eros donec ac odio tempor. Fermentum leo vel orci porta non pulvinar. Ridiculus mus mauris vitae ultricies leo integer. At in tellus integer feugiat scelerisque varius. Turpis nunc eget lorem dolor. Sit amet nulla facilisi morbi. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Quam quisque id diam vel quam elementum pulvinar. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Bibendum enim facilisis gravida neque convallis a. Neque laoreet suspendisse interdum consectetur libero id faucibus. Interdum velit laoreet id donec ultrices tincidunt. A condimentum vitae sapien pellentesque habitant morbi. In eu mi bibendum neque egestas. Augue interdum velit euismod in pellentesque massa placerat. Tristique senectus et netus et malesuada fames. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Aliquam faucibus purus in massa tempor nec feugiat nisl. Faucibus ornare suspendisse sed nisi lacus sed. Neque gravida in fermentum et sollicitudin ac orci phasellus. Et magnis dis parturient montes nascetur ridiculus. Netus et malesuada fames ac turpis egestas. Diam volutpat commodo sed egestas egestas fringilla phasellus. Porta lorem mollis aliquam ut porttitor. Facilisis mauris sit amet massa. Purus non enim praesent elementum facilisis. Sagittis nisl rhoncus mattis rhoncus. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Tempus urna et pharetra pharetra massa massa. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Mauris cursus mattis molestie a iaculis. Vel quam elementum pulvinar etiam non quam lacus. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Placerat duis ultricies lacus sed. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Netus et malesuada fames ac turpis egestas integer eget aliquet. Arcu ac tortor dignissim convallis. Tristique magna sit amet purus gravida quis blandit turpis. Quam vulputate dignissim suspendisse in est. Mauris ultrices eros in cursus turpis massa. Dignissim enim sit amet venenatis urna cursus. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Tellus id interdum velit laoreet. Fermentum dui faucibus in ornare quam. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Varius quam quisque id diam vel quam elementum. At volutpat diam ut venenatis tellus in metus vulputate. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Senectus et netus et malesuada fames ac turpis egestas integer. Tortor condimentum lacinia quis vel eros donec ac odio. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Sit amet justo donec enim diam vulputate. Metus dictum at tempor commodo ullamcorper. Arcu felis bibendum ut tristique et. Eget mauris pharetra et ultrices. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Sagittis vitae et leo duis ut diam quam nulla. Non blandit massa enim nec dui nunc mattis. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Ut porttitor leo a diam sollicitudin tempor id eu. Volutpat lacus laoreet non curabitur gravida arcu. Hendrerit dolor magna eget est lorem. Et netus et malesuada fames. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum."
                break;
        }
        return(
            <div id="myModal"  className="modal" onClick={this.closeModal} style={{display:(this.props.type? "block" : "none")}}>
                <span class="abandon">&times;</span> 
                <div class="modal-content" style={{backgroundColor:"white", padding:"4%", overflowY:"scroll"}}>
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}

export default Modal