import './Favorites.css'
import info from '../../data.json'
import Box from '../Box/Box';
import { useEffect, useState } from 'react';
function Favorites({ favorites, setFavorites }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(info.results.filter(value => favorites.includes(value.zpid)));
    }, [info, favorites])
    return (
        < div id='favMain'>
            <div id="favHeader">Your saved estates</div>
            {data.length > 0 ? <div id="favBoxes">
                {data.map((value, index) => {
                    return <Box key={index} result={value} favorites={favorites} setFavorites={setFavorites} />
                })}
            </div>
                : <div id='favError'>
                    <br /><br /><br /><br /><br />
                    You have no saved properties, go back to listings and choose
                </div>
            }
        </div >
    )
}
export default Favorites;