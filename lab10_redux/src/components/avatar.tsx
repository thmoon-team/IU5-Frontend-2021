import React from 'react';
import './avatar.css'

interface prop {
    src: string | undefined
}

export const Avatar: React.FC<prop> = ({src}) => {
return(
    <div>
        <img src={src} alt='avatar' className='avatar'></img>
    </div>
)
}