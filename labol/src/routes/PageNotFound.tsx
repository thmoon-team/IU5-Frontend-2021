import {useCallback} from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router';
import { BackAction } from '../store/content/action';
import './PageNotFound.css'

function PageNotFound() {
    const his = useHistory();
    const dispatch = useDispatch();

    const back = useCallback(()=>{
        dispatch(BackAction());
        his.push('/labol/build/');
    },[dispatch,his]);

    return (
        <div className="PageNotFound">
            <span>Page not found: 404</span>
            <button className='pnf_button' onClick={back}>Назад к поиску</button>
        </div>
    );
}

export default withRouter(PageNotFound);