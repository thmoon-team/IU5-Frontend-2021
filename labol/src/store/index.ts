
import { combineReducers } from 'redux';
import {ContentState} from './content/content';
import { ContentReduser } from './content/reducer';
import { InpValueState } from './input/inp';
import {InputReducer} from './input/reducer';

export interface AppState {
    cont_state: ContentState,
    inp_val: InpValueState 
}


export const createRootReducer = combineReducers( {
    content: ContentReduser,
    inp: InputReducer,
})

export type RootState = ReturnType<typeof createRootReducer>