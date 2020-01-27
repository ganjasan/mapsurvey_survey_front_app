import {SET_SURVEY_STRUCTURE} from '../constants/ActionTypes'

const initState={
	survey_structure: null,
}

export default function appReducer(state=initState, action){
	switch (action.type) {
		case SET_SURVEY_STRUCTURE:
			return Object.assign({}, state, {survey_structure: action.survey_structure});
		
		default:
			return state;
	}
}
