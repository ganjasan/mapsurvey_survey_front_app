import {NEXT_SECTION, PREV_SECTION} from '../constants/ActionTypes';

const initState = {
    section_id:null,
    prev_section_id: null,
    next_section_id: null,
    title: "Пустая секция",
    questions:[],
};

export default function sectionReducer(state=initState, action){
	switch (action.type){
		case NEXT_SECTION:
            //return Object.assign({}, state, {center: action.center});
        case PREV_SECTION:
            //
		default:
			return state;
	}
}