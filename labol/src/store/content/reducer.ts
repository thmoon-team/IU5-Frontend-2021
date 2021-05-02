import { Reducer } from "redux";
import { ContentState, fetchRequest } from "./content";

export const initial: ContentState = {
    loading : false,
    data: {
        inp_value: '',
        avatar_url : '',
        followers: 0,
        following: 0,
        repos: []

    },
    err : ''
     
};
export interface UserAction {
    type: string,
    payload?: any
}

const reducer: Reducer<ContentState> = (state = initial, action : UserAction) => {
    switch(action.type) {
        case fetchRequest.fetch_req : {
            return {...state, loading: true, err: '' }
        }
        case fetchRequest.fetch_suc : {
            return {
                ...state,
                loading: false,
                data: { 
                    inp_value: action.payload[0].login,
                    avatar_url: action.payload[0].avatar_url,
                    repos: action.payload[1],
                    followers: action.payload[0].followers,
                    following: action.payload[0].following
                }
            }
        }
        case fetchRequest.fetch_err : {
            return {...state, loading: false, err: action.payload}
        }
        case 'Back': {
            return {...state, err: action.payload}
        }
        default: {
            return state;
        }
    }
}

export {reducer as ContentReduser};