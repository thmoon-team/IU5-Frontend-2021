import { Action, Dispatch } from 'redux';
import {ActionCreator} from 'redux';
import { AppState } from '..';
import { fetchRequest } from './content';
import {ThunkAction} from 'redux-thunk';

require('dotenv').config();

const key = process.env.REACT_APP_API_KEY;
const obj: RequestInit = {
    headers: {
        'Authorization' : `token `+ key 
    }
}

export const AppAction:ActionCreator<ThunkAction<void, AppState,null,Action>> =(val: string) => {
    return async (dispatch: Dispatch<Action>) => {   
        try {
                dispatch({
                    type: fetchRequest.fetch_req
                })
                setTimeout(async ()=>{
                    const user_response = await fetch('https://api.github.com/users/' + val,obj);
                    const user_response_json = await user_response.json();
                        if ('message' in user_response_json) {
                        dispatch({
                            type: fetchRequest.fetch_err,
                            payload: user_response_json["message"]
                        })
                    } else {
                        const repo_response = await fetch('https://api.github.com/users/'+ val + '/repos',obj);
                        const repo_response_json = await repo_response.json();
                        const repo_name : string[] = repo_response_json.map((val : any) => val.name)
                        dispatch({
                            type: fetchRequest.fetch_suc,
                            payload: [user_response_json,repo_name]
                        })
                    }
                },500)
                
                      
               
        } catch(e) {
                dispatch({
                    type:fetchRequest.fetch_err,
                    payload: e
                })
        }
    }
}

export const BackAction:ActionCreator<ThunkAction<void, AppState,null,Action>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: 'Back',
            payload: ''
        })

    }

}

