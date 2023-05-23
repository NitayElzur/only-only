import { useState } from 'react';
function Heart({text}) {
    const [like, setLike] = useState(false);
    return (
        <button className='boxButton' id='heartBtn' type='button' onClick={() => setLike(!like)}>
            {like ? '❤️' : '🤍'} {text}
        </button>
    )
}
export default Heart;