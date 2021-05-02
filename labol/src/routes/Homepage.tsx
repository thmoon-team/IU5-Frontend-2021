import React from 'react'
import { useDispatch} from 'react-redux';
import { useHistory, withRouter } from 'react-router';
import { InputActionEnter } from '../store/input/action';
import './Homepage.css'


function HomePage() {
    const his = useHistory();
    const dispatch = useDispatch();


    const dat = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if( ev.key === 'Enter') {
            let str = document.getElementById('inp') as HTMLInputElement;
            dispatch(InputActionEnter(str.value));
            his.push('/labol/build/search')
        }
    }

    const dat2 = () => {
        let str = document.getElementById('inp') as HTMLInputElement;
        dispatch(InputActionEnter(str.value));
        his.push('/labol/build/search')
    }

    return(
        <div className='homepage'>
            <input 
                className="inp_class"
                type='text' 
                id='inp'
                placeholder='Введителя имя ползователя GitHub...' 
                onKeyPress={(ev)=>dat(ev)}
            />
            <button className='home_button' onClick={dat2}>ok</button>
        </div>
    );
}

export default withRouter(HomePage);