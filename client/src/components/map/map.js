import React, { Component } from "react";
import { HereMap, Marker } from "rc-here-maps";

class MapDemo extends Component {
  constructor(props) {
    super(props);

    this.coords2 = [];

    this.center = {
      lat: 38.8107959,
      lng: -9.2529825
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
            if (speed < 30) {
              return <Marker
                
                lat={el.lat}
                lng={el.lng}
              >
 
                  <div className="ball b5"></div>
              </Marker>
            } else
            if (speed < 50) {
              return <Marker
                
                lat={el.lat}
                lng={el.lng}
              >
 
                  <div className="ball b6"></div>
              </Marker>
            } else
            if (speed < 70) {
              return <Marker
                
                lat={el.lat}
                lng={el.lng}
              >
 
                  <div className="ball b7"></div>
              </Marker>
            } else
            if (speed < 100) {
              return <Marker
                
                lat={el.lat}
                lng={el.lng}
              >
 
                  <div className="ball b8"></div>
              </Marker>
            }  else
            if (speed < 150) {
              return <Marker
                
                lat={el.lat}
                lng={el.lng}
              >
 
                  <div className="ball b9"></div>
              </Marker>
            } else
            if (speed < 200) {
              return <Marker
                
                lat={el.lat}
                lng={el.lng}
              >
 
                  <div className="ball b10"></div>
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
          zoom={18}
        >

          {items}


        </HereMap>
      </div>
    );
  }
}

export default MapDemo;