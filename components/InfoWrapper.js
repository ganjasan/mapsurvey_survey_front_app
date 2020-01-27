import React from 'react';
import { connect } from 'react-redux'

class InfoWrapper extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let className = 'info-wrapper d-flex flex-column';
		if (this.props.show && this.props.draw_mode == 'simple_select'){
			className +=' info-wrapper-visible';
		}else{
			className +=' info-wrapper-hidden';
		}
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
};

function mapStateToProps(state){
	return {
		show: state.infoWrapper.show,
		draw_mode: state.drawcontroller.draw_mode,
	};
}

export default connect(mapStateToProps)(InfoWrapper);
