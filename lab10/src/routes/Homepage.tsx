import React, { useEffect, useRef, useState } from 'react'
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router';
import { useTypedSeceltorHook } from '../hooks/typedUseSelector';
import { AppState, createRootReducer } from '../store';
import { AppAction } from '../store/content/action';
import { fetchRequest } from '../store/content/content';
import { InputActionEnter } from '../store/input/action';
import './Homepage.css'


function HomePage() {
    const state = useTypedSeceltorHook(store => store)
    const his = useHistory();
    const dispatch = useDispatch();


    const dat = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if( ev.key === 'Enter') {
            let str = document.getElementById('inp') as HTMLInputElement;
            dispatch(InputActionEnter(str.value));
            his.push('/search')
        }
    }

    const dat2 = () => {
        let str = document.getElementById('inp') as HTMLInputElement;
        dispatch(InputActionEnter(str.value));
        his.push('/search')
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