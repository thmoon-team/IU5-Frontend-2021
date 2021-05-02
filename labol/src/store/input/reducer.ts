import { Reducer } from "redux";
import { InpValue, InpValueState } from "./inp";
import { UserAction} from '../content/reducer'
import { InpAction } from './inp';

export const initState: InpValue ={
    value: ''
}

const initInpState: InpValueState ={
    data: initState
  }



const reducer: Reducer<InpValueState> = (state = initInpState , action: UserAction) => {
    switch(action.type) {
        case InpAction.pressEtner : {
            return {...state, data: action.payload}
        }
        case InpAction.pressBut : {
            return {...state, data: action.payload}
        }
        default : {
            return state;
        }
    }
}

export { reducer as InputReducer}