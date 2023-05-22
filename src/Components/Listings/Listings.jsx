import { useState, useEffect } from 'react';
import './Listings.css'
import Box from '../Box/Box'
import data from '../../data.json'
import Filter from '../Filter/Filter';
import { Link } from 'react-router-dom';
function Body() {
    const [data1, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [sort, setSort] = useState('');
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        setData(data.results.filter((value) => value.bathrooms > 0 && !/google/.test(value.imgSrc)));
        setFilterData(data.results.filter((value) => value.bathrooms > 0 && !/google/.test(value.imgSrc)))
    }, [])

    useEffect(() => {
        switch (sort) {
            case ('priceLowHigh'): setFilterData(data1.toSorted((a, b) => a.price - b.price))
                break;
            case ('priceHighLow'): setFilterData(data1.toSorted((a, b) => b.price - a.price))
                break;
            case ('bathLowHigh'): setFilterData(data1.toSorted((a, b) => a.bathrooms - b.bathrooms))
                break;
            case ('bathHighLow'): setFilterData(data1.toSorted((a, b) => b.bathrooms - a.bathrooms))
                break;
            case ('bedLowHigh'): setFilterData(data1.toSorted((a, b) => a.bedrooms - b.bedrooms))
                break;
            case ('bedHighLow'): setFilterData(data1.toSorted((a, b) => b.bedrooms - a.bedrooms))
                break;
        }
    }, [sort])
    return (
        <div className='body'>
            <div className="bodyHeader">
                <div id="bodyIntroSearch">

                    Welcome to our search engine!
                    <input type="text" placeholder='Search' id='bodySearch'
                        className={focus ? `searchEnd` : `searchStart`}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    />
                </div>
                <div id="bodySortFilter">
                    <select id='listingsSort' defaultValue='blank' onChange={(e) => { setSort(e.target.value) }}>
                        <option value='blank' disabled>Sort by:</option>
                        <option value="priceLowHigh">By price from lowest to highest</option>
                        <option value="priceHighLow">By price from highest to lowest</option>
                        <option value="bathHighLow">By number of bathrooms from highest to lowest</option>
                        <option value="bathLowHigh">By number of bathrooms from lowest to highest</option>
                        <option value="bedHighLow">By number of bedrooms from highest to lowest</option>
                        <option value="bedLowHigh">By number of bedrooms from lowest to highest</option>
                    </select>
                    <Filter setFilterData={setFilterData} data={data1} setData={setData} />
                </div>
            </div>
            {filterData &&
                <div className="bodyBoxes">
                    {
                        filterData?.map((value, index) => {
                            return (
                                <Link key={index} className='link boxes' to={`${value.zpid}`}>
                                    <Box result={value} />
                                </Link>
                            )
                        })
                    }
                </div>}
        </div>
    )
}
export default Body