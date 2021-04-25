import { useEffect,useState } from "react";


function Event({repoi,comm}) {
    return(
        <div><p className='title'> Last push:</p>
            <div>repo: {repoi}</div>
            <div>commit: {comm}</div>
        </div>
    );
}

export default Event;