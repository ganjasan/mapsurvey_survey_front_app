import React from 'react';
import {toggleInfoWrapper} from '../actions/infoWrapper';
import { connect } from 'react-redux';

class Page extends React.Component{
	constructor(props){
		super(props);

		this.togglePage = this.togglePage.bind(this);
	};

	togglePage = () => {
		console.log(this.props);
		this.props.toggleInfoWrapper();
	};

	render(){
		return(
			<div className='page'>
				<div className='page_header'>
					<button onClick={this.togglePage}>toggle</button>
				</div>
				<div className='page_elements'>
					
				</div>
				<div className='page_navig'>
					{/* наличие кнопок вперед и назад зависит от наличия props.nextSection и props.prevSection */}
				</div>
			</div>
		)
	}
}

export default connect(
	null,
	{toggleInfoWrapper}
)(Page);