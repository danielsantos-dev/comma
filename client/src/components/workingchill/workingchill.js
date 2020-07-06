import React, { Component } from 'react';
import Background from './image.jpg';
import Background2 from './guy.jpg';
import Background3 from './louge.jpg';
import Background4 from './as.jpg';
import Background5 from './roadtrip.jpg';

var sectionStyle = {
    width: "100%",
    height: "92vh",
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
};

var sectionStyle2 = {
    width: "50%",
    height: "100%",
    backgroundImage: `url(${Background2})`,
    backgroundSize: 'cover',
};

var sectionStyle3 = {
    width: "50%",
    height: "100%",
    backgroundImage: `url(${Background3})`,
    backgroundSize: 'cover',
};

var sectionStyle4 = {
    width: "50%",
    height: "100%",
    backgroundImage: `url(${Background4})`,
    backgroundSize: 'cover',
};

var sectionStyle5 = {
    width: "50%",
    height: "100%",
    backgroundImage: `url(${Background5})`,
    backgroundSize: 'cover',
};

class WorkingChill extends Component {




    render() {


        return (
            <div className="card-overlay">
                <div style={sectionStyle}>
                    <h1 style = {{opacity:'1', color:'white', fontSize:'xxx-large', marginLeft:'18vw', paddingTop:'40vh', fontSize:'80px'}}>Make working Chill</h1>
                </div>
            </div>
        );
    }
}

export default WorkingChill;