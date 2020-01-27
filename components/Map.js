import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

class Map extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      center: [30,60],
      style:"mapbox://styles/konuchovartem/ck3zmiisp0ele1cohe2oxqm0q",
      containerStyle:{
        height: '100vh',
        width: '100vw',
      }
    }
  };

  render(){
    const Map = ReactMapboxGl({
      accessToken: process.env.MAPBOX_TOKEN,
    });

    return (
        <Map className="map" style={this.state.style} containerStyle={this.state.containerStyle} center={this.state.center}>
          {this.props.children}
        </Map>
      )
  }

}

export default Map;