import {SET_SURVEY_STRUCTURE} from '../constants/ActionTypes'

export function setSurveyStructure(survey_structure){
	return {
		type: SET_SURVEY_STRUCTURE,
		survey_structure
	}
}