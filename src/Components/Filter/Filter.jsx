import { useEffect, useState } from 'react';
import './Filter.css'
function Filter({ data, setFilterData }) {
    const [shown, setShown] = useState(false);
    const [inputValues, setInputValues] = useState({})
    useEffect(() => {
        setInputValues({
            ...inputValues,
            minBedroom: data.toSorted((a, b) => a.bedrooms - b.bedrooms).shift()?.bedrooms,
            maxBedroom: data.toSorted((a, b) => a.bedrooms - b.bedrooms).pop()?.bedrooms,
            minPrice: data.toSorted((a, b) => a.price - b.price).shift()?.price,
            maxPrice: data.toSorted((a, b) => a.price - b.price).pop()?.price,
            minBathrooms: data.toSorted((a, b) => a.bathrooms - b.bathrooms).shift()?.bathrooms,
            maxBathrooms: data.toSorted((a, b) => a.bathrooms - b.bathrooms).pop()?.bathrooms
        })
    }, [data])
    return (
        <div id='filterMain'>
            <img src="https://cdn-icons-png.flaticon.com/512/107/107799.png" alt="" id='filterImg' onClick={() => setShown(!shown)} />
            <div id="filterBody" style={{ display: shown ? "flex" : "none" }}>
                <div id="filterBedrooms" className='filterItem'>
                    Minimum Bedrooms:
                    <input type="number" className='inputFilter'
                        onChange={e => setInputValues({ ...inputValues, minBedroom: e.target.value })} value={inputValues.minBedroom ? inputValues.minBedroom : 0} />
                    Maximum Bedrooms:
                    <input type="number" className='inputFilter'
                        onChange={e => setInputValues({ ...inputValues, maxBedroom: e.target.value })} value={inputValues.maxBedroom ? inputValues.maxBedroom : 0} />
                </div>
                <div id="filterBathrooms" className='filterItem' >
                    Minimum Bathrooms:
                    <input type="number" className='inputFilter'
                        onChange={e => setInputValues({ ...inputValues, minBathrooms: e.target.value })} value={inputValues.minBathrooms? inputValues.minBathrooms : 0} />
                    Maximum Bathrooms:
                    <input type="number" className='inputFilter'
                        onChange={e => setInputValues({ ...inputValues, maxBathrooms: e.target.value })} value={inputValues.maxBathrooms ? inputValues.maxBathrooms : 0} />
                </div>
                <div id="filterPrice" className='filterItem'>
                    Minimum Price:
                    <input type="number" className='inputFilterPrice'
                        onChange={e => setInputValues({ ...inputValues, minPrice: e.target.value })} value={inputValues.minPrice ? inputValues.minPrice : 0} />
                    Maximum Price:
                    <input type="number" className='inputFilterPrice'
                        onChange={e => setInputValues({ ...inputValues, maxPrice: e.target.value })} value={inputValues.maxPrice ? inputValues.maxPrice : 0} />
                </div>
                <div id="filterButtons">
                    <button id='filterButton' className='boxButton' onClick={() => {
                        setFilterData(data.filter(value => value.price >= inputValues.minPrice && value.price <= inputValues.maxPrice && value.bedrooms >= inputValues.minBedroom && value.bedrooms <= inputValues.maxBedroom && value.bathrooms >= inputValues.minBathrooms && value.bathrooms <= inputValues.maxBathrooms))
                    }}>Filter</button>
                    <button id='filterButton' className='boxButton' onClick={() => setFilterData(data)}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default Filter;