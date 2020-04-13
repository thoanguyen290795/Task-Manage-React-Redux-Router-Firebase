import * as types from './../constants/ActionType';
import * as configs from './../constants/Config';

let defaultState = {
	isShow:false,
	style:'info',
	title:'',
	content:''
};

const notify = (state = defaultState, action) => {
	let {style,title,content} = action; 
	switch(action.type){
		case types.CHANGE_NOTIFY:
			state.isShow=true;
			state.style=style;
			state.title=title;
			state.content=content
			return {...state}
			case types.HIDE_NOTIFY :
			state.isShow=false
				return  {...state}
		default:
			return state;
	}
}


export default notify