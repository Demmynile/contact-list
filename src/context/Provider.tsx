import React, {createContext , useReducer } from 'react'
import {authReducer } from './reducers/auth'
import {contactReducer } from './reducers/contacts'

import {  ProviderType , contextType ,  intialstateType } from '../typings'

import { authInitialState } from './intialstates/authInitialState'
import { contactInitialState } from './intialstates/contactInitialState'



  const intialstates : intialstateType = {
    auth : authInitialState,
    contact : contactInitialState
  }


 const AppContext  = createContext<contextType>({state : intialstates , dispatch : () => null})

  const mainReducer = ({ auth : authInitialState , contact:contactInitialState }: intialstateType, action: any) => ({
    auth: authReducer(authInitialState, action),
    contact:contactReducer(contactInitialState, action),
  });


  const GlobalProvider  = ({children} : ProviderType) => {

   const[state , dispatch] = useReducer(mainReducer , intialstates)
   
   return(
    <AppContext.Provider value = {{state , dispatch}}>
        {children} 
    </AppContext.Provider>
   )
   

 }


 export {AppContext , GlobalProvider}

