import React, { Component } from "react";
import { HereMap, Marker, PathFinder } from "rc-here-maps";

class MapDemo extends Component {
  constructor(props) {
    super(props);

    this.coords2 = [];

    this.center = {
      lat: 38.8107959,
      lng: -9.2529825
    };

    this.bounds = {
      north: 53.1,
      south: 13.1,
      east: 43.1,
      west: 40.1
    };
  }

  componentWillMount() {
    this.props.dataFromParent.forEach(element => {
      this.coords2 = [...this.coords2, ...element.coords]
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log(this.coords2)
    const items = this.coords2.map(function (el) {

      const speed = Math.floor(el.speed);

      // using if - else statements and not switch case because of performance,
      // if else in this case is faster in almost all tested environments.
      if (speed < 5) {
        return <Marker
          
          lat={el.lat}
          lng={el.lng}
        >
            <div className="ball b1"></div>
        </Marker>
      } else
        if (speed < 10) {
          return <Marker
            
            lat={el.lat}
            lng={el.lng}
          >
              <div className="ball b2"></div>
          </Marker>
        } else
          if (speed < 15) {
            return <Marker
              
              lat={el.lat}
              lng={el.lng}
            >
                <div className="ball b3"></div>
            </Marker>
          } else
            if (speed < 20) {
              return <Marker
                
                lat={el.lat}
                lng={el.lng}
              >
                  <div className="ball b4"></div>
              </Marker>
            } else
            if (speed < 200) {
              return <Marker
                
                lat={el.lat}
                lng={el.lng}
              >
 
                  <div className="ball b9"></div>
              </Marker>
            }
    });

    return (
      <div
        className="map-wrapper"
        style={{ width: "70%", height: "100vh" }}
      >
        <HereMap
          appId="PqzDeV7k7c2Udy6g2Fvc"
          appCode="PWIfIjZYX7_LIxXbrXyjCw"
          useHTTPS={false}
          center={{
            lat: 37.773972,
            lng: -122.4312979
          }}
          zoom={14}
        >

          {items}


        </HereMap>
      </div>
    );
  }
}

export default MapDemo;