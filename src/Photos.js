import React from 'react';
import './stylesheets/Photos.css';

class Photos extends React.Component {
    
    render(){
        return(
            <div id="photos">
                <div className="photo"></div>
                <div className="photo"></div>
                <div className="photo"></div>
            </div> 
        );
    };
}

export default Photos;