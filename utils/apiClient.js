import axios from 'axios';

const BASE_URI =  process.env.BASE_URI;

const client = axios.create({
 baseURL: BASE_URI,
 json: true
});

class APIClient {
	constructor(accessToken) {
	   this.accessToken = accessToken;
	}

	//must return survey structure by id
	getSurveyStructure(survey_id){
		return {
					survey_id:1,
					title: "Тестовый опрос",
					sections:[
						{
							section_id:1,
							prev_section_id: null,
							next_section_id: 2,
							title: "Секция приветствия",
							questions:[
								{
									question_id:1,
									type: "plain_text",
									value: "Это приветственное слово!",
									order:0,
								}
							],
						},
						{
							section_id:2,
							prev_section_id:1,
							next_section_id:null,
							title: "Первая секция с вопросами",
							questions:[
								{
									question_id:2,
									type: "input_text",
									value: "Как вас зовут?",
									order: 0,
								},
								{
									question_id:3,
									type: "input_text",
									value: "Сколько вам лет?",
									order: 1,
								}
							]
						}
					],
			}
		
	};
}

async function  perform(method, resource, data){
	   	return client({
	    	method,
	    	url: resource,
	    	data,
	    	headers: {
	       		Authorization: `Bearer ${this.accessToken}`
	    	}
	   	}).then(resp => {
	     	return resp.data ? resp.data : [];
		})
	}


export default APIClient;

