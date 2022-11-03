import {Dispatch} from 'react'


export type baseUrlType = string | undefined;;

export type headersType = {
	Authorization ?: string;
}



export type ProviderType = {
	children : any
}

export type authInitialStateType = {
	auth : {
		loading : boolean;
		user : null
	}
}

export type contactInitialStateType = {
	contact : {
		loading : boolean;
		user : null
	}
}

export type intialstateType = {

	auth : authInitialStateType;
	contact : contactInitialStateType
}


export type contextType  = {
	state : intialstateType,
	dispatch : Dispatch<any>
}
