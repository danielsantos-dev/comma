import React from 'react';
import loading from './loading.gif';
import './loading.css'

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="comma-background--black">
                <div className="container-2">
                    <img className="image" src={loading} alt="loading..." />
                    <div className="centered">Making Driving Chill.</div>
                </div>
            </div>
        );
    }
}

export default Loading;