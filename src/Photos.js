import React from 'react';
import './stylesheets/Photos.css';

class Photos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: [
                './images/mm1.jpg',
                './images/mm2.jpg',
                './images/mm3.jpg',
                './images/mm4.jpg',
                './images/mindy1.jpg',
            ],
            imageIndex: 0,
        }

        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
    }

    nextImage = () => {
        var newIndex = this.state.imageIndex + 1;
        if(newIndex > this.state.images.length-1) { newIndex = 0; }
        this.setState({ imageIndex: newIndex });
    }

    previousImage = () => {
        var newIndex = this.state.imageIndex - 1;
        if(newIndex < 0) { newIndex = this.state.images.length - 1; }
        this.setState({ imageIndex: newIndex });
    }

    render(){
        return(
            <div id="photos">
                <div id="slideshow">
                    <img src={this.state.images[this.state.imageIndex]} alt="Mindy and Matt"/>
                    <button id="btn-previous" className="chevron" onClick={()=> this.previousImage()}>&lsaquo;</button>
                    <button id="btn-next" className="chevron" onClick={()=> this.nextImage()}>&rsaquo;</button>
                </div>
            </div> 
        );
    };
}

export default Photos;