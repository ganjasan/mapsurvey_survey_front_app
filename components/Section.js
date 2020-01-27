import React, { Component } from 'react';
import {openNextSection, openPrevSection} from '../actions/section';
import { connect } from 'react-redux';

class Section extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
		return (
			<div className="Section">
				{this.props.children}
			</div>
		)
	}
};

function mapStateToProps(state){
	return {
		sections_structure: state.app.survey_structure,
		current_section: state.current_section,
	};
}
