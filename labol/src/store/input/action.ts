import { Dispatch } from "react";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "..";
import { UserAction } from "../content/reducer";
import { InpAction } from "./inp";


export const InputActionEnter:ActionCreator<ThunkAction<void,AppState,null,Action>> = (value: string) => {
    return async (dispatch :Dispatch<UserAction>) => {
        try{
            dispatch({
                type: InpAction.pressEtner,
                payload: value
            })


        }catch(e) {
            dispatch({
                type: 'inp_err',
                payload: 'произошла неясная мне абсолютно ошибка ошибка'
            })
        }
    }
}

export const InputActionButton:ActionCreator<ThunkAction<void,AppState,null,Action>> = (value:string) => {
    return async (dispatch:Dispatch<UserAction>) => {
        try{
            dispatch({
                type: InpAction.pressBut,
                payload: value
            })
        }catch(e) {
            dispatch({
                type: 'inp_err',
                payload: 'ошибка'
            })
        }
    }
}