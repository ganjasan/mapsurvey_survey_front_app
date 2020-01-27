import {TOGGLE_INFO_WRAPPER} from '../constants/ActionTypes'

const initState = {
	show:true,
}

export default function infoWrapperReducer(state=initState, action){
	switch (action.type) {
		case TOGGLE_INFO_WRAPPER:
			return Object.assign({}, state, {show: !state.show});
		default:
			return state;
	}
}