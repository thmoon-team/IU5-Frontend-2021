import React, {useCallback, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router';
import { Avatar } from '../components/avatar';
import { useTypedSeceltorHook } from '../hooks/typedUseSelector';
import { AppAction } from '../store/content/action';
import './SearchContent.css'

function Content() {
    const state = useTypedSeceltorHook(store => store);
    const dispatch = useDispatch();
    const his = useHistory();

    useEffect(() => {
        dispatch(AppAction(state.inp.data));
    }, [dispatch, state.inp.data]);

    const back = useCallback(()=>{
        his.push('/labol/build/');
    },[his]);

    if(state.content.err !=='') 
        his.push('/labol/build/error');

    if(state.content.loading) return(
        <div>
            <h1 className="load">Loading...</h1>
        </div>
    );    
    
    return(
        <div className="content">
            <div className='prev'>
                <Avatar src={state.content.data.avatar_url}></Avatar>
                <div className='name'>{state.content.data.inp_value}</div>
                <div className='lable'>
                    <span>followers: {state.content.data.followers}</span>
                    <span>following: {state.content.data.following}</span>
                </div>
            </div>
            <div className='repo'>
                <label>repos: {state.content.data.repos?.length}</label>
                <div className='overflow-repos'>
                    {state.content.data.repos?.map(val => (<div className='repo-lab'>{val}</div>))}
                </div>
            </div>
            <button className='back_button' onClick={back}>Назад к поиску</button>
        </div>
    );
}

export default withRouter(Content);