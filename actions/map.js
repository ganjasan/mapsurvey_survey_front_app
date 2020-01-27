import * as types from '../constants/ActionTypes';

export function changeMapCenter(center){
	return {
		type: types.CHANGE_MAP_CENTER,
		center
	}
}