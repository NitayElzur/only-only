import { useNavigate, useParams } from 'react-router-dom';
import './Product.css'
import info from '../../data.json'
import { useEffect, useState } from 'react';
function Product() {
    function commafy(num) {
        const str = num?.toString().split('.');
        if (str[0].length >= 2) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }
    const navigate = useNavigate();
    const [data, setData] = useState('');
    const { id } = useParams();
    useEffect(() => {
        const n = [...info.results.filter(value => value.zpid == id)];
        n[0] ? setData(...n) : navigate('/errorpage')

    }, [navigate, info])
    return (
        <div id='productMain'>
            <div id="productDivBack">
                <div id='productImgDiv'>
                    <img id='productImg' src={data.imgSrc} />
                </div>
                <div id='productInfo'>
                    <div className='productItem'>{`Location: ${data.streetAddress}, ${data.city}, ${data.country}`}</div>
                    <div className='productItem'>{`Number of bathrooms: ${data.bathrooms}`}</div>
                    <div className='productItem'>{`Number of bedrooms: ${data.bedrooms}`}</div>
                    <div className="productItem">{`Price: ${data.price && commafy(data.price)}${data.currency}`}</div>
                    <div className="productItem">{`Rent estimate: ${data.rentZestimate ? commafy(data.rentZestimate) + data.currency : 'unavailable'}`}</div>
                </div>
            </div>
        </div>
    )
}
export default Product;