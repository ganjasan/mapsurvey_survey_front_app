import React, { Component } from 'react';
import Map from '../components/Map';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MapActions from '../actions/map';
import DrawControl from '../components/DrawControl';
import DrawButton from '../components/DrawButton';
import InfoWrapper from '../components/InfoWrapper';
import Page from '../components/Page';
import {setSurveyStructure} from '../actions/app';
import APIClient from '../utils/apiClient';

class App extends Component {
  constructor(props){
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  render() {
    return (
      <div>
        <InfoWrapper>
           <Page />
        </InfoWrapper>
        <Map>
         	<DrawControl displayControlsDefault={false} />
        </Map>
      </div>
    );
  }

  componentDidMount(){
    var apiClient = new APIClient(123);
    this.props.setSurveyStructure(apiClient.getSurveyStructure(1));
  }
}

export default connect(null, {setSurveyStructure})(App);