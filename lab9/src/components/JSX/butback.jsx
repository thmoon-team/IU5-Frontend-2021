import './but_back.css'

function ButBack({oncl}) {
    return(
        <button className='but_back' onClick={oncl}>Назад</button>
    );
}

export default ButBack;