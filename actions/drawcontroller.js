import * as types from '../constants/ActionTypes';

export function changeDrawMode(draw_mode){
	return {
		type: types.CHANGE_DRAW_MODE,
		draw_mode,
	}
}