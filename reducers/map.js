
import {CHANGE_MAP_CENTER}  from '../constants/ActionTypes'

const initState = {
	center: [30,60],
    style:"mapbox://styles/konuchovartem/ck3zmiisp0ele1cohe2oxqm0q",
    containerStyle:{
        height: '50vh',
        width: '50vw',
    }
};

export default function mapReducer(state=initState, action){
	switch (action.type){
		case CHANGE_MAP_CENTER:
			return Object.assign({}, state, {center: action.center});
		default:
			return state;
	}
}