import React from 'react';
import {changeDrawMode} from '../actions/drawcontroller'
import { connect } from 'react-redux'

class DrawButton extends React.Component{
	constructor(props){
		super(props);
		this.state={
			mode: this.props.mode,
		}
	};

	handleChangeMode = () => {
		this.props.changeDrawMode(this.state.mode);
	};


	render(){
		return (
			<button onClick={this.handleChangeMode}>
				{this.props.children}
			</button>
		)
	};
}

export default connect(
	null,
	{changeDrawMode}
)(DrawButton);