import * as types from './../constants/ActionType';

export const actListProduct = () => {
	return {
		type : types.LIST_PRODUCT
	}
}
export const actBuyProduct = (product, quantity) => {
	return {
		type : types.BUY_PRODUCT,
		product, 
		quantity
	}
}

export const actUpdateProduct = (product, quantity) => {
	return {
		type : types.UPDATE_PRODUCT,
		product, 
		quantity
	}
}
export const actLogout = () => {
	return {
		type : types.USER_LOGOUT
		
	}
}
export const actLogin = (userInfo) => {
	return {
		type : types.USER_LOGIN,
		userInfo
	}
}

export const actHideNotify = () => {
	return {
		type : types.HIDE_NOTIFY,
	}
}

export const actChangeNotify = (style,title,content) => {
	return {
		type : types.CHANGE_NOTIFY,
		style,title,content
	}
}
