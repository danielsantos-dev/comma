import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllTrips } from '../../actions/data';
import Loading from '../loading/loading';
import SideMenu from './sideMenu';
import MapDemo from './map';
import './mappage.css';

class MapPage extends Component {

    componentDidMount() {
        this.props.getAllTrips();
    }

    render() {
        return (
            <Fragment>
                {this.props.loading ? (
                    <Loading />
                ) : (
                        <Fragment>
                            <div>
                                <div className="map-page-container">
                                    <MapDemo dataFromParent={this.props.trips}></MapDemo>
                                    <SideMenu></SideMenu>
                                </div>
                            </div>
                        </Fragment>
                    )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.data.loading,
    trips: state.data.trips
})

export default connect(mapStateToProps, { getAllTrips })(MapPage);