import * as types from '../constants/ActionTypes';

export function openNextSection(){
    return {
        type: types.NEXT_SECTION
    }
}

export function openPrevSection(){
    return{
        type: types.PREV_SECTION
    }
}
