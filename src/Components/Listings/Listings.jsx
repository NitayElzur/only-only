import { useState, useEffect } from 'react';
import './Listings.css'
import Box from '../Box/Box'
import data from '../../data.json'
import Filter from '../Filter/Filter';
function Body({favorites, setFavorites}) {
    const [data1, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [sort, setSort] = useState('');
    const [focus, setFocus] = useState(false);
    const [input, setInput] = useState('');

    useEffect(() => {
        setData(data.results.filter((value) => value.bathrooms > 0 && !/google/.test(value.imgSrc)));
        setFilterData(data.results.filter((value) => value.bathrooms > 0 && !/google/.test(value.imgSrc)))
    }, [])

    useEffect(() => {
        switch (sort) {
            case ('priceLowHigh'): setFilterData(filterData.toSorted((a, b) => a.price - b.price))
                break;
            case ('priceHighLow'): setFilterData(filterData.toSorted((a, b) => b.price - a.price))
                break;
            case ('bathLowHigh'): setFilterData(filterData.toSorted((a, b) => a.bathrooms - b.bathrooms))
                break;
            case ('bathHighLow'): setFilterData(filterData.toSorted((a, b) => b.bathrooms - a.bathrooms))
                break;
            case ('bedLowHigh'): setFilterData(filterData.toSorted((a, b) => a.bedrooms - b.bedrooms))
                break;
            case ('bedHighLow'): setFilterData(filterData.toSorted((a, b) => b.bedrooms - a.bedrooms))
                break;
        }
    }, [sort])
    function searchBy() {
        setFilterData(data1.filter(value => RegExp(input).test(value.city.toLowerCase()) || RegExp(input).test(value.streetAddress.toLowerCase()) || RegExp(input).test(value.country.toLowerCase())))
    }
    return (
        <div className='body'>
            <div className="bodyHeader">
                <div id="bodyIntroSearch">

                    Welcome to our search engine!
                    <input type="text" placeholder='Search' id='bodySearch'
                        className={focus ? `searchEnd` : `searchStart`}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key == 'Enter' && searchBy()}
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
                                <Box key={index} result={value} favorites={favorites} setFavorites={setFavorites}/>
                            )
                        })
                    }
                </div>}
        </div>
    )
}
export default Body