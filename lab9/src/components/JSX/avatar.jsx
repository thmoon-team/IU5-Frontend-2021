import './img.css'

function Avatar({url}){
    return (
      <div><img className='img' src={url} alt='avatar'></img></div>
    );
  }

  export default Avatar;