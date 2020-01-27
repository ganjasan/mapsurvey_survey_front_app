 import {CHANGE_DRAW_MODE} from '../constants/ActionTypes'

const initState = {
	draw_mode: 'simple_select'
}

export default function drawControllerReducer(state=initState, action){
	switch (action.type) {
		case CHANGE_DRAW_MODE:
			return Object.assign({}, state, {draw_mode: action.draw_mode});
		default:
			return state;
	}
}